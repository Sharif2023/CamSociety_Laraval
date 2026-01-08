import React from 'react';

const Footer = () => (
  <footer className="bg-matte-black py-6">
    <div className="container mx-auto text-center">
      <p className="text-gray-400">&copy; 2025 CamSociety. All rights reserved.</p>
      <div className="flex justify-center gap-6 mt-4">
        <a href="#" className="text-white hover:text-primary">Privacy Policy</a>
        <a href="#" className="text-white hover:text-primary">Terms of Service</a>
        <a href="#" className="text-white hover:text-primary">Contact Us</a>
      </div>
    </div>
  </footer>
);

export default Footer;
