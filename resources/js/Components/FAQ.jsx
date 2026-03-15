import React from 'react';

export default function FAQ() {
    const faqData = [
        {
            q: "What defines CamSociety?",
            a: "CamSociety is a curated ecosystem for elite photographers and discerning clients. We provide the infrastructure for professional growth, high-stakes assignments, and artistic commerce."
        },
        {
            q: "How does the membership work?",
            a: "Membership is currently by application. We review portfolios to ensure every member contributes to the society's standard of excellence."
        },
        {
            q: "Is the private marketplace secure?",
            a: "Absolute security is our baseline. All transactions and high-resolution deliveries are handled via our proprietary encrypted gateway."
        },
        {
            q: "Are there exclusive society events?",
            a: "Yes. From private gallery showings to high-level networking summits, we facilitate the connections that move the industry forward."
        }
    ];

    return (
        <section className="py-32 bg-white/[0.01] border-y border-white/5">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-5xl md:text-7xl font-black font-['Playfair_Display'] mb-6">Society <span className="italic text-gray-500">Intelligence.</span></h2>
                        <p className="text-gray-400 font-medium tracking-wide">Essential information for prospective members.</p>
                    </div>

                    <div className="space-y-6">
                        {faqData.map((item, i) => (
                            <details key={i} className="group border border-white/10 rounded-[2rem] bg-white/[0.02] overflow-hidden transition-all duration-300 hover:border-white/20">
                                <summary className="flex items-center justify-between p-8 cursor-pointer list-none">
                                    <span className="text-xl font-bold font-['Outfit'] text-white group-open:text-[#FF3300] transition-colors">
                                        {item.q}
                                    </span>
                                    <span className="transition-transform duration-300 group-open:rotate-180">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                        </svg>
                                    </span>
                                </summary>
                                <div className="px-8 pb-8">
                                    <p className="text-gray-400 text-lg leading-relaxed font-medium border-t border-white/5 pt-6">
                                        {item.a}
                                    </p>
                                </div>
                            </details>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}