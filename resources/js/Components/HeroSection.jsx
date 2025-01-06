import React from 'react';

const HeroSection = () => (
  <section className="relative">
    <img src="./assets/landing_page/hero_bg.png" alt="Hero Image" className="w-full h-[500px] object-cover" />
    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center">
      <div className="container mx-auto px-6 text-white">
        <h1 className="text-4xl md:text-5xl font-bold">Capture Stunning Moments</h1>
        <p className="mt-4 text-lg max-w-2xl">
          Join CamSociety, the premier platform for photographers and enthusiasts in Bangladesh. Unleash your creativity, connect with like-minded individuals, and embark on a fulfilling photography journey.
        </p>
        <button className="mt-6 px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-100" onClick={() => window.location.href = '/login'}>
          Discover More
        </button>
      </div>
    </div>
  </section>
);

export default HeroSection;
