import React from 'react';

const Footer = () => (
  <footer className="bg-[#1F1F1F] py-6">
    <div className="container mx-auto text-center">
      <p className="text-white">&copy; 2025 CamSociety. All rights reserved.</p>
      <div className="flex justify-center gap-6 mt-4">
        <a href="#" className="text-white hover:text-[#FF3300]">Privacy Policy</a>
        <a href="#" className="text-white hover:text-[#FF3300]">Terms of Service</a>
        <a href="#" className="text-white hover:text-[#FF3300]">Contact Us</a>
      </div>
    </div>
  </footer>
);

export default Footer;
