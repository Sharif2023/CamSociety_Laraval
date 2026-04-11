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
        'marketassets/photomarket1.jpg',
        'marketassets/photomarket2.jpg',
        'marketassets/photomarket3.jpg',
        'marketassets/photomarket4.jpg',
        'marketassets/photomarket5.jpg',
        'marketassets/photomarket6.jpg',
        'marketassets/photomarket7.jpg',
        'marketassets/photomarket8.jpg',
        'marketassets/photomarket9.jpg',
        'marketassets/photomarket10.jpg',
        'marketassets/photomarket11.jpg',
        'marketassets/photomarket12.jpg',
        'marketassets/photomarket13.jpg',
        'marketassets/photomarket14.jpg',
        'marketassets/photomarket15.jpg',
        'marketassets/photomarket16.jpg',
        'marketassets/photomarket17.jpg',
        'marketassets/photomarket18.jpg',
        'marketassets/photomarket19.jpg',
        'marketassets/photomarket20.jpg',
        'marketassets/photomarket21.jpg',
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

        // Delete any extra records beyond the 21 we updated
        PhotoSell::whereNotIn('id', $photos->pluck('id'))->delete();

        $bar->finish();
        $this->newLine();
        $this->info('✅ Images updated and extra records removed successfully!');

        return self::SUCCESS;
    }
}
