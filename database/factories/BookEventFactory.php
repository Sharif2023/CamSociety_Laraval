<?php

namespace Database\Factories;

use App\Models\User;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\BookEvent>
 */
class BookEventFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {

        $eventTypes = [
            'Wedding Photography', 'Gaye Holud Shoot', 'Bou Bhat Ceremony',
            'Birthday Party Coverage', 'Corporate Event Photography',
            'Product Photography for E-commerce', 'Pre-Wedding Outdoor Shoot',
            'Maternity Photoshoot', 'Newborn Baby Portrait',
            'Fashion Show Coverage', 'Real Estate/Interior Photography',
            'Concert / Live Music Photography', 'Anniversary Celebration',
            'Cultural Program Photography'
        ];

        $bdLocations = [
            'Dhanmondi, Dhaka', 'Gulshan, Dhaka', 'Banani, Dhaka', 'Uttara, Dhaka', 'Mirpur, Dhaka',
            'Puran Dhaka', 'Baily Road, Dhaka', 'Mohammadpur, Dhaka',
            'Nasirabad, Chattogram', 'Agrabad, Chattogram', 'GEC Circle, Chattogram',
            'Zindabazar, Sylhet', 'Shibbari, Khulna', 'Shaheb Bazar, Rajshahi',
            'Chawkbazar, Cumilla', 'Sadar Road, Barisal'
        ];

        // Description templates to make it sound like a photography gig
        $descriptions = [
            "We are looking for an experienced photographer for our upcoming event. The photographer should have their own professional gear and handle both raw and edited photo delivery within 3 days.",
            "Seeking a creative photographer to capture candid moments. Lighting equipment is a plus. Expected to cover the entire duration of the event.",
            "Need a professional photographer for a premium shoot. Experience in similar events is required. Please share your portfolio when applying.",
            "Looking for a reliable photographer to cover our program. Need full event coverage including guest photos and key moments. Quick delivery of edited photos is expected.",
            "We need a skilled photographer for an outdoor shoot. Must be good at natural light photography. drone photography capability is a bonus."
        ];


        $eventType = $this->faker->randomElement($eventTypes);

        $keyword = 'event';
        if (stripos($eventType, 'wedding') !== false || stripos($eventType, 'holud') !== false || stripos($eventType, 'bou bhat') !== false) {
            $keyword = 'wedding,photography';
        } elseif (stripos($eventType, 'birthday') !== false) {
            $keyword = 'birthday,party';
        } elseif (stripos($eventType, 'corporate') !== false) {
            $keyword = 'corporate,event';
        } elseif (stripos($eventType, 'product') !== false) {
            $keyword = 'product,photography';
        } elseif (stripos($eventType, 'maternity') !== false || stripos($eventType, 'newborn') !== false) {
            $keyword = 'baby,maternity';
        } elseif (stripos($eventType, 'fashion') !== false) {
            $keyword = 'fashion,runway';
        } elseif (stripos($eventType, 'real estate') !== false) {
            $keyword = 'interior,house';
        } elseif (stripos($eventType, 'concert') !== false) {
            $keyword = 'concert,music';
        }

        $photoUrl = 'https://loremflickr.com/600/400/' . $keyword . '?random=' . $this->faker->numberBetween(1, 10000);

        return [
            'created_by' => User::inRandomOrder()->first()->id,
            'event_name' => $eventType,
            'address' => $this->faker->randomElement($bdLocations),
            'start_date' => $this->faker->dateTimeBetween('now', '+2 months')->format('Y-m-d'),
            'end_date' => $this->faker->dateTimeBetween('+2 months', '+3 months')->format('Y-m-d'),
            'start_time' => $this->faker->time('H:i'),
            'end_time' => $this->faker->time('H:i'),
            'rate' => $this->faker->numberBetween(30, 200) * 100, // 100x multiplied format (3,000 to 20,000)
            'description' => $this->faker->randomElement($descriptions) . " " . $this->faker->sentence(),
            'photo_url' => $photoUrl,
            'hiring_status' => $this->faker->randomElement(['open', 'closed']),
            'application_count' => $this->faker->numberBetween(0, 50),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ];
    }
}
