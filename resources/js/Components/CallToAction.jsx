import React from 'react';
import { Link } from '@inertiajs/react';

const CallToAction = () => (
    <section className="relative py-32 overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute inset-0 z-0">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FF3300] rounded-full blur-[180px] opacity-10"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-5xl mx-auto rounded-[3rem] p-12 md:p-24 bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 backdrop-blur-2xl text-center shadow-2xl">
                <h2 className="text-4xl md:text-6xl font-black mb-8 font-['Playfair_Display'] bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent">
                    Join the Elite <br /><span className="italic">Photography Society</span>
                </h2>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12 font-medium leading-relaxed">
                    Be part of a curated community. Access exclusive assignments, 
                    sell your masterpieces, and show your unique perspective to the world's most discerning clients.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                    <Link
                        href={route('register')}
                        className="px-12 py-5 bg-white text-black font-black rounded-full hover:bg-gray-200 shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-all transform hover:-translate-y-1 active:scale-95"
                    >
                        Apply for Membership
                    </Link>
                    <button className="px-12 py-5 bg-transparent border-2 border-white/10 text-white font-bold rounded-full hover:bg-white/5 transition-all">
                        Learn More
                    </button>
                </div>
            </div>
        </div>
    </section>
);

export default CallToAction;
