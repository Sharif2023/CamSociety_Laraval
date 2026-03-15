import { Head } from "@inertiajs/react";
import GuestLayout from "@/Layouts/GuestLayout";

export default function About() {
    return (
        <GuestLayout>
            <Head title="Our Heritage | CamSociety" />

            <div className="relative pt-32">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-30 pointer-events-none overflow-hidden">
                    <div className="absolute top-[10%] left-[-10%] w-[500px] h-[500px] bg-[#FF3300] rounded-full blur-[150px]"></div>
                    <div className="absolute bottom-[10%] right-[-5%] w-[400px] h-[400px] bg-indigo-600 rounded-full blur-[150px]"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32 py-20">
                    {/* Hero Text */}
                    <div className="text-center space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">
                        <span className="text-[10px] uppercase tracking-[0.5em] font-black text-[#FF3300]">Est. 2024</span>
                        <h1 className="text-7xl md:text-9xl font-black font-['Playfair_Display'] leading-none">
                            The <span className="italic">Elite</span> <br />
                            <span className="text-[#FF3300]">Syndicate.</span>
                        </h1>
                        <p className="max-w-2xl mx-auto text-xl text-gray-400 font-medium leading-relaxed">
                            CamSociety is more than a platform. It's a sanctuary for visual visionaries and the patrons who value their craft.
                        </p>
                    </div>

                    {/* Image Reveal */}
                    <div className="relative rounded-[4rem] overflow-hidden aspect-[21/9] border border-white/10 group">
                        <img 
                            src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&q=80&w=2000" 
                            alt="Elite Studio" 
                            className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-1000"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                        <div className="absolute bottom-12 left-12">
                            <h3 className="text-3xl font-black font-['Playfair_Display']">Standard of Excellence</h3>
                        </div>
                    </div>

                    {/* Narrative Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div className="space-y-10">
                            <h2 className="text-5xl font-black font-['Playfair_Display']">A Legacy in <span className="text-[#FF3300] italic">Motion</span></h2>
                            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
                                <p>
                                    Born from a desire to elevate the photographic arts in Bangladesh, CamSociety has grown into the premier network for elite talent. We curate every member, ensuring that our marketplace represents the pinnacle of artistic integrity.
                                </p>
                                <p>
                                    Our mission is simple: To provide the world's most discerning collectors with direct access to unmatched visual excellence.
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-6">
                            {[
                                { label: 'Active Visionaries', value: '500+' },
                                { label: 'Visual Assets', value: '10K+' },
                                { label: 'Elite Commissions', value: '2.5K' },
                                { label: 'Global Prestige', value: 'Top 1%' }
                            ].map((stat) => (
                                <div key={stat.label} className="p-8 rounded-[2.5rem] bg-white/[0.02] border border-white/5 backdrop-blur-3xl">
                                    <div className="text-4xl font-black font-['Playfair_Display'] text-white mb-2">{stat.value}</div>
                                    <div className="text-[10px] uppercase tracking-widest font-black text-gray-500">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </GuestLayout>
    );
}
