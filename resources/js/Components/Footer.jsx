import React from 'react';

const Footer = () => (
  <footer className="bg-[#F8E9E7] py-6">
    <div className="container mx-auto text-center">
      <p className="text-gray-600">&copy; 2025 CamSociety. All rights reserved.</p>
      <div className="flex justify-center gap-6 mt-4">
        <a href="#" className="text-gray-600 hover:text-gray-900">Privacy Policy</a>
        <a href="#" className="text-gray-600 hover:text-gray-900">Terms of Service</a>
        <a href="#" className="text-gray-600 hover:text-gray-900">Contact Us</a>
      </div>
    </div>
  </footer>
);

export default Footer;
