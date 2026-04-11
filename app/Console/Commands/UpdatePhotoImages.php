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
        // ── Unsplash (Identical Visual Categories) ───────────────────────────
        // Rice terraces, Bali (matches _UPXYs5HUx4)
        'https://images.unsplash.com/photo-1604537372136-89b3dae196e3?w=800&q=80',
        // Small fishing boats (matches sk8LPCMvw_A)
        'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
        // People walking street (matches qIUb3VNmxjI)
        'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&q=80',
        // Lake green trees (matches qay3lNDSHzc)
        'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&q=80',
        // White brown boat on sea (matches oRsxtzxVmsY)
        'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=800&q=80',
        // Road tea estate (matches gv_R_oDbeaM)
        'https://images.unsplash.com/photo-1558981285-6f0c8ad052d5?w=800&q=80',
        // Sunset rice field (matches aca64kSojkE)
        'https://images.unsplash.com/photo-1536514498073-50e69d39c6cf?w=800&q=80',
        // Couple on boat (matches 4mF807hpgIc)
        'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80',
        // Man green grass (matches CHWePkcDEPo)
        'https://images.unsplash.com/photo-1500835556837-99ac94a94552?w=800&q=80',
        // River with boats and people (matches 8bffiHxMp4U)
        'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=800&q=80',
        // People sea shore (matches jQetJK7FiHI)
        'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
        // Urban park (matches 8fcczOBgvpI)
        'https://images.unsplash.com/photo-1573219099376-d5e55cc775e4?w=800&q=80',

        // ── Pixabay CDN ───────────────────────────────────────────────────────
        'https://cdn.pixabay.com/photo/2024/11/18/09/25/jut-9205747_1280.jpg',
        'https://cdn.pixabay.com/photo/2020/01/08/09/00/dog-4748162_1280.jpg',
        'https://cdn.pixabay.com/photo/2019/11/20/17/16/spider-webs-4641236_1280.jpg',
        'https://cdn.pixabay.com/photo/2020/03/06/08/41/outdoor-4906115_1280.jpg',
        'https://cdn.pixabay.com/photo/2019/12/07/14/11/boat-4679923_1280.jpg',
        'https://cdn.pixabay.com/photo/2018/08/23/14/55/nature-3626209_1280.jpg',
        'https://cdn.pixabay.com/photo/2022/06/24/17/13/water-tank-7281505_1280.jpg',
        'https://cdn.pixabay.com/photo/2019/11/27/11/00/landscape-4656885_1280.jpg',
        'https://cdn.pixabay.com/photo/2019/09/18/13/22/landscape-4485614_1280.jpg',
        'https://cdn.pixabay.com/photo/2020/07/05/13/09/sunrise-5373924_1280.jpg',
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
