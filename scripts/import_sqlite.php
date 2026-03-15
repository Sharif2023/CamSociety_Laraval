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

// Remove MySQL specific table options and comments
$sql = preg_replace('/ENGINE=InnoDB\s*/i', '', $sql);
$sql = preg_replace('/DEFAULT\s+CHARSET=[^\s;]*/i', '', $sql);
$sql = preg_replace('/COLLATE=[^\s;]*/i', '', $sql);
$sql = preg_replace('/CHARACTER\s+SET\s+[^\s;]*/i', '', $sql);
$sql = preg_replace('/on\s+update\s+current_timestamp\(\)/i', '', $sql);
$sql = preg_replace('/CHECK\s+ \(json_valid\([^)]+\)\)/i', '', $sql);

// Step-by-step cleaning for complex definitions
$sql = preg_replace('/\bbigint\(\d+\)\s+UNSIGNED\s+AUTO_INCREMENT\b/i', 'INTEGER PRIMARY KEY AUTOINCREMENT', $sql);
$sql = preg_replace('/\bint\(\d+\)\s+UNSIGNED\s+AUTO_INCREMENT\b/i', 'INTEGER PRIMARY KEY AUTOINCREMENT', $sql);
$sql = preg_replace('/\bbigint\(\d+\)\s+UNSIGNED\b/i', 'INTEGER', $sql);
$sql = preg_replace('/\bint\(\d+\)\s+UNSIGNED\b/i', 'INTEGER', $sql);
$sql = preg_replace('/\btinyint\(\d+\)\s+UNSIGNED\b/i', 'INTEGER', $sql);
$sql = preg_replace('/\bbigint\(\d+\)\b/i', 'INTEGER', $sql);
$sql = preg_replace('/\bint\(\d+\)\b/i', 'INTEGER', $sql);
$sql = preg_replace('/\btinyint\(\d+\)\b/i', 'INTEGER', $sql);
$sql = preg_replace('/\bUNSIGNED\b/i', '', $sql);

// Remove problematic keys and constraints that SQLite doesn't support in CREATE TABLE
$sql = preg_replace('/,\s*(UNIQUE\s+)?KEY\s+`[^`]+`\s+\([^)]+\)/i', '', $sql);
$sql = preg_replace('/,\s*CONSTRAINT\s+`[^`]+`\s+FOREIGN\s+KEY\s+[^)]+\)\s+REFERENCES\s+[^)]+\)/i', '', $sql);

// Remove specific MySQL settings
$sql = preg_replace('/SET\s+SQL_MODE\s*=\s*[^;]+;/i', '', $sql);
$sql = preg_replace('/SET\s+time_zone\s*=\s*[^;]+;/i', '', $sql);
$sql = preg_replace('/START\s+TRANSACTION;/i', '', $sql);
$sql = preg_replace('/COMMIT;/i', '', $sql);

echo "Starting import into SQLite ($dbPath)...\n";

try {
    DB::beginTransaction();
    
    // Disable foreign key checks for import
    DB::statement('PRAGMA foreign_keys = OFF;');

    $tempStatement = '';
    $inString = false;
    
    foreach (explode("\n", $sql) as $line) {
        $trimmedLine = trim($line);
        if (empty($trimmedLine) || str_starts_with($trimmedLine, '--') || str_starts_with($trimmedLine, '/*')) {
            continue;
        }

        $tempStatement .= $line . "\n";
        
        // Count single quotes to handle multi-line strings (basic)
        $inString = (substr_count($tempStatement, "'") - substr_count($tempStatement, "\\'")) % 2 !== 0;

        if (!$inString && str_ends_with($trimmedLine, ';')) {
            $statement = trim($tempStatement);
            $tempStatement = '';
            
            if (empty($statement)) continue;

            // Skip migration table to let Laravel handle it
            if (stripos($statement, 'CREATE TABLE `migrations`') !== false || 
                stripos($statement, 'INSERT INTO `migrations`') !== false) {
                continue;
            }

            // Skip ALTER TABLE statements for primary keys/auto-increment (SQLite handles this in CREATE)
            if (stripos($statement, 'ALTER TABLE') !== false) {
                continue;
            }

            try {
                DB::statement($statement);
            } catch (\Exception $e) {
                if (stripos($e->getMessage(), 'already exists') === false) {
                    echo "Skipped statement (Error: " . substr($e->getMessage(), 0, 50) . "...)\n";
                }
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
