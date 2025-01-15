import { useState } from "react";
import { Head } from "@inertiajs/react";
import PhotographerLayout from "../Photographer/Layout/PhotographerLayout";
import Pagination from "./Components/Pagination";
import CategoryFilter from "./Components/CategoryFilter";
import SearchBar from "./Components/SearchBar";
import ProductCard from "./Components/ProductCard";
import Modal from "./Components/Modal";

export default function Index() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 4; // Number of products to show per page

    const [products, setProducts] = useState([
        {
            name: "Photo 1",
            price: "$100",
            category: "Landscape",
            image: "https://picsum.photos/200?random=1",
        },
        {
            name: "Photo 2",
            price: "$200",
            category: "Portrait",
            image: "https://picsum.photos/200?random=2",
        },
        {
            name: "Photo 3",
            price: "$300",
            category: "Nature",
            image: "https://picsum.photos/200?random=3",
        },
        {
            name: "Photo 4",
            price: "$400",
            category: "Landscape",
            image: "https://picsum.photos/200?random=4",
        },
        {
            name: "Photo 5",
            price: "$500",
            category: "Nature",
            image: "https://picsum.photos/200?random=5",
        },
        {
            name: "Photo 6",
            price: "$600",
            category: "Portrait",
            image: "https://picsum.photos/200?random=6",
        },
        {
            name: "Photo 7",
            price: "$700",
            category: "Landscape",
            image: "https://picsum.photos/200?random=7",
        },
        {
            name: "Photo 8",
            price: "$800",
            category: "Nature",
            image: "https://picsum.photos/200?random=8",
        },
    ]);

    const handleModalOpen = () => setIsModalOpen(true);
    const handleModalClose = () => setIsModalOpen(false);

    const handleSearchChange = (e) => setSearchQuery(e.target.value);
    const handleCategoryChange = (e) => setSelectedCategory(e.target.value);

    const filteredProducts = products.filter((product) => {
        const matchesCategory =
            selectedCategory === "All" || product.category === selectedCategory;
        const matchesSearch =
            product.name.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

    const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <PhotographerLayout
            header={
                <h2 className="text-3xl font-bold text-center text-gray-900 mt-4 mb-6">
                    Photo Market
                </h2>
            }
        >
            <Head title="Photo Market" />

            <div className="container mx-auto px-4 py-4">
                {/* Search Bar */}
                <SearchBar value={searchQuery} onChange={handleSearchChange} />

                {/* Category Filter aligned to the right */}
                <CategoryFilter
                    selectedCategory={selectedCategory}
                    onChange={handleCategoryChange}
                />

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
                    {currentProducts.map((product, index) => (
                        <ProductCard key={index} product={product} />
                    ))}
                </div>

                {/* Pagination Controls */}
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                />
            </div>

            {/* Modal for Adding Product */}
            <Modal isOpen={isModalOpen} onClose={handleModalClose} />
        </PhotographerLayout>
    );
}
