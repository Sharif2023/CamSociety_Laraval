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
        'photomarket/photomarket1.png',
        'photomarket/photomarket2.png',
        'photomarket/photomarket3.png',
        'photomarket/photomarket4.png',
        'photomarket/photomarket5.png',
        'photomarket/photomarket6.png',
        'photomarket/photomarket7.png',
        'photomarket/photomarket8.png',
        'photomarket/photomarket9.png',
        'photomarket/photomarket10.png',
        'photomarket/photomarket11.png',
        'photomarket/photomarket12.png',
        'photomarket/photomarket13.png',
        'photomarket/photomarket14.png',
        'photomarket/photomarket15.png',
        'photomarket/photomarket16.png',
        'photomarket/photomarket17.png',
        'photomarket/photomarket18.png',
        'photomarket/photomarket19.png',
        'photomarket/photomarket20.png',
        'photomarket/photomarket21.png',
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
