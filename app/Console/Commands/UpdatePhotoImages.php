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
        'https://unsplash.com/photos/a-vertical-aerial-view-of-a-person-climbing-up-the-tegallalang-rice-terrace-in-bali-indonesia-_UPXYs5HUx4',
        'https://unsplash.com/photos/a-number-of-small-boats-in-a-body-of-water-sk8LPCMvw_A',
        'https://unsplash.com/photos/people-walking-on-street-during-daytime-qIUb3VNmxjI',
        'https://unsplash.com/photos/lake-surrounded-with-tall-green-trees-qay3lNDSHzc',
        'https://unsplash.com/photos/white-and-brown-boat-on-sea-under-blue-sky-during-daytime-oRsxtzxVmsY',
        'https://unsplash.com/photos/an-aerial-view-of-a-road-winding-through-a-tea-estate-gv_R_oDbeaM',
        'https://unsplash.com/photos/the-sun-is-setting-over-a-rice-field-aca64kSojkE',
        'https://unsplash.com/photos/a-couple-of-people-on-a-boat-in-the-water-4mF807hpgIc',
        'https://unsplash.com/photos/man-in-blue-shirt-standing-on-green-grass-field-during-daytime-CHWePkcDEPo',
        'https://unsplash.com/photos/a-river-filled-with-lots-of-boats-filled-with-people-8bffiHxMp4U',
        'https://unsplash.com/photos/people-standing-on-sea-shore-during-daytime-jQetJK7FiHI',
        'https://unsplash.com/photos/a-scenic-of-an-urban-park-8fcczOBgvpI',
        'https://pixabay.com/images/download/19661338-jut-5973745_1920.jpg',
        'https://pixabay.com/images/download/raja-cse-dog-4772195_1920.jpg',
        'https://pixabay.com/images/download/raja-cse-spider-webs-4716492_1920.jpg',
        'https://pixabay.com/images/download/raja-cse-outdoor-4832369_1920.jpg',
        'https://pixabay.com/images/download/raja-cse-boat-4732917_1920.jpg',
        'https://pixabay.com/images/download/t_ushar-nature-3673387_1920.jpg',
        'https://pixabay.com/images/download/moumit2019-water-tank-7396205_1920.jpg',
        'https://pixabay.com/images/download/x-4744321_1920.jpg',
        'https://pixabay.com/images/download/x-4653442_1920.jpg',
        'https://pixabay.com/images/download/x-5089973_1920.jpg',
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
