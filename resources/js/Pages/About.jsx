import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function About() {
    return (
        <AuthenticatedLayout
            header={
                <div>
                    <h2 className="text-3xl font-black font-['Playfair_Display'] text-white">
                        Elite <span className="italic text-[#FF3300]">Heritage</span>
                    </h2>
                    <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mt-1">Our Vision & Artistic Mandate</p>
                </div>
            }
        >
            <Head title="Our Heritage" />

            <div className="py-24 min-h-screen bg-[#050505]">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-32">
                    
                    {/* Vision Section */}
                    <div className="relative group overflow-hidden rounded-[4rem] bg-white/[0.02] border border-white/5 p-20 backdrop-blur-3xl transition-all duration-700 hover:border-[#FF3300]/20">
                        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FF3300]/5 blur-[150px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
                        
                        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                            <div className="space-y-8">
                                <h3 className="text-6xl font-black text-white font-['Playfair_Display'] leading-none">
                                    Redefining the <br />
                                    <span className="text-[#FF3300] italic">Visual Frontier.</span>
                                </h3>
                                <p className="text-gray-400 text-lg font-medium leading-relaxed">
                                    CamSociety was established as a sanctuary for elite visual artists and discerning collectors. We bridge the gap between raw inspiration and permanent acquisition, curating a global network of the most profound photographic talents.
                                </p>
                                <div className="pt-8">
                                    <div className="inline-flex items-center space-x-4 px-8 py-4 rounded-full bg-white/5 border border-white/5 text-white/50 text-[10px] font-black uppercase tracking-[0.2em]">
                                        <span>EST. 2026</span>
                                        <span className="w-1 h-1 bg-white/20 rounded-full"></span>
                                        <span>GLOBAL HEADQUARTERS</span>
                                    </div>
                                </div>
                            </div>
                            <div className="relative aspect-square rounded-[3rem] overflow-hidden border border-white/10 group-hover:border-[#FF3300]/30 transition-colors">
                                <img 
                                    src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=800" 
                                    alt="Visionary Art" 
                                    className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                                <div className="absolute bottom-8 left-8">
                                    <p className="text-[10px] font-black text-white/40 uppercase tracking-[0.3em]">The Artist's Perspective</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Mission Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: 'Curation', desc: 'Every asset is rigorously authenticated for artistic integrity.', icon: 'M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z' },
                            { title: 'Prestige', desc: 'Our members represent the pinnacle of global visual culture.', icon: 'M11.48 3.499c.507-1.56 2.704-1.56 3.211 0l1.91 5.88a1.5 1.5 0 0 0 1.408 1.062h6.18c1.647 0 2.332 2.106 1.002 3.164l-5.003 4.002a1.5 1.5 0 0 0-.54 1.659l1.91 5.88c.507 1.56-1.293 2.87-2.627 2.031l-5.003-4.002a1.5 1.5 0 0 0-1.78 0l-5.003 4.002c-1.334.839-3.134-.471-2.627-2.031l1.91-5.88a1.5 1.5 0 0 0-.54-1.659l-5.003-4.002c-1.33-1.058-.645-3.164 1.002-3.164h6.18a1.5 1.5 0 0 0 1.408-1.062l1.91-5.88Z' },
                            { title: 'Excellence', desc: 'We demand perfection in every pixel and every interaction.', icon: 'M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z' }
                         ].map((item, idx) => (
                            <div key={idx} className="rounded-[3rem] bg-white/[0.02] border border-white/5 p-12 hover:bg-white/[0.04] transition-all group">
                                <div className="w-16 h-16 rounded-2xl bg-[#FF3300]/10 flex items-center justify-center mb-8 border border-[#FF3300]/20 group-hover:scale-110 transition-transform">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#FF3300" className="w-8 h-8">
                                        <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                                    </svg>
                                </div>
                                <h4 className="text-2xl font-black text-white font-['Playfair_Display'] mb-4 tracking-tight">{item.title}</h4>
                                <p className="text-gray-500 font-medium">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="text-center py-20 border-t border-white/5">
                        <p className="text-[11px] font-black text-gray-700 uppercase tracking-[0.5em] mb-8">CamSociety Elite Syndicate</p>
                        <h2 className="text-4xl font-['Playfair_Display'] italic text-white/20">Where moments become eternal legacies.</h2>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
