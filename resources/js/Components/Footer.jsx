import React from 'react';
import { Link } from '@inertiajs/react';

const Footer = () => (
  <footer className="bg-black border-t border-white/5 py-24">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-16">
        <div className="col-span-1 md:col-span-1 space-y-6">
            <Link href="/" className="flex items-center gap-3">
                <img src="/images/camSociety_logo.jpg" alt="Logo" className="h-10 w-10 rounded-full border border-white/20" />
                <span className="text-xl font-bold tracking-tight font-['Playfair_Display']">CamSociety</span>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed font-medium">
                The premier digital ecosystem for elite photography and global visual storytelling. 
                Est. 2025.
            </p>
        </div>
        
        <div className="space-y-6">
            <h4 className="text-white font-bold uppercase tracking-[0.2em] text-[10px]">The Society</h4>
            <ul className="space-y-4">
                {['Our Vision', 'The Elite List', 'Private Gallery', 'Career Pathways'].map(item => (
                    <li key={item}><a href="#" className="text-gray-500 hover:text-[#FF3300] text-sm transition-colors font-medium">{item}</a></li>
                ))}
            </ul>
        </div>

        <div className="space-y-6">
            <h4 className="text-white font-bold uppercase tracking-[0.2em] text-[10px]">Resources</h4>
            <ul className="space-y-4">
                {['Member Support', 'Technical Mastery', 'Legal & Rights', 'Partner Program'].map(item => (
                    <li key={item}><a href="#" className="text-gray-500 hover:text-[#FF3300] text-sm transition-colors font-medium">{item}</a></li>
                ))}
            </ul>
        </div>

        <div className="space-y-6 text-right md:text-left">
            <h4 className="text-white font-bold uppercase tracking-[0.2em] text-[10px]">Connect</h4>
            <div className="flex gap-4 mb-6">
                {[1,2,3].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#FF3300] transition-colors cursor-pointer">
                        <div className="w-4 h-4 bg-white/40 rounded-sm"></div>
                    </div>
                ))}
            </div>
            <p className="text-xs text-gray-500 font-bold uppercase tracking-widest">Dhaka, Bangladesh</p>
            <a 
                href="https://engineer-sharif.infinityfreeapp.com/#contact" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block text-[10px] text-gray-600 hover:text-[#FF3300] font-black uppercase tracking-[0.2em] transition-colors"
            >
                Connect with Architect
            </a>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 gap-6">
        <p className="text-gray-600 text-[10px] font-bold uppercase tracking-[0.3em]">
            &copy; 2025 CamSociety Elite. All Rights Reserved.
        </p>
        <div className="flex gap-8">
          <a href="#" className="text-gray-600 hover:text-white text-[10px] font-bold uppercase tracking-widest transition-colors">Privacy</a>
          <a href="#" className="text-gray-600 hover:text-white text-[10px] font-bold uppercase tracking-widest transition-colors">Terms</a>
          <a href="#" className="text-gray-600 hover:text-white text-[10px] font-bold uppercase tracking-widest transition-colors">Compliance</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
