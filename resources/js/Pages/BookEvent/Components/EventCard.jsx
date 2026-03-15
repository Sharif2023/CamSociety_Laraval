import { router } from "@inertiajs/react";
import React from "react";

const EventCard = ({ id, image = "", title, address, rate, startDate, endDate }) => {
  const photoPath = image && image.startsWith("http") ? image : image ? `/events_photos/${image}` : "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1938&auto=format&fit=crop";

  return (
    <div className="group relative bg-white/[0.02] border border-white/10 rounded-[2.5rem] overflow-hidden hover:border-[#FF3300]/50 transition-all duration-500 shadow-2xl">
      {/* Image Section */}
      <div className="relative h-64 overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <img
          src={photoPath}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Rate Badge */}
        <div className="absolute top-4 right-4 z-20">
            <div className="px-4 py-2 bg-black/60 backdrop-blur-md border border-white/10 rounded-full">
                <p className="text-[#FF3300] font-black text-sm">৳{parseFloat(rate).toLocaleString()}</p>
            </div>
        </div>

        {/* Status Badge */}
        <div className="absolute top-4 left-4 z-20">
            <span className="px-3 py-1 bg-[#FF3300]/20 border border-[#FF3300]/30 rounded-full text-[10px] uppercase tracking-widest font-bold text-[#FF3300]">
                Open Slot
            </span>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-8">
        <div className="mb-6">
            <h3 className="text-xl font-bold text-white font-['Playfair_Display'] group-hover:text-[#FF3300] transition-colors leading-tight mb-2 truncate">
                {title}
            </h3>
            <div className="flex items-center gap-2 text-gray-500">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
                <p className="text-xs font-bold uppercase tracking-widest truncate">{address}</p>
            </div>
        </div>

        <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between p-4 bg-white/[0.03] rounded-2xl border border-white/5">
                <div className="text-center flex-1">
                    <p className="text-[10px] uppercase font-black text-gray-600 mb-1">Commencement</p>
                    <p className="text-xs font-bold text-gray-300">{startDate}</p>
                </div>
                <div className="w-px h-8 bg-white/5"></div>
                <div className="text-center flex-1">
                    <p className="text-[10px] uppercase font-black text-gray-600 mb-1">Conclusion</p>
                    <p className="text-xs font-bold text-gray-300">{endDate || "Finalised"}</p>
                </div>
            </div>

            <button
                onClick={() => router.visit(route("eventbook.show", id))}
                className="w-full py-4 bg-white text-black text-xs font-black rounded-full hover:bg-[#FF3300] hover:text-white transition-all transform hover:-translate-y-1 shadow-xl"
            >
                VIEW ASSIGNMENT
            </button>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
