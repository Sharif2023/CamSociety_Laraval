import React from 'react';

const CallToAction = () => (
  <section className="bg-matte-black py-12">
    <div className="container mx-auto text-center">
      <h2 className="text-2xl font-bold text-white mb-6">Join Us Today</h2>
      <p className="text-lg max-w-xl mx-auto mb-6 text-gray-300">
        Be part of a creative community. Start capturing stunning photos and share your unique perspective with the world. Join us now!
      </p>
      <button
        className="px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-dark border-2 border-primary"
        onClick={() => window.location.href = '/register'}
      >
        Sign Up Now
      </button>
    </div>
  </section>
);

export default CallToAction;
