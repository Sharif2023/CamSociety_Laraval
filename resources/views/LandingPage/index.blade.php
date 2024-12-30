<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>CamSocity - Your Photography Hub</title>
    <script src="https://kit.fontawesome.com/a076d05399.js" crossorigin="anonymous"></script>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
    <style>
        body {
            font-family: "Inter", sans-serif;
        }
    </style>
</head>

<body class="bg-white text-gray-900">
    <div class="w-full">
        <!-- Navbar -->
        <header class="bg-[#F8E9E7]">
            <div class="container mx-auto flex justify-between items-center py-4">
                <div class="flex items-center gap-3">
                    <img src="https://placehold.co/40x40" alt="CamSocity Logo" class="h-10 w-10" />
                    <span class="text-lg">
                        <p class="font-semibold">CamSocity</p>Your Photography Hub
                    </span>
                </div>
                <nav class="hidden md:flex items-center gap-8">
                    <a href="#" class="text-gray-700 hover:text-gray-900">Home</a>
                    <a href="#" class="text-gray-700 hover:text-gray-900">About</a>
                    <a href="#" class="text-gray-700 hover:text-gray-900">Services</a>
                    <a href="#" class="text-gray-700 hover:text-gray-900">Contact</a>
                </nav>
                <div class="flex items-center gap-4">
                    <a href="#" class="text-gray-600 hover:text-gray-900">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>

                    </a>
                    <a href="/login" class="text-gray-600 hover:text-gray-900">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                        </svg>
                    </a>
                    <a href="#" class="text-gray-600 hover:text-gray-900">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                        </svg>

                    </a>
                </div>
            </div>
        </header>

        <!-- Hero Section -->
        <section class="relative">
            <img src="./assets/landing_page/hero_bg.png" alt="Hero Image" class="w-full h-[500px] object-cover" />
            <div class="absolute inset-0 bg-black bg-opacity-50 flex items-center">
                <div class="container mx-auto px-6 text-white">
                    <h1 class="text-4xl md:text-5xl font-bold">
                        Capture Stunning Moments
                    </h1>
                    <p class="mt-4 text-lg max-w-2xl">
                        Join CamSocity, the premier platform for photographers and
                        enthusiasts in Bangladesh. Unleash your creativity, connect with
                        like-minded individuals, and embark on a fulfilling photography
                        journey.
                    </p>
                    <button class="mt-6 px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-100" onclick="window.location.href='/login'">
                        Discover More
                    </button>
                </div>
            </div>
        </section>

        <!-- Payment Partners -->
        <section class="bg-gray-50 py-12">
            <div class="container mx-auto text-center">
                <h2 class="text-2xl font-semibold">
                    Elevate Your Photography Journey
                </h2>
                <div class="flex justify-center mt-6 gap-8 flex-wrap">
                    <img src="./assets/landing_page/partner/Logo (1).png" alt="Visa" class="h-12" />
                    <img src="./assets/landing_page/partner/Logo (2).png" alt="Google Pay" class="h-12" />
                    <img src="./assets/landing_page/partner/Logo (3).png" alt="Apple Pay" class="h-12" />
                    <img src="./assets/landing_page/partner/Logo (4).png" alt="PayPal" class="h-12" />
                    <img src="./assets/landing_page/partner/Logo (5).png" alt="Stripe" class="h-12" />
                    <img src="./assets/landing_page/partner/Logo.png" alt="BitPay" class="h-12" />
                </div>
            </div>
        </section>

        <!-- Photography Revolution -->
        <section class="py-12">
            <div class="container mx-auto grid md:grid-cols-2 gap-1 px-6">
                <div>
                    <img src="./assets/landing_page/m_image (1).png" alt="Join Image" class="w-3/4 h-auto rounded-lg shadow-lg" />
                </div>
                <div class="flex flex-col justify-center">
                    <h3 class="text-3xl font-bold">
                        Join the Photography Revolution Today
                    </h3>
                    <p class="mt-4 text-gray-600">
                        At CamSocity, we empower photographers to showcase their skills,
                        connect with like-minded allies, and grow their careers. Whether
                        you're a seasoned pro or just starting out, this is your place to
                        shine.
                    </p>
                    <div class="flex items-center gap-6 mt-6">
                        <button class="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700">
                            Discover Your Potential
                        </button>
                        <button
                            class="px-6 py-3 bg-gray-100 text-gray-800 font-semibold rounded-lg border border-gray-300 hover:bg-gray-200">
                            Start Your Journey Now
                        </button>
                    </div>
                    <div class="mt-8 flex gap-8">
                        <div>
                            <p class="text-2xl font-bold">2.5k+</p>
                            <p class="text-gray-600">Passionate photographers</p>
                        </div>
                        <div class="px-6">
                            <p class="text-2xl font-bold flex gap-2">
                                5.0 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                                </svg>

                            </p>
                            <p class="text-gray-600 ">Rated 4.8/5 by our community</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Features -->
        <section class="bg-gray-50 py-12">
            <div class="container mx-auto text-center px-6">
                <div class="grid md:grid-cols-2 gap-12 mt-8">
                    <!-- Left Column -->
                    <div>
                        <h2 class="text-6xl my-10 text-left">Explore Our Unique Features</h2>
                        <div class="flex gap-2 items-center">
                            <img src="/assets/landing_page/m_image03.png" alt="Feature Image 1" class="w-auto h-1/3 rounded-lg" />
                            <img src="/assets/landing_page/m_image02.png" alt="Feature Image 2" class="w-auto h-1/3 rounded-lg" />
                        </div>
                        <p class="mt-4 text-gray-600 max-w-2xl text-left w-2/3">
                            CamSocity offers a comprehensive platform designed for photographers
                            of all levels. From a vibrant marketplace to community engagement,
                            our features empower you to connect, create, and thrive in your
                            photography journey.
                        </p>
                    </div>

                    <!-- Right Column (Image) -->
                    <div class="flex justify-end">
                        <img src="./assets/landing_page/m_image01.png" alt="Feature Image 3" class="w-2/3 h-auto rounded-lg" />
                    </div>
                </div>
            </div>

        </section>

        <section>
            <div class="container mx-auto px-6 py-12 text-center">
                <div class="container mx-auto px-6 py-12 text-center">
                    <!-- Heading -->
                    <h2 class="text-2xl font-bold mb-6">What Our Community Says About Us</h2>

                    <!-- Headshot Slider -->
                    <div class="flex justify-center items-center space-x-4 relative overflow-hidden">
                        <div id="carousel" class="flex items-center space-x-4">
                            <!-- Dynamic content will be inserted here -->
                        </div>
                    </div>

                    <!-- Testimonial Section -->
                    <div class="mt-8">
                        <h3 id="testimonialName" class="text-lg font-semibold">Rashid Khan, Professional Photographer
                        </h3>
                        <p id="testimonialText" class="text-gray-600 mt-2">Capturing Moments Beautifully</p>
                    </div>
                </div>

        </section>

        <!-- Community -->
        <section class="bg-cover bg-center h-screen flex justify-center items-center"
            style="background-image: url('./assets/landing_page/Features.svg');">
            <div class="container mx-auto text-center px-6 flex flex-col justify-center items-center gap-4">

                <img src="/assets/landing_page/I.svg" alt="Illustration" class="w-auto  " />
                <h3 class="text-3xl ">Empower Your Photography</h3>
                <p class="mt-2 text-gray-700 max-w-xl mx-auto ">
                    Join a thriving community of creators who are passionate about
                    photography. From sharing tips and tricks to exhibiting your work,
                    CamSocity is the ideal platform to connect and grow.
                </p>
            </div>
        </section>

        <!-- FAQ -->
        <section class="py-12">
            <div class="container mx-auto px-6">
                <h2 class="text-3xl font-bold text-center">
                    Frequently Asked Questions
                </h2>
                <div class="mt-8 space-y-4">
                    <details class="border rounded-lg p-4">
                        <summary class="font-semibold cursor-pointer">
                            What is CamSocity?
                        </summary>
                        <p class="mt-2 text-gray-600">
                            CamSocity provides a platform for photographers to showcase
                            their work, connect with others, and grow their careers.
                        </p>
                    </details>
                    <details class="border rounded-lg p-4">
                        <summary class="font-semibold cursor-pointer">
                            How do I join the community?
                        </summary>
                        <p class="mt-2 text-gray-600">
                            Click the 'Join Now' button on our homepage and fill out the
                            registration form to get started.
                        </p>
                    </details>
                    <details class="border rounded-lg p-4">
                        <summary class="font-semibold cursor-pointer">
                            Can I sell my photos?
                        </summary>
                        <p class="mt-2 text-gray-600">
                            Yes, our marketplace allows photographers to sell their work and
                            earn commissions.
                        </p>
                    </details>
                    <details class="border rounded-lg p-4">
                        <summary class="font-semibold cursor-pointer">
                            Are there any workshops?
                        </summary>
                        <p class="mt-2 text-gray-600">
                            We regularly host workshops and networking events for
                            photographers of all skill levels.
                        </p>
                    </details>
                </div>
            </div>
        </section>

        <!-- Footer -->
        <footer class="bg-black text-white py-12">
            <div class="container mx-auto px-6 text-center md:text-left">
                <div class="grid md:grid-cols-2 gap-8">
                    <div>
                        <h3 class="text-6xl font-bold">Contact Us Today</h3>
                        <p class="mt-4">
                            CamSocity Headquarters, Dhaka, Bangladesh, 125 Photography Lane,
                            Connecting Creatives.
                        </p>
                        <p class="mt-2">Phone: +882132456789</p>
                        <p class="mt-2">Email: support@camsocity.com</p>
                    </div>

                </div>
                <div class="grid md:grid-cols-2 gap-8">
                    <div>

                    </div>
                    <div class="flex gap-4 justify-center md:justify-end">
                        <button class="px-6 py-6 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700">
                            Discover More
                        </button>
                        <button class="px-6 py-6 bg-gray-800 text-white font-semibold rounded-lg hover:bg-gray-900" onclick="window.location.href='/signup'">
                            Start Your Journey
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</body>


<script>
    document.addEventListener("DOMContentLoaded", () => {
        const testimonials = [
            {
                name: "Rashid Khan",
                title: "Professional Photographer",
                text: "Capturing Moments Beautifully",
                image: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
            },
            {
                name: "Sarah Ali",
                title: "Event Photographer",
                text: "Moments that Matter",
                image: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
            },
            {
                name: "Arif Hossain",
                title: "Freelance Photographer",
                text: "Stories Through Lenses",
                image: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
            },
            {
                name: "Nadia Rahman",
                title: "Portrait Artist",
                text: "Art Through Photography",
                image: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
            },
            {
                name: "John Doe",
                title: "Wedding Photographer",
                text: "Memories that Last a Lifetime",
                image: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
            },
        ];

        const carousel = document.getElementById("carousel");
        const testimonialName = document.getElementById("testimonialName");
        const testimonialText = document.getElementById("testimonialText");
        let currentIndex = 0;

        // Function to render 3 images
        function renderCarousel() {
            carousel.innerHTML = ""; // Clear current images
            for (let i = 0; i < 3; i++) {
                const index = (currentIndex + i) % testimonials.length; // Ensure circular looping
                const testimonial = testimonials[index];

                // Create image element
                const img = document.createElement("img");
                img.src = testimonial.image;
                img.alt = testimonial.name;
                img.className =
                    i === 1
                        ? "w-24 h-24 rounded-full border-4 border-yellow-500 transition-all duration-300" // Middle image
                        : "w-16 h-16 rounded-full border-2 border-gray-300 transition-all duration-300"; // Side images

                // Add click listener to update testimonial
                img.addEventListener("click", () => {
                    testimonialName.textContent = `${testimonial.name}, ${testimonial.title}`;
                    testimonialText.textContent = testimonial.text;
                });

                carousel.appendChild(img);
            }

            // Update the testimonial for the middle image
            const middleTestimonial = testimonials[(currentIndex + 1) % testimonials.length];
            testimonialName.textContent = `${middleTestimonial.name}, ${middleTestimonial.title}`;
            testimonialText.textContent = middleTestimonial.text;
        }

        // Initialize carousel
        renderCarousel();

        // Auto-slide every 3 seconds
        setInterval(() => {
            currentIndex = (currentIndex + 1) % testimonials.length; // Move to the next set of images
            renderCarousel();
        }, 3000);
    });


</script>

</html>