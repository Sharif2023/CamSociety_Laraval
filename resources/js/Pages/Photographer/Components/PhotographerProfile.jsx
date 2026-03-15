import React from "react";

const PhotographerProfile = ({ name, bio, specializations, profilePicture }) => {
    return (
        <section className="relative group overflow-hidden rounded-[3rem] bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/10 p-12 backdrop-blur-3xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/10 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
                <div className="relative w-40 h-40 flex-shrink-0">
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#FF3300] to-indigo-600 rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
                    <img
                        src={profilePicture}
                        alt="Profile"
                        className="relative w-full h-full rounded-full object-cover border-4 border-white/5 shadow-2xl"
                    />
                    <div className="absolute -bottom-2 right-0 bg-[#FF3300] text-white p-2 rounded-full shadow-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                        </svg>
                    </div>
                </div>

                <div className="flex-grow text-center md:text-left space-y-4">
                    <div>
                        <h2 className="text-4xl font-black text-white font-['Playfair_Display'] tracking-tight">
                            {name}
                        </h2>
                        <p className="text-[#FF3300] text-[10px] font-black uppercase tracking-[0.3em] mt-1">
                            {specializations}
                        </p>
                    </div>
                    <p className="text-gray-400 text-lg font-medium italic leading-relaxed max-w-2xl">
                        "{bio}"
                    </p>
                </div>
            </div>
        </section>
    );
};

export default PhotographerProfile;
