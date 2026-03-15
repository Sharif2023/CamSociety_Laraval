import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, router } from "@inertiajs/react";
import PhotographerLayout from "../Photographer/Layout/PhotographerLayout";
import Pagination from "@/Components/Pagination";
import TextInput from "@/Components/TextInput";
import { useState } from "react";

export default function Index({ auth, photographers, queryParams = null }) {
    const photographersData = photographers?.data || [];
    const Layout = auth.role === "photographer" ? PhotographerLayout : AuthenticatedLayout;
    
    queryParams = queryParams || {};

    const searchFieldChange = (name, value) => {
        if (value) {
            queryParams[name] = value;
        } else {
            delete queryParams[name];
        }
        router.get(route("hirephotographer", queryParams));
    };

    const onKeyPress = (name, e) => {
        if (e.key !== "Enter") return;
        searchFieldChange(name, e.target.value);
    };

    return (
        <Layout
            header={
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                        <h2 className="text-3xl font-black font-['Playfair_Display'] text-white">
                            Elite <span className="italic text-[#FF3300]">Artists</span>
                        </h2>
                        <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mt-1">Direct Access to the World's Best</p>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="relative group">
                            <TextInput
                                className="bg-white/5 border-white/10 text-white placeholder:text-gray-600 rounded-full py-2.5 px-6 w-64 md:w-96 focus:ring-[#FF3300] transition-all"
                                placeholder="Search by name or expertise..."
                                defaultValue={queryParams.search}
                                onBlur={(e) => searchFieldChange("search", e.target.value)}
                                onKeyPress={(e) => onKeyPress("search", e)}
                            />
                        </div>
                    </div>
                </div>
            }
        >
            <Head title="Premium Photographers" />

            <div className="min-h-screen bg-[#050505] py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    
                    {/* Featured Section Banner */}
                    <div className="mb-20 p-12 rounded-[3.5rem] bg-gradient-to-br from-[#FF3300]/10 to-indigo-900/10 border border-white/5 backdrop-blur-3xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF3300]/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
                        <div className="relative z-10 max-w-2xl">
                            <span className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-[10px] uppercase tracking-widest font-black text-[#FF3300] mb-6 inline-block">
                                Verified Network
                            </span>
                            <h3 className="text-4xl font-black text-white font-['Playfair_Display'] mb-4 leading-tight">
                                Hire the Visionaries Behind the <span className="text-[#FF3300]">Lens</span>
                            </h3>
                            <p className="text-gray-400 text-lg leading-relaxed font-medium capitalize">
                                Our community consists of award-winning professionals across every genre. Find your perfect match today.
                            </p>
                        </div>
                    </div>

                    {/* Photographers Grid */}
                    <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {photographersData.length > 0 ? (
                            photographersData.map((photographer) => (
                                <div
                                    key={photographer.id}
                                    className="group relative bg-white/[0.02] border border-white/10 rounded-[2.5rem] p-8 hover:border-[#FF3300]/50 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(255,51,0,0.1)] text-center animate-in fade-in slide-in-from-bottom-4 duration-700"
                                >
                                    <div className="relative w-32 h-32 mx-auto mb-8">
                                        <div className="absolute inset-0 bg-gradient-to-tr from-[#FF3300] to-indigo-600 rounded-full blur-2xl opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>
                                        <img
                                            src={photographer.profile_picture || `https://i.pravatar.cc/300?u=${photographer.id}`}
                                            alt={photographer.name}
                                            className="relative w-full h-full rounded-full object-cover border-4 border-white/5 group-hover:border-[#FF3300]/50 transition-colors"
                                        />
                                        <div className="absolute -bottom-2 -right-2 bg-[#FF3300] text-white p-2 rounded-full shadow-xl">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-4 h-4">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                            </svg>
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <h3 className="text-2xl font-bold text-white font-['Playfair_Display'] group-hover:text-[#FF3300] transition-colors">
                                            {photographer.name}
                                        </h3>
                                        <p className="text-gray-500 text-sm font-medium line-clamp-2 leading-relaxed h-10">
                                            {photographer.bio || "Crafting visual stories that transcend the ordinary."}
                                        </p>
                                        
                                        <div className="flex items-center justify-center gap-2">
                                            {[...Array(5)].map((_, i) => (
                                                <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={`w-3.5 h-3.5 ${i < Math.floor(photographer.rating) ? 'text-[#FF3300]' : 'text-gray-800'}`}>
                                                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                                                </svg>
                                            ))}
                                            <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">{photographer.rating} Excellence</span>
                                        </div>

                                        <button className="w-full mt-6 py-4 bg-white/5 border border-white/10 text-white text-xs font-black rounded-full hover:bg-[#FF3300] hover:border-[#FF3300] transition-all transform group-hover:-translate-y-1">
                                            HIRE NOW
                                        </button>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="col-span-full py-32 text-center border-2 border-dashed border-white/5 rounded-[3rem]">
                                <p className="text-gray-500 font-medium italic">No visionary artists found matching your criteria.</p>
                            </div>
                        )}
                    </div>
                    
                    {photographers?.meta?.links && (
                        <div className="mt-24 flex justify-center">
                            <Pagination links={photographers.meta.links} />
                        </div>
                    )}
                </div>
            </div>
        </Layout>
    );
}
