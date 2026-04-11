<?php

$dir = 'public/marketassets';
$files = glob("$dir/*.png");

echo "Found " . count($files) . " PNG files to compress...\n";

foreach ($files as $file) {
    try {
        $image = imagecreatefrompng($file);
        if (!$image) {
            echo "Failed to load $file\n";
            continue;
        }

        $width = imagesx($image);
        $height = imagesy($image);

        // Limit size to max 1200px
        $maxDimension = 1200;
        $newWidth = $width;
        $newHeight = $height;

        if ($width > $maxDimension || $height > $maxDimension) {
            if ($width > $height) {
                $newWidth = $maxDimension;
                $newHeight = (int)($height * ($maxDimension / $width));
            } else {
                $newHeight = $maxDimension;
                $newWidth = (int)($width * ($maxDimension / $height));
            }
        }

        $resized = imagecreatetruecolor($newWidth, $newHeight);
        
        // Preserve transparency if we were keeping it, but we're going to JPG
        // so we fill with white background
        $white = imagecolorallocate($resized, 255, 255, 255);
        imagefill($resized, 0, 0, $white);
        
        imagecopyresampled($resized, $image, 0, 0, 0, 0, $newWidth, $newHeight, $width, $height);

        $newFile = str_replace('.png', '.jpg', $file);
        imagejpeg($resized, $newFile, 80); // 80% quality

        echo "Compressed: $file -> $newFile (" . round(filesize($newFile)/1024) . " KB)\n";

        imagedestroy($image);
        imagedestroy($resized);
        unlink($file);
    } catch (Exception $e) {
        echo "Error processing $file: " . $e->getMessage() . "\n";
    }
}

echo "Done.\n";
