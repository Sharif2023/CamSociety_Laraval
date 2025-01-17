import { useState, useEffect } from "react";
import { Head, router } from "@inertiajs/react";
import ProductCard from "./Components/ProductCard";
import Modal from "./Components/Modal";
import Pagination from "@/Components/Pagination";
import SelectInput from "@/Components/SelectInput";
import TextInput from "@/Components/TextInput";
import PhotographerLayout from "../Photographer/Layout/PhotographerLayout";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function Index({ auth, photoSells, queryParams = null }) {
    // Initialize state with the dynamic photoSells data
    const [photos, setPhotoSells] = useState(photoSells.data);
    
    // Extract unique categories from photoSells data
    const categories = [
        ...new Set(photoSells.data.map((photo) => photo.category)),
    ];
    
    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleModalOpen = () => setIsModalOpen(true);
    const handleModalClose = () => setIsModalOpen(false);


    queryParams = queryParams || {};

    // Search Field Change
    const searchFieldChange = (name, value) => {
        if (value) {
            queryParams[name] = value;
        } else {
            delete queryParams[name];
        }

        router.get(route("photomarket", queryParams));
    };

    // On Key Press
    const onKeyPress = (name, e) => {
        if (e.key !== "Enter") {
            return;
        }

        searchFieldChange(name, e.target.value);
    };

    const Layout = auth.role === "photographer" ? PhotographerLayout : AuthenticatedLayout;

    return (
        <Layout
            header={
                <h2 className="text-3xl font-bold text-center text-gray-900 mt-4 mb-6">
                    Photo Market
                </h2>
            }
        >
            <Head title="Photo Market" />

            {/* Debug JSON output */}
            {/* <pre>{JSON.stringify(photoSells, undefined, 2)}</pre> */}

            <div className="container mx-auto px-4 py-4">
              
              <div className="flex justify-between items-center mb-6">

                <TextInput
                    className="bg-white text-gray-800 border border-gray-300 rounded-full py-2 px-4 w-1/4 focus:ring-2 focus:ring-blue-500"
                    placeholder="Search Photos"
                    defaultValue={queryParams.title}
                    onBlur={(e) => searchFieldChange("title", e.target.value)}
                    onKeyPress={(e) => onKeyPress("title", e)}
                />

                <SelectInput
                    className="bg-gray-100 border border-gray-300 text-gray-800 text-sm rounded-full focus:ring-2 focus:ring-blue-500"
                    defaultValue={queryParams.category}
                    onChange={(e) =>
                        searchFieldChange("category", e.target.value)
                    }
                >
                    <option value="">All</option>
                    {categories.map((category, index) => (
                        <option key={index} value={category}>
                            {category}
                        </option>
                    ))}
                </SelectInput>

                </div>

                {/* List Photos Button */}
                <div className="flex justify-center mb-6">
                    <button
                        onClick={handleModalOpen}
                        className="py-2 px-6 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition duration-300"
                    >
                        List a Photo for Sale
                    </button>
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {photos.map((photo) => (
                        <ProductCard key={photos.id} product={photo} />
                    ))}
                </div>

                {/* Pagination Controls */}
                <Pagination links={photoSells.meta.links} />
            </div>

            {/* Modal for Adding Product */}
            <Modal isOpen={isModalOpen} onClose={handleModalClose} />
        </Layout>
    );
}
