<?php

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\File;

/**
 * This script attempts to import a MySQL dump into an SQLite database.
 * It performs basic data cleaning to remove MySQL-specific syntax.
 */

require __DIR__ . '/../vendor/autoload.php';
$app = require_once __DIR__ . '/../bootstrap/app.php';
$kernel = $app->make(Illuminate\Contracts\Console\Kernel::class);
$kernel->bootstrap();

// Force SQLite connection for this script
config(['database.default' => 'sqlite']);
config(['database.connections.sqlite.database' => database_path('database.sqlite')]);

$sqlPath = __DIR__ . '/../database/schema/camsociety.sql';
$dbPath = database_path('database.sqlite');

if (!File::exists(dirname($dbPath))) {
    File::makeDirectory(dirname($dbPath), 0755, true);
}

if (!File::exists($dbPath)) {
    echo "Creating SQLite database file at $dbPath...\n";
    File::put($dbPath, '');
}

if (!File::exists($sqlPath)) {
    die("SQL file not found at $sqlPath\n");
}

echo "Reading SQL file...\n";
$sql = File::get($sqlPath);

echo "Cleaning SQL for SQLite compatibility...\n";

// Remove MySQL specific table options
$sql = preg_replace('/ENGINE=InnoDB\s*/i', '', $sql);
$sql = preg_replace('/DEFAULT\s+CHARSET=[^\s;]*/i', '', $sql);
$sql = preg_replace('/COLLATE=[^\s;]*/i', '', $sql);
$sql = preg_replace('/AUTO_INCREMENT=\d+\s*/i', '', $sql);
$sql = preg_replace('/CHARACTER\s+SET\s+[^\s;]*/i', '', $sql);
$sql = preg_replace('/on\s+update\s+current_timestamp\(\)/i', '', $sql);
$sql = preg_replace('/CHECK\s+ \(json_valid\([^)]+\)\)/i', '', $sql);
$sql = preg_replace('/USING\s+BTREE/i', '', $sql);
$sql = preg_replace('/KEY\s+`[^`]+`\s+\(`[^`]+`\)/i', '', $sql); // Simple keys often fail in CREATE

// Remove specific MySQL settings
$sql = preg_replace('/SET\s+SQL_MODE\s*=\s*[^;]+;/i', '', $sql);
$sql = preg_replace('/SET\s+time_zone\s*=\s*[^;]+;/i', '', $sql);
$sql = preg_replace('/START\s+TRANSACTION;/i', '', $sql);
$sql = preg_replace('/COMMIT;/i', '', $sql);

// Split into individual statements (basic approximation)
$statements = array_filter(array_map('trim', explode(';', $sql)));

echo "Starting import into SQLite ($dbPath)...\n";

try {
    DB::beginTransaction();
    
    // Disable foreign key checks for import
    DB::statement('PRAGMA foreign_keys = OFF;');
    
    foreach ($statements as $statement) {
        if (empty($statement)) continue;
        
        // Skip migration table to let Laravel handle it
        if (stripos($statement, 'CREATE TABLE `migrations`') !== false || 
            stripos($statement, 'INSERT INTO `migrations`') !== false) {
            echo "Skipping migrations table statement...\n";
            continue;
        }

        // Skip ALTER TABLE statements which often fail in SQLite for primary keys/auto-increment
        if (stripos($statement, 'ALTER TABLE') !== false) {
            continue;
        }
        
        try {
            DB::statement($statement);
        } catch (\Exception $e) {
            // Silently skip common errors during cleaning
            if (stripos($e->getMessage(), 'already exists') === false) {
                echo "Skipped statement: " . substr($statement, 0, 50) . "...\n";
                // echo "Error: " . $e->getMessage() . "\n";
            }
        }
    }
    
    DB::statement('PRAGMA foreign_keys = ON;');
    DB::commit();
    echo "Import completed successfully!\n";
} catch (\Exception $e) {
    DB::rollBack();
    die("Import failed: " . $e->getMessage() . "\n");
}
