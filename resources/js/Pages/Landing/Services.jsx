import { Head, Link } from "@inertiajs/react";
import GuestLayout from "@/Layouts/GuestLayout";

export default function Services() {
    const services = [
        {
            title: "Asset Acquisition",
            category: "Photomarket",
            desc: "Immediate access to highly-curated, verified visual assets from Bangladesh's elite artists.",
            image: "https://images.unsplash.com/photo-1554048612-b6a482bc67e5?auto=format&fit=crop&q=80&w=800",
            features: ["Authenticated Ownership", "High-Resolution Masters", "Commercial Licensing"]
        },
        {
            title: "Artistic Commission",
            category: "Hire Photographers",
            desc: "Direct engagement with world-class specialists for bespoke visual documentation and creative projects.",
            image: "https://images.unsplash.com/photo-1493863641943-9b68992a8d07?auto=format&fit=crop&q=80&w=800",
            features: ["Elite Verification", "Standardized Valuation", "Direct Communication"]
        },
        {
            title: "Event Documentation",
            category: "Event Booking",
            desc: "Comprehensive visual coverage for high-stakes corporate and private events with guaranteed excellence.",
            image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800",
            features: ["Multi-Talent Coordination", "Rapid Turnaround", "Premium Deliverables"]
        }
    ];

    return (
        <GuestLayout>
            <Head title="Elite Services | CamSociety" />

            <div className="relative pt-32">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-30 pointer-events-none overflow-hidden">
                    <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-[#FF3300] rounded-full blur-[150px]"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    <div className="text-center space-y-6 mb-24 animate-in fade-in slide-in-from-bottom-8 duration-1000">
                        <h1 className="text-6xl md:text-8xl font-black font-['Playfair_Display']">
                            Elite <span className="text-[#FF3300] italic">Services.</span>
                        </h1>
                        <p className="max-w-xl mx-auto text-gray-400 font-medium">A curated suite of visual solutions designed for absolute precision and premium impact.</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                        {services.map((service, idx) => (
                            <div key={idx} className="group relative rounded-[4rem] bg-white/[0.02] border border-white/5 overflow-hidden backdrop-blur-3xl transition-all duration-700 hover:border-[#FF3300]/30 hover:-translate-y-4 shadow-2xl">
                                <div className="aspect-[4/3] overflow-hidden">
                                    <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 opacity-60 group-hover:opacity-100" />
                                </div>
                                <div className="p-12 space-y-8">
                                    <div className="space-y-4">
                                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#FF3300]">{service.category}</span>
                                        <h3 className="text-3xl font-black font-['Playfair_Display']">{service.title}</h3>
                                        <p className="text-gray-500 font-medium leading-relaxed">{service.desc}</p>
                                    </div>
                                    <ul className="space-y-4">
                                        {service.features.map((f, i) => (
                                            <li key={i} className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-gray-400">
                                                <span className="w-1.5 h-1.5 bg-[#FF3300] rounded-full"></span>
                                                {f}
                                            </li>
                                        ))}
                                    </ul>
                                    <Link href="/register" className="block w-full py-5 text-center bg-white text-black text-[10px] font-black uppercase tracking-[0.3em] rounded-full hover:bg-[#FF3300] hover:text-white transition-all">
                                        Authorize Access
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </GuestLayout>
    );
}
