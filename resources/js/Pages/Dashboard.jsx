import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";

export default function Dashboard({ auth, flash }) {
    const user = auth.user;

    useEffect(() => {
        if (flash.message.success) {
            toast.success(flash.message.success);
        }
        if (flash.message.error) {
            toast.error(flash.message.error);
        }
    }, [flash]);

    return (
        <AuthenticatedLayout
            header={
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div>
                        <h2 className="text-3xl font-black font-['Playfair_Display'] text-white">
                            Personal <span className="italic text-[#FF3300]">Suite</span>
                        </h2>
                        <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mt-1">Manage Your Visual Legacy</p>
                    </div>
                    <Link
                        href={route("profile.edit")}
                        className="px-8 py-3 bg-white/5 border border-white/10 text-white text-[10px] font-black uppercase tracking-widest rounded-full hover:bg-[#FF3300] hover:border-[#FF3300] transition-all"
                    >
                        Adjust Settings
                    </Link>
                </div>
            }
        >
            <Head title="Personal Suite" />
            <ToastContainer theme="dark" />

            <div className="py-20">
                <div className="max-w-7xl mx-auto space-y-12">
                    {/* Hero Profile Card */}
                    <div className="relative group overflow-hidden rounded-[3.5rem] bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/10 p-12 backdrop-blur-3xl">
                        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#FF3300]/10 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2"></div>
                        
                        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-16">
                            <div className="relative w-64 h-64 lg:w-80 lg:h-80 flex-shrink-0">
                                <div className="absolute inset-0 bg-gradient-to-tr from-[#FF3300] to-indigo-600 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
                                <img
                                    src={user.profile_picture || `https://i.pravatar.cc/400?u=${user.id}`}
                                    alt="Profile"
                                    className="relative w-full h-full rounded-full object-cover border-8 border-white/5 shadow-2xl"
                                />
                                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-6 py-2 bg-[#FF3300] text-white text-[10px] font-black uppercase tracking-widest rounded-full shadow-2xl">
                                    Titan Member
                                </div>
                            </div>

                            <div className="flex-grow text-center lg:text-left space-y-6">
                                <div>
                                    <h3 className="text-5xl font-black text-white font-['Playfair_Display'] mb-2 uppercase tracking-tight">
                                        {user.name}
                                    </h3>
                                    <p className="text-gray-500 font-medium italic text-lg leading-relaxed max-w-2xl">
                                        {user.bio || "Crafting a narrative through the lens of pure excellence."}
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-8 pt-6">
                                    <div className="p-6 rounded-3xl bg-white/5 border border-white/5">
                                        <p className="text-[10px] font-black text-[#FF3300] uppercase tracking-[0.2em] mb-1">Authenticated ID</p>
                                        <p className="text-gray-300 font-medium">{user.email}</p>
                                    </div>
                                    <div className="p-6 rounded-3xl bg-white/5 border border-white/5">
                                        <p className="text-[10px] font-black text-[#FF3300] uppercase tracking-[0.2em] mb-1">Status Sync</p>
                                        <p className="text-gray-300 font-medium">Last updated {new Date(user.updated_at).toLocaleDateString()}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Quick Stats / Actions */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { label: "Acquisitions", value: "0", sub: "Photos Owned", color: "#FF3300" },
                            { label: "Engagements", value: "0", sub: "Events Booked", color: "#4F46E5" },
                            { label: "Community", value: "Level 1", sub: "Member Since 2024", color: "#10B981" },
                        ].map((stat, i) => (
                            <div key={i} className="p-10 rounded-[2.5rem] bg-white/[0.02] border border-white/5 text-center group hover:border-white/20 transition-all duration-500">
                                <p className="text-[10px] font-black text-gray-500 uppercase tracking-[0.3em] mb-4">{stat.label}</p>
                                <p className="text-5xl font-black text-white font-['Playfair_Display'] mb-2" style={{ color: stat.color }}>{stat.value}</p>
                                <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">{stat.sub}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
