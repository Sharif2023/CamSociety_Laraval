import React from "react";

const StatsCards = ({ stats }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-[2.5rem] bg-white/[0.02] border border-white/5 text-center group hover:border-white/20 transition-all duration-500">
                <p className="text-[10px] font-black text-gray-500 uppercase tracking-[0.3em] mb-4 text-[#FF3300]">Visual Assets</p>
                <p className="text-6xl font-black text-white font-['Playfair_Display'] mb-2">{stats.listed_photos}</p>
                <p className="text-xs font-bold text-gray-600 uppercase tracking-widest">Listed Portfolio Items</p>
            </div>

            <div className="p-8 rounded-[2.5rem] bg-white/[0.02] border border-white/5 text-center group hover:border-white/20 transition-all duration-500">
                <p className="text-[10px] font-black text-gray-500 uppercase tracking-[0.3em] mb-4 text-indigo-500">Artist Rating</p>
                <p className="text-6xl font-black text-white font-['Playfair_Display'] mb-2">{stats.rating > 0 ? stats.rating : "—"}</p>
                <p className="text-xs font-bold text-gray-600 uppercase tracking-widest text-[#FFCC00]">Excellence Index</p>
            </div>

            <div className="p-8 rounded-[2.5rem] bg-white/[0.02] border border-white/5 text-center group hover:border-white/20 transition-all duration-500">
                <p className="text-[10px] font-black text-gray-500 uppercase tracking-[0.3em] mb-4 text-emerald-500">Career Tier</p>
                <p className="text-6xl font-black text-white font-['Playfair_Display'] mb-2 truncate">{stats.experience}</p>
                <p className="text-xs font-bold text-gray-600 uppercase tracking-widest">Verified Status</p>
            </div>
        </div>
    );
};

export default StatsCards;
