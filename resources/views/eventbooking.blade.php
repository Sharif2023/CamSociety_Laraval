@php
    use Illuminate\Support\Facades\Route;
@endphp


<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Event Booking - CamSociety</title>
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
    <script src="https://cdn.tailwindcss.com"></script>
</head>

<body class="bg-f9f9f9 text-gray-800">
    <!-- Header -->
    <header class="bg-[#1F1F1F] flex justify-between items-center p-5">
        <div class="text-2xl text-white font-bold flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                class="size-6 w-8 h-8">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" />
            </svg>
            CAMSOCIETY
        </div>
        <nav class="space-x-5 text-white font-bold hidden md:flex">
            <a href="#" class=" hover:text-[#FF3300]">Home</a>
            <a href="photographer_marketplaceAll.html" class=" hover:text-[#FF3300]">Marketplace</a>
            <a href="photographer_photosale.html" class=" hover:text-[#FF3300]">Photo Sale</a>
            <a href="photographer_eventbooking.html" class="text-[#FF3300]">Book Event</a>
            <a href="photographer_blogandtips.html" class=" hover:text-[#FF3300]">Share Blog & Tips</a>
        </nav>
        <div class="flex text-white space-x-5 px-5">
            <a href="photographer_cart.html" class=" hover:text-[#FF3300]"><span><svg xmlns="http://www.w3.org/2000/svg"
                        fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                    </svg> </span></a>

            <a href="#" class=" hover:text-[#FF3300]"><span><svg xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z" />
                    </svg>
                </span></a>
            <a href="UserProfile.html" class=" hover:text-[#FF3300]"><svg xmlns="http://www.w3.org/2000/svg" fill="none"
                    viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
            </a>
        </div>
    </header>

    <main class="mt-0">
        <form class="flex items-center max-w-lg mx-auto py-5 ">
            <label for="voice-search" class="sr-only">Search</label>
            <div class="relative w-full">
                <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="size-5">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                    </svg>
                </div>
                <input type="text" id="voice-search"
                    class="bg-[#e5e7eb] border border-[#FF3300] text-black text-sm rounded-lg focus:ring-[#FF3300] focus:border-[#FF3300] block w-full ps-10 p-2.5"
                    placeholder="Search with Location, Rate, ..." required />
                <button type="button" class="absolute inset-y-0 end-0 flex items-center pe-3">
                    <svg class="w-4 h-4 text-[#FF3300] dark:text-[#FF3300] hover:text-white dark:hover:text-white"
                        aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M15 7v3a5.006 5.006 0 0 1-5 5H6a5.006 5.006 0 0 1-5-5V7m7 9v3m-3 0h6M7 1h2a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V4a3 3 0 0 1 3-3Z" />
                    </svg>
                </button>
            </div>
            <button type="submit"
                class="inline-flex items-center py-2.5 px-3 ms-2 text-sm font-medium text-white bg-[#FF3300] rounded-lg border border-[#FF3300] hover:bg-[#1F1F1F] focus:ring-4 focus:outline-none focus:ring-[#FF3300] dark:bg-[#FF3300] dark:hover:bg-[#1F1F1F] dark:focus:ring-[#FF3300]">
                <svg class="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>Search
            </button>

        </form>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-10 mt-6">
            @foreach ($events as $event)
            <div class="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
                <img src="{{ asset($event->photo_url ?? 'CAMSOCIETY_TAILWIND/photos/default-image.jpg') }}" alt="{{ $event->event_name }}" class="w-full h-48 object-cover">
                <div class="p-4 text-center">
                    <h3 class="text-lg font-semibold">{{ $event->event_name }}</h3>
                    <p class="text-gray-600">Location: {{ $event->location }}</p>
                    <p class="text-gray-600">Rate: BDT {{ number_format($event->rate, 2) }}/hr</p>
                    <p class="text-gray-600">Date: {{ date('d M, Y', strtotime($event->start_date)) }}</p>
                    <button onclick="window.location.href='{{ route('event.details', ['id' => $event->id]) }}'"
                        class="mt-4 bg-[#1F1F1F] text-white px-4 py-2 rounded-lg hover:bg-[#FF3300]">
                        View Details
                    </button>


                </div>
            </div>
            @endforeach

            <!-- Event Card -->
            <div class="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
                <img src="{{ asset('CAMSOCIETY_TAILWIND/photos/marriageevent.png') }}" alt="Marriage Event" class="w-full h-48 object-cover">
                <div class="p-4 text-center">
                    <h3 class="text-lg font-semibold">Wedding Ceremony</h3>
                    <p class="text-gray-600">Location: 58/20, Mohammadpur, Dhaka</p>
                    <p class="text-gray-600">Rate: BDT 8000/hr</p>
                    <p class="text-gray-600">Date: 27January,2025</p>
                    <button onclick="window.location.href='photographer_eventdetails.html?id=1'"
                        class="mt-4 bg-[#1F1F1F] text-white px-4 py-2 rounded-lg hover:bg-[#FF3300]">
                        View Details
                    </button>
                </div>
            </div>

            <div class="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
                <img src="{{ asset('CAMSOCIETY_TAILWIND/photos/birthdayevent.png') }}" alt="Birthday Event" class="w-full h-48 object-cover">
                <div class="p-4 text-center">
                    <h3 class="text-lg font-semibold">Birthday Party</h3>
                    <p class="text-gray-600">Location: 20/17, Kamalapur, Dhaka</p>
                    <p class="text-gray-600">Rate: BDT 2000/hr</p>
                    <p class="text-gray-600">Date: 25January,2025</p>
                    <button onclick="window.location.href='photographer_eventdetails.html?id=2'"
                        class="mt-4 bg-[#1F1F1F] text-white px-4 py-2 rounded-lg hover:bg-[#FF3300]">
                        View Details
                    </button>
                </div>
            </div>

            <div class="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
                <img src="{{ asset('CAMSOCIETY_TAILWIND/photos/uiucsefest.png') }}" alt="CSE Fest Event" class="w-full h-48 object-cover">
                <div class="p-4 text-center">
                    <h3 class="text-lg font-semibold">UIU CSE Fest 2025</h3>
                    <p class="text-gray-600">Location: United International University</p>
                    <p class="text-gray-600">Rate: BDT 6000/hr</p>
                    <p class="text-gray-600">Date: 14January,2025</p>
                    <button onclick="window.location.href='photographer_eventdetails.html?id=3'"
                        class="mt-4 bg-[#1F1F1F] text-white px-4 py-2 rounded-lg hover:bg-[#FF3300]">
                        View Details
                    </button>
                </div>
            </div>
        </div>

</body><br>
<!-- Footer -->
<footer class="bg-[#1F1F1F] text-white py-6">
    <div class="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 pl-5">
        <!-- About -->
        <div>
            <h3 class="font-bold text-lg mb-2">About</h3>
            <p>CamSociety is your one-stop platform for photographers and camera enthusiasts. Buy, sell, hire
                photographers, and rent equipment all in one place.</p>
        </div>
        <!-- Quick Links -->
        <div>
            <h3 class="font-bold text-lg mb-2">Quick Links</h3>
            <ul>
                <li><a href="photographer_photosale.html" class="hover:text-[#FF3300]">Sell Photos</a></li>
                <li><a href="photographer_eventbooking.html" class="hover:text-[#FF3300]">Book Events</a></li>
                <li><a href="photographer_saleProducts.html" class="hover:text-[#FF3300]">Sell Items</a></li>
            </ul>
        </div>
        <!-- Contact -->
        <div>
            <h3 class="font-bold text-lg mb-2">Contact</h3>
            <p>Email: support@camsociety.com</p>
            <p>Phone: 123-456-7890</p>
            <p>Address: 123 Photo Street, Photography City</p>
        </div>
        <!-- FAQ -->
        <div>
            <h3 class="font-bold text-lg mb-2">FAQ</h3>
            <ul>
                <li><a href="#" class="hover:text-[#FF3300]">How to sell photos?</a></li>
                <li><a href="#" class="hover:text-[#FF3300]">How to rent equipment?</a></li>
                <li><a href="#" class="hover:text-[#FF3300]">Payment options</a></li>
            </ul>
        </div>
    </div>
    <div class="text-center text-gray-400 mt-6">
        &copy; 2025 CamSociety. All rights reserved.
    </div>
</footer>

</html>