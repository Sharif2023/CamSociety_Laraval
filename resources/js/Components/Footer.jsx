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
                {/* Portfolio */}
                <a href="https://engineer-sharif.infinityfreeapp.com/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#FF3300] transition-all group" title="Portfolio">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400 group-hover:text-white"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                </a>
                {/* GitHub */}
                <a href="https://github.com/sharif2023" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#FF3300] transition-all group" title="GitHub">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400 group-hover:text-white"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                </a>
                {/* LinkedIn */}
                <a href="https://www.linkedin.com/in/sharif-cse/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#FF3300] transition-all group" title="LinkedIn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400 group-hover:text-white"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </a>
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
