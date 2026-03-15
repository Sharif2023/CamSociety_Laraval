import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import DeleteUserForm from "./Partials/DeleteUserForm";
import UpdatePasswordForm from "./Partials/UpdatePasswordForm";
import UpdateProfileInformationForm from "./Partials/UpdateProfileInformationForm";
import PrimaryButton from "@/Components/PrimaryButton";

export default function Edit({ mustVerifyEmail, status }) {
    return (
        <AuthenticatedLayout
            header={
                <div>
                    <h2 className="text-3xl font-black font-['Playfair_Display'] text-white">
                        Identity <span className="italic text-[#FF3300]">Configuration</span>
                    </h2>
                    <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mt-1">Refine Your Visual Presence</p>
                </div>
            }
        >
            <Head title="Identity Configuration" />

            <div className="py-20 min-h-screen bg-[#050505]">
                <div className="mx-auto max-w-7xl space-y-12 px-4 sm:px-6 lg:px-8">
                    
                    {/* Visual Asset Update */}
                    <div className="relative group overflow-hidden rounded-[3rem] bg-white/[0.02] border border-white/5 p-10 backdrop-blur-3xl transition-all duration-500 hover:border-[#FF3300]/20">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/5 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
                        <h3 className="text-xl font-black text-white font-['Playfair_Display'] mb-6 uppercase tracking-tight">
                            Visual <span className="text-[#FF3300] italic">Signature</span>
                        </h3>
                        <div className="flex flex-col sm:flex-row items-center gap-8">
                            <div className="w-32 h-32 rounded-full border-2 border-white/10 overflow-hidden bg-white/5 flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-12 h-12 text-white/20">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15a2.25 2.25 0 0 0 2.25-2.25V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" />
                                </svg>
                            </div>
                            <div className="flex-grow space-y-4 text-center sm:text-left">
                                <input 
                                    type="file" 
                                    className="block w-full text-[10px] text-gray-500 font-bold uppercase tracking-widest
                                    file:mr-4 file:py-3 file:px-8
                                    file:rounded-full file:border-0
                                    file:text-[10px] file:font-black file:uppercase file:tracking-[0.2em]
                                    file:bg-white/5 file:text-white
                                    hover:file:bg-[#FF3300] transition-all cursor-pointer" 
                                />
                                <p className="text-[9px] font-bold text-gray-600 uppercase tracking-widest">Recommended: 800x800px High-Resolution Portrait</p>
                            </div>
                            <PrimaryButton className="bg-[#FF3300] hover:bg-white hover:text-black rounded-full px-10 py-4 text-[10px] font-black uppercase tracking-[0.2em] transition-all shadow-[0_10px_30px_rgba(255,51,0,0.2)]">
                                Synchronize
                            </PrimaryButton>
                        </div>
                    </div>

                    {/* Form Sections */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <div className="rounded-[3rem] bg-white/[0.02] border border-white/5 p-10 hover:border-white/10 transition-colors">
                            <UpdateProfileInformationForm
                                mustVerifyEmail={mustVerifyEmail}
                                status={status}
                                className="text-white"
                            />
                        </div>

                        <div className="rounded-[3rem] bg-white/[0.02] border border-white/5 p-10 hover:border-white/10 transition-colors">
                            <UpdatePasswordForm className="text-white" />
                        </div>
                    </div>

                    {/* Danger Zone */}
                    <div className="rounded-[3rem] bg-gradient-to-r from-red-500/5 to-transparent border border-red-500/10 p-10">
                        <DeleteUserForm className="text-white" />
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
