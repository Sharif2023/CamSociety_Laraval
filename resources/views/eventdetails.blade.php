<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Event Details - CamSociety</title>
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
    <script src="https://cdn.tailwindcss.com"></script>
</head>

<body class="bg-f9f9f9 text-gray-800">
    <!-- Header -->
    <header class="bg-[#1F1F1F] flex justify-between items-center p-5">
        <div class="text-2xl text-white font-bold flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="size-6 w-8 h-8">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" />
            </svg>
            CAMSOCIETY
        </div>
        <nav class="space-x-5 text-white font-bold hidden md:flex">
            <a href="#" class=" hover:text-[#FF3300]">Home</a>
            <a href="marketplaceAll.html" class=" hover:text-[#FF3300]">Marketplace</a>
            <a href="buy_photo.html" class=" hover:text-[#FF3300]">Buy Photo</a>
            <a href="hirePhotographer.html" class=" hover:text-[#FF3300]">Hire Photographer</a>
            <a href="upload_event.html" class=" text-[#FF3300]">Event Listing</a>
            <a href="blogandtips.html" class=" hover:text-[#FF3300]">Blog & Tips</a>
        </nav>
        <div class="flex text-white space-x-5 px-5">
            <a href="cart.html" class=" hover:text-[#FF3300]"><span><svg xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
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
    <header class="bg-gray-600 text-white py-6 text-center">
        <h1 class="text-4xl font-bold">Event Details</h1>
    </header>

    <!-- Main Content -->
    <main class="max-w-4xl mx-auto p-6 mt-6">
        <!-- Event Details Card -->
        <section class="bg-[#FAF0E6] text-black rounded-lg shadow-2xl overflow-hidden flex flex-col md:flex-row">
            <!-- Image -->
            <img src="photos/marriageevent.png" alt="Wedding Ceremony" class="w-full md:w-1/2 h-64 object-cover">
            <!-- Details -->
            <div class="p-6">
                <h2 class="text-2xl font-bold mb-4">Wedding Ceremony</h2>
                <p class="mb-2"><strong>Location:</strong> 58/20, Mohammadpur, Dhaka</p>
                <p class="mb-2"><strong>Date:</strong> From January 15, 2025 To January21,2025</p>
                <p class="mb-2"><strong>Time:</strong> From 9.00 AM to To 5.00 PM</p>
                <p class="mb-2"><strong>Rate:</strong> BDT 8000/hr</p>
                <p class="mb-4"><strong>Description:</strong> Capture precious moments at this elegant wedding ceremony
                    in Dhaka. A perfect opportunity for professional photographers.</p>
                <!-- Buttons -->
                <div class="flex gap-4">
                    <button onclick="window.location.href='#'"
                        class="bg-[#1F1F1F] text-white px-4 py-2 rounded-lg hover:bg-gray-600">
                        Edit
                    </button>
                    <button class="bg-[#FF3300] text-white px-4 py-2 rounded-lg hover:bg-orange-500">
                        Delete
                    </button>
                </div>
            </div>
        </section>
    </main>

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
                <li><a href="hirePhotographer.html" class="hover:text-[#FF3300]">Hire Photographer</a></li>
                <li><a href="eventbooking.html" class="hover:text-[#FF3300]">Book Events</a></li>
                <li><a href="saleProducts.html" class="hover:text-[#FF3300]">Sell Items</a></li>
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