import { useState } from "react";
import OTPInput from "react-otp-input";
import { router, Head } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

const OTPVerification = ({ auth, email, photoIds, total }) => {
    const [otp, setOtp] = useState("");
    const [error, setError] = useState("");

    const handleOtpChange = (otpValue) => {
        setOtp(otpValue);
        if (error) setError("");
    };

    const handleVerifyOtp = () => {
        if (otp.length === 6) {
            router.post(
                "/verify-otp",
                { email, otp, photoIds, total},
                {
                    onError: (errors) => {
                        setError(errors.message || "Security protocols invalid. Re-verify OTP.");
                    },
                }
            );
        } else {
            setError("The protocol requires 6-digit synchronization.");
        }
    };

    return (
        <div className="min-h-screen bg-[#050505] flex items-center justify-center p-6 bg-gradient-to-br from-black via-[#050505] to-indigo-950/20">
            <Head title="Secure Verification" />
            
            <div className="relative w-full max-w-xl p-16 rounded-[4rem] bg-white/[0.02] border border-white/10 backdrop-blur-3xl shadow-2xl overflow-hidden group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF3300]/10 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2 group-hover:bg-[#FF3300]/20 transition-all duration-700"></div>
                
                <div className="relative z-10 text-center space-y-10">
                    <div className="space-y-4">
                        <div className="inline-block p-4 rounded-3xl bg-white/5 border border-white/5 mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="#FF3300" className="w-8 h-8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0V10.5m-2.25 2.1l13.5 0M4.5 21l15 0" />
                                <rect x="4.5" y="10.5" width="15" height="10.5" rx="3" />
                            </svg>
                        </div>
                        <h2 className="text-4xl font-black text-white font-['Playfair_Display'] tracking-tight">
                            Secure <span className="text-[#FF3300] italic">Synchronization</span>
                        </h2>
                        <p className="text-gray-500 text-sm font-medium leading-relaxed max-w-sm mx-auto">
                            A verification code has been dispatched to <span className="text-white font-bold">{email}</span>. Please authorize the transaction.
                        </p>
                    </div>

                    <div className="flex justify-center">
                        <OTPInput
                            value={otp}
                            onChange={handleOtpChange}
                            numInputs={6}
                            renderInput={(props) => (
                                <input
                                    {...props}
                                    style={{ width: "3.5rem" }}
                                    className="h-20 bg-white/5 border border-white/10 rounded-2xl text-white text-3xl font-black text-center focus:border-[#FF3300] focus:ring-1 focus:ring-[#FF3300] transition-all mx-2 outline-none"
                                />
                            )}
                        />
                    </div>

                    {error && (
                        <p className="text-[#FF3300] text-xs font-black uppercase tracking-widest animate-pulse">
                            {error}
                        </p>
                    )}

                    <div className="space-y-6">
                        <button
                            onClick={handleVerifyOtp}
                            className="w-full py-6 bg-white text-black text-[10px] font-black uppercase tracking-[0.3em] rounded-[2rem] hover:bg-[#FF3300] hover:text-white transition-all shadow-[0_20px_40px_rgba(255,51,0,0.15)] transform active:scale-95"
                        >
                            Confirm Identity
                        </button>
                        
                        <p className="text-[9px] font-bold text-gray-700 uppercase tracking-widest">
                            Issue with the dispatch? <button className="text-[#FF3300] hover:text-white transition-colors ml-1">Request New Protocol</button>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OTPVerification;
