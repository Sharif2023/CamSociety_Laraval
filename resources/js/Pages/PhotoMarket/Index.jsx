import { useState, useEffect } from "react";
import { Head, router } from "@inertiajs/react";
import ProductCard from "./Components/ProductCard";
import Modal from "./Components/Modal";
import Pagination from "@/Components/Pagination";
import SelectInput from "@/Components/SelectInput";
import TextInput from "@/Components/TextInput";
import PhotographerLayout from "../Photographer/Layout/PhotographerLayout";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { ToastContainer, toast } from 'react-toastify';

export default function Index({ auth, photoSells, queryParams = null , flash}) {
    let user = auth.user;

    useEffect(() => {
        if (flash.message?.success) {
            toast.success(flash.message.success);
        }
        if (flash.message?.error) {
            toast.error(flash.message.error);
        }
    }, [flash]);

    const photos = photoSells.data;
    
    const categories = [
        ...new Set(photoSells.data.map((photo) => photo.category)),
    ];
    
    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleModalOpen = () => setIsModalOpen(true);
    const handleModalClose = () => setIsModalOpen(false);

    queryParams = queryParams || {};

    const searchFieldChange = (name, value) => {
        if (value) {
            queryParams[name] = value;
        } else {
            delete queryParams[name];
        }
        router.get(route("photomarket", queryParams));
    };

    const onKeyPress = (name, e) => {
        if (e.key !== "Enter") return;
        searchFieldChange(name, e.target.value);
    };

    const Layout = auth.role === "photographer" ? PhotographerLayout : AuthenticatedLayout;

    return (
        <Layout
            header={
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                        <h2 className="text-3xl font-black font-['Playfair_Display'] text-white">
                            Photo <span className="italic text-[#FF3300]">Market</span>
                        </h2>
                        <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mt-1">Exclusive Digital Masterpieces</p>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="relative group">
                            <TextInput
                                className="bg-white/5 border-white/10 text-white placeholder:text-gray-600 rounded-full py-2.5 px-6 w-64 md:w-80 focus:ring-[#FF3300] transition-all"
                                placeholder="Search the collection..."
                                defaultValue={queryParams.title}
                                onBlur={(e) => searchFieldChange("title", e.target.value)}
                                onKeyPress={(e) => onKeyPress("title", e)}
                            />
                        </div>

                        <SelectInput
                            className="bg-white/5 border-white/10 text-gray-300 text-sm rounded-full px-6 focus:ring-[#FF3300] py-2.5"
                            defaultValue={queryParams.category}
                            onChange={(e) => searchFieldChange("category", e.target.value)}
                        >
                            <option value="">All Categories</option>
                            {categories.map((category, index) => (
                                <option key={index} value={category}>{category}</option>
                            ))}
                        </SelectInput>

                        {user.role === 1 && (
                            <button
                                onClick={handleModalOpen}
                                className="px-8 py-2.5 bg-[#FF3300] text-white font-bold rounded-full hover:bg-[#CC2900] shadow-[0_4px_20px_rgba(255,51,0,0.3)] transition-all transform hover:-translate-y-0.5 active:scale-95"
                            >
                                List Photo
                            </button>
                        )}
                    </div>
                </div>
            }
        >
            <Head title="Premium Photo Market" />
            <ToastContainer theme="dark" />

            <div className="min-h-screen bg-[#050505] py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Product Grid */}
                    <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {photos.length > 0 ? (
                            photos.map((photo) => (
                                <div key={photo.id} className="animate-in fade-in slide-in-from-bottom-4 duration-700">
                                    <ProductCard product={photo} />
                                </div>
                            ))
                        ) : (
                            <div className="col-span-full py-32 text-center border-2 border-dashed border-white/5 rounded-[3rem]">
                                <p className="text-gray-500 font-medium italic">No masterpieces found in this category.</p>
                            </div>
                        )}
                    </div>

                    {/* Pagination Controls */}
                    <div className="mt-20 flex justify-center">
                        <Pagination links={photoSells.meta.links} />
                    </div>
                </div>
            </div>

            {/* Modal for Adding Product */}
            <Modal isOpen={isModalOpen} onClose={handleModalClose} />
        </Layout>
    );
}
