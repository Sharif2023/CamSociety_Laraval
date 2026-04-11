<?php

namespace App\Console\Commands;

use App\Models\PhotoSell;
use Illuminate\Console\Command;

class UpdatePhotoImages extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'photos:update-images';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Replace photo_sells image_url values with curated real photos';

    /**
     * Real curated image URLs for marketplace photos.
     * 12 from Unsplash + 10 from Pixabay = 22 total
     */
    protected array $imageUrls = [
        'marketassets/photomarket1.png',
        'marketassets/photomarket2.png',
        'marketassets/photomarket3.png',
        'marketassets/photomarket4.png',
        'marketassets/photomarket5.png',
        'marketassets/photomarket6.png',
        'marketassets/photomarket7.png',
        'marketassets/photomarket8.png',
        'marketassets/photomarket9.png',
        'marketassets/photomarket10.png',
        'marketassets/photomarket11.png',
        'marketassets/photomarket12.png',
        'marketassets/photomarket13.png',
        'marketassets/photomarket14.png',
        'marketassets/photomarket15.png',
        'marketassets/photomarket16.png',
        'marketassets/photomarket17.png',
        'marketassets/photomarket18.png',
        'marketassets/photomarket19.png',
        'marketassets/photomarket20.png',
        'marketassets/photomarket21.png',
    ];

    /**
     * Execute the console command.
     */
    public function handle(): int
    {
        $photos = PhotoSell::orderBy('id')->take(count($this->imageUrls))->get();

        if ($photos->isEmpty()) {
            $this->warn('No photo_sells records found. Run the seeder first.');
            return self::FAILURE;
        }

        $this->info('Updating ' . $photos->count() . ' marketplace photo images...');
        $bar = $this->output->createProgressBar($photos->count());
        $bar->start();

        foreach ($photos as $index => $photo) {
            $photo->update(['image_url' => $this->imageUrls[$index]]);
            $bar->advance();
        }

        $bar->finish();
        $this->newLine();
        $this->info('✅ Images updated successfully!');

        return self::SUCCESS;
    }
}
