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
        'photomarket/1.jpg',
        'photomarket/2.jpg',
        'photomarket/3.jpg',
        'photomarket/4.jpg',
        'photomarket/5.jpg',
        'photomarket/6.jpg',
        'photomarket/7.jpg',
        'photomarket/8.jpg',
        'photomarket/9.jpg',
        'photomarket/10.jpg',
        'photomarket/11.jpg',
        'photomarket/12.jpg',
        'photomarket/13.jpg',
        'photomarket/14.jpg',
        'photomarket/15.jpg',
        'photomarket/16.jpg',
        'photomarket/17.jpg',
        'photomarket/18.jpg',
        'photomarket/19.jpg',
        'photomarket/20.jpg',
        'photomarket/21.jpg',
        'photomarket/22.jpg',
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
