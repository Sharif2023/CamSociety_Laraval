import React from 'react';
import { Link } from '@inertiajs/react';

const HeroSection = () => (
  <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-32">
    {/* Cinematic Background */}
    <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <img 
            src="https://images.unsplash.com/photo-1452587925148-ce544e77e70d?q=80&w=1974&auto=format&fit=crop" 
            alt="Photography Hero" 
            className="w-full h-full object-cover scale-105 animate-slow-zoom" 
        />
        <div className="absolute bottom-0 left-0 w-full h-[30%] bg-gradient-to-t from-[#050505] to-transparent z-20"></div>
    </div>

    <div className="container mx-auto px-6 relative z-30 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 animate-in fade-in slide-in-from-top-4 duration-1000">
            <span className="flex h-2 w-2 rounded-full bg-[#FF3300] animate-pulse"></span>
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-gray-300">Elite Photography Network</span>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-black mb-8 leading-[1.1] font-['Playfair_Display'] bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent animate-in fade-in slide-in-from-bottom-8 duration-1000">
            Capture The <br />
            <span className="italic">Unseen Moments</span>
        </h1>
        
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-400 font-medium mb-12 leading-relaxed animate-in fade-in slide-in-from-bottom-12 duration-1000">
            Join the premier society for elite photographers in Bangladesh. 
            Elevate your craft and connect with a world-class community of visionaries.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-in fade-in slide-in-from-bottom-16 duration-1000">
            <Link 
                href="/login" 
                className="group relative px-10 py-5 bg-[#FF3300] text-white font-bold rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_10px_30px_rgba(255,51,0,0.3)]"
            >
                <span className="relative z-10">Start Your Journey</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#FF6600] to-[#FF3300] opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </Link>
            
            <button className="px-10 py-5 bg-white/5 border border-white/10 text-white font-bold rounded-full hover:bg-white/10 backdrop-blur-sm transition-all">
                View Gallery
            </button>
        </div>
    </div>

    {/* Scroll Indicator */}
    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 animate-bounce opacity-40">
        <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent"></div>
    </div>
  </section>
);

export default HeroSection;
