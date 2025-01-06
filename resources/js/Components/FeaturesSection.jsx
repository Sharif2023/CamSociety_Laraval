import React from 'react';

const FeaturesSection = () => (
  <>
   {/* Photography Revolution  */}
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
                        At CamSociety, we empower photographers to showcase their skills,
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

        {/* <!-- Features --> */}
        <section class="bg-gray-50 py-12">
            <div class="container mx-auto text-center px-6">
                <div class="grid md:grid-cols-2 gap-12 mt-8">
                    {/* <!-- Left Column --> */}
                    <div>
                        <h2 class="text-6xl my-10 text-left">Explore Our Unique Features</h2>
                        <div class="flex gap-2 items-center">
                            <img src="/assets/landing_page/m_image03.png" alt="Feature Image 1" class="w-auto h-1/3 rounded-lg" />
                            <img src="/assets/landing_page/m_image02.png" alt="Feature Image 2" class="w-auto h-1/3 rounded-lg" />
                        </div>
                        <p class="mt-4 text-gray-600 max-w-2xl text-left w-2/3">
                            CamSociety offers a comprehensive platform designed for photographers
                            of all levels. From a vibrant marketplace to community engagement,
                            our features empower you to connect, create, and thrive in your
                            photography journey.
                        </p>
                    </div>

                    {/* <!-- Right Column (Image) --> */}
                    <div class="flex justify-end">
                        <img src="./assets/landing_page/m_image01.png" alt="Feature Image 3" class="w-2/3 h-auto rounded-lg" />
                    </div>
                </div>
            </div>

        </section>
  </>
);

export default FeaturesSection;
