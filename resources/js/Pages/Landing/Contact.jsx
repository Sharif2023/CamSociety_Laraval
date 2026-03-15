import { Head } from "@inertiajs/react";
import GuestLayout from "@/Layouts/GuestLayout";

export default function Contact() {
    return (
        <GuestLayout>
            <Head title="Secure Inquiry | CamSociety" />

            <div className="relative pt-32 min-h-screen flex items-center">
                <div className="absolute inset-0 opacity-20 pointer-events-none">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-600/10 rounded-full blur-[150px]"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                        <div className="space-y-12">
                            <div className="space-y-6">
                                <h1 className="text-7xl font-black font-['Playfair_Display'] leading-[1.1]">
                                    Direct <br />
                                    <span className="text-[#FF3300] italic">Inquiry.</span>
                                </h1>
                                <p className="text-xl text-gray-400 font-medium max-w-md">Our concierge team is standing by to facilitate your visual requirements.</p>
                                <a 
                                    href="https://engineer-sharif.infinityfreeapp.com/#contact" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-sm font-bold text-gray-300 hover:text-white hover:bg-white/10 transition-all group"
                                >
                                    <span>Elite Developer Portal</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-4 h-4 group-hover:translate-x-1 transition-transform">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                                    </svg>
                                </a>
                            </div>

                            <div className="space-y-8">
                                <div className="flex items-center gap-6 group">
                                    <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-[#FF3300]/50 transition-colors">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#FF3300" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L7.5 12.75 3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                                        </svg>
                                    </div>
                                    <div>
                                        <div className="text-[10px] uppercase tracking-[0.3em] font-black text-gray-500">Dispatch Protocol</div>
                                        <div className="text-lg font-bold">concierge@camsociety.elite</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-6 group">
                                    <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-[#FF3300]/50 transition-colors">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#FF3300" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <div className="text-[10px] uppercase tracking-[0.3em] font-black text-gray-500">Elite Hub</div>
                                        <div className="text-lg font-bold">Dhaka, Bangladesh Portfolio District</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative p-16 rounded-[4rem] bg-white/[0.02] border border-white/5 backdrop-blur-3xl shadow-2xl">
                            <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#FF3300]/10 blur-[80px] rounded-full"></div>
                            <form className="space-y-8">
                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase tracking-[0.4em] font-black text-gray-500 ml-4">Identification</label>
                                    <input type="text" placeholder="Your Name" className="w-full bg-white/5 border border-white/10 rounded-full px-8 py-5 text-white placeholder:text-gray-700 focus:border-[#FF3300] focus:ring-1 focus:ring-[#FF3300] outline-none transition-all" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase tracking-[0.4em] font-black text-gray-500 ml-4">Secure Channel</label>
                                    <input type="email" placeholder="Email@Network.com" className="w-full bg-white/5 border border-white/10 rounded-full px-8 py-5 text-white placeholder:text-gray-700 focus:border-[#FF3300] focus:ring-1 focus:ring-[#FF3300] outline-none transition-all" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase tracking-[0.4em] font-black text-gray-500 ml-4">Mandate Details</label>
                                    <textarea placeholder="Describe your visual requirements..." rows="4" className="w-full bg-white/5 border border-white/10 rounded-[2.5rem] px-8 py-6 text-white placeholder:text-gray-700 focus:border-[#FF3300] focus:ring-1 focus:ring-[#FF3300] outline-none transition-all resize-none"></textarea>
                                </div>
                                <button className="w-full py-6 bg-white text-black text-xs font-black uppercase tracking-[0.4em] rounded-full hover:bg-[#FF3300] hover:text-white transition-all shadow-[0_20px_40px_rgba(0,0,0,0.3)] transform active:scale-95">
                                    Initiate Protocol
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </GuestLayout>
    );
}
