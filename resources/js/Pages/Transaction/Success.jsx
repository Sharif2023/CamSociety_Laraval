import React from "react";
import { Link, usePage, Head } from "@inertiajs/react";

const TransactionSuccess = () => {
    return (
        <div className="min-h-screen bg-[#050505] flex items-center justify-center p-6 bg-gradient-to-br from-black via-[#050505] to-indigo-950/20">
            <Head title="Execution Successful" />
            
            <div className="relative w-full max-w-2xl p-20 rounded-[4rem] bg-white/[0.02] border border-white/10 backdrop-blur-3xl shadow-2xl overflow-hidden group text-center">
                <div className="absolute top-0 right-0 w-80 h-80 bg-green-500/10 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2 group-hover:bg-green-500/20 transition-all duration-700"></div>
                
                <div className="relative z-10 space-y-10">
                    <div className="space-y-6">
                        <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-green-500/10 border border-green-500/20 mb-4 animate-bounce">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="#22C55E" className="w-12 h-12">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                            </svg>
                        </div>
                        <h2 className="text-5xl font-black text-white font-['Playfair_Display'] tracking-tight">
                            Protocol <span className="text-green-500 italic">Finalized</span>
                        </h2>
                        <p className="text-gray-500 text-lg font-medium leading-relaxed max-w-md mx-auto">
                            The acquisition of your visual assets has been processed through our secure channels. Your collection is now authenticated.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <Link
                            href={route('dashboard')}
                            className="group relative overflow-hidden py-6 rounded-[2rem] bg-white text-black text-[10px] font-black uppercase tracking-[0.3em] transition-all hover:bg-green-500 hover:text-white transform active:scale-95 shadow-[0_20px_40px_rgba(0,0,0,0.3)]"
                        >
                            Return to Command
                        </Link>
                        <Link
                            href={route('transactions')}
                            className="group relative overflow-hidden py-6 rounded-[2rem] bg-white/5 border border-white/10 text-white text-[10px] font-black uppercase tracking-[0.3em] transition-all hover:bg-white/10 transform active:scale-95"
                        >
                            Audit History
                        </Link>
                    </div>
                    
                    <div className="pt-8 border-t border-white/5">
                        <p className="text-[9px] font-bold text-gray-700 uppercase tracking-widest">
                            Ref: {Math.random().toString(36).substr(2, 9).toUpperCase()} • CamSociety Elite Network
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TransactionSuccess;
