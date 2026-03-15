import React, { useState, useEffect } from 'react';

const TestimonialCarousel = () => {
  const testimonials = [
    {
      name: "Rashid Khan",
      role: "National Geographic Contributor",
      quote: "CamSociety has fundamentally changed how I manage my assignments. The technical clarity and speed are unmatched.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop",
    },
    {
      name: "Sarah Ali",
      role: "Luxury Event Photographer",
      quote: "The clientele here is of a different caliber. It's truly a platform for the elite of the industry.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop",
    },
    {
      name: "Arif Hossain",
      role: "Visual Storyteller",
      quote: "Finally, a platform that understands the value of high-resolution artistry. My portfolio has never looked better.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-6">
            <div className="text-center mb-20">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6">
                    <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#FF3300]">Voice of the Society</span>
                </div>
                <h2 className="text-5xl md:text-7xl font-black font-['Playfair_Display']">The Elite <span className="italic text-gray-500">Perspective.</span></h2>
            </div>

            <div className="max-w-6xl mx-auto relative h-[500px] flex items-center justify-center">
                {testimonials.map((t, i) => (
                    <div 
                        key={i}
                        className={`absolute inset-0 flex flex-col md:flex-row items-center gap-12 transition-all duration-1000 ease-in-out ${
                            i === currentIndex ? "opacity-100 translate-x-0 scale-100" : "opacity-0 translate-x-20 scale-95 pointer-events-none"
                        }`}
                    >
                        <div className="w-full md:w-1/2 relative group">
                            <div className="absolute -inset-4 bg-gradient-to-r from-[#FF3300] to-indigo-600 rounded-[2rem] blur-2xl opacity-10"></div>
                            <img 
                                src={t.image} 
                                alt={t.name} 
                                className="relative w-full h-[400px] object-cover rounded-[2rem] border border-white/10 shadow-2xl" 
                            />
                        </div>
                        <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
                            <svg className="w-12 h-12 text-[#FF3300]/40 mb-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                            </svg>
                            <p className="text-2xl md:text-3xl font-medium italic text-gray-300 leading-relaxed font-['Playfair_Display']">
                                "{t.quote}"
                            </p>
                            <div>
                                <h4 className="text-xl font-bold text-white">{t.name}</h4>
                                <p className="text-[#FF3300] font-bold text-sm uppercase tracking-widest">{t.role}</p>
                            </div>
                        </div>
                    </div>
                ))}

                {/* Dots */}
                <div className="absolute bottom-0 flex gap-4">
                    {testimonials.map((_, i) => (
                        <button 
                            key={i}
                            onClick={() => setCurrentIndex(i)}
                            className={`h-1.5 transition-all duration-500 rounded-full ${i === currentIndex ? "w-12 bg-[#FF3300]" : "w-3 bg-white/20"}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    </section>
  );
};

export default TestimonialCarousel;
