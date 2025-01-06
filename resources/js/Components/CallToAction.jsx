import React from 'react';

const CallToAction = () => (
  <section className="bg-[#F8E9E7] py-12">
    <div className="container mx-auto text-center">
      <h2 className="text-2xl font-bold mb-6">Join Us Today</h2>
      <p className="text-lg max-w-xl mx-auto mb-6">
        Be part of a creative community. Start capturing stunning photos and share your unique perspective with the world. Join us now!
      </p>
      <button
        className="px-6 py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-800"
        onClick={() => window.location.href = '/register'}
      >
        Sign Up Now
      </button>
    </div>
  </section>
);

export default CallToAction;
