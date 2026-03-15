import React from 'react';

const FeaturesSection = () => (
    <div className="space-y-32 py-32">
        {/* Elite Revolution Section */}
        <section className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16 items-center">
                <div className="relative group">
                    <div className="absolute -inset-4 bg-gradient-to-r from-[#FF3300] to-indigo-600 rounded-[2rem] blur-2xl opacity-10 group-hover:opacity-20 transition duration-1000"></div>
                    <div className="relative rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl transform transition duration-700 group-hover:scale-[1.02]">
                        <img 
                            src="https://images.unsplash.com/photo-1493863641943-9b68992a8d07?q=80&w=2058&auto=format&fit=crop" 
                            alt="Elite Photographer" 
                            className="w-full h-[600px] object-cover" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                        <div className="absolute bottom-10 left-10">
                            <p className="text-4xl font-black font-['Playfair_Display']">Uncompromising <br />Quality</p>
                        </div>
                    </div>
                </div>
                
                <div className="flex flex-col justify-center space-y-8">
                    <div className="inline-flex w-fit px-4 py-1.5 rounded-full bg-[#FF3300]/10 border border-[#FF3300]/20 text-[#FF3300] text-xs font-bold tracking-widest uppercase">
                        The Movement
                    </div>
                    <h3 className="text-5xl md:text-7xl font-black font-['Playfair_Display'] leading-tight">
                        The Photography <br /><span className="italic text-gray-500">Revolution.</span>
                    </h3>
                    <p className="text-xl text-gray-400 leading-relaxed font-medium">
                        CamSociety is more than a platform—it's an exclusive circle for those who see what others miss. 
                        We provide the machinery, the network, and the stage for your absolute best work.
                    </p>
                    
                    <div className="grid grid-cols-2 gap-12 py-8 border-y border-white/5">
                        <div>
                            <p className="text-5xl font-black text-white mb-2">2.5k+</p>
                            <p className="text-sm uppercase tracking-widest font-bold text-gray-500">Elite Members</p>
                        </div>
                        <div>
                            <div className="flex items-end gap-2 mb-2">
                                <p className="text-5xl font-black text-white leading-none">4.9</p>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-[#FF3300]">
                                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <p className="text-sm uppercase tracking-widest font-bold text-gray-500">Industry Rating</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Unique Technical Edge */}
        <section className="bg-white/[0.02] border-y border-white/5 py-32">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-24 items-center">
                    <div className="space-y-8">
                        <h2 className="text-6xl md:text-8xl font-black font-['Playfair_Display'] leading-none">
                            Technical <br /><span className="italic text-[#FF3300]">Mastery.</span>
                        </h2>
                        <div className="flex gap-4 p-2 bg-black/40 rounded-[2.5rem] border border-white/10 backdrop-blur-3xl">
                            <img src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=2070&auto=format&fit=crop" alt="Feature 1" className="w-1/2 h-64 object-cover rounded-[2rem]" />
                            <img src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1938&auto=format&fit=crop" alt="Feature 2" className="w-1/2 h-64 object-cover rounded-[2rem]" />
                        </div>
                        <p className="text-xl text-gray-400 font-medium leading-relaxed max-w-xl">
                            Our proprietary infrastructure handles high-resolution masterpieces with lightning speed, 
                            ensuring your portfolio is delivered with the absolute clarity it deserves.
                        </p>
                    </div>

                    <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-[#FF3300] to-indigo-600 rounded-[3rem] blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                        <img 
                            src="https://images.unsplash.com/photo-1502982722883-04fe48585489?q=80&w=2070&auto=format&fit=crop" 
                            alt="Modern Gear" 
                            className="relative w-full h-auto rounded-[3rem] object-cover shadow-2xl border border-white/10 transition duration-700 group-hover:rotate-1" 
                        />
                    </div>
                </div>
            </div>
        </section>
    </div>
);

export default FeaturesSection;
