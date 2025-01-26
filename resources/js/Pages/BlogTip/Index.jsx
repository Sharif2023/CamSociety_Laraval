import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import PhotographerLayout from "../Photographer/Layout/PhotographerLayout";
import BlogList from "./Components/BlogList";
import BlogModal from "./Components/BlogModal";
import { useState } from "react";

export default function index({ auth }) {
    const [selectedPost, setSelectedPost] = useState(null);

    const blogs = [
        {
            id: 1,
            title: "Understanding Camera Aperture",
            author: "John Doe",
            content:
                "The aperture of your camera lens controls how much light enters the camera. This post will explain the various types of apertures...",
            image: "https:picsum.photos/400/200",
            createdAt: "2025-01-15",
        },
        {
            id: 2,
            title: "Tips for Capturing Stunning Landscape Photos",
            author: "Jane Smith",
            content:
                "Landscape photography is one of the most rewarding genres. This post covers essential tips to improve your shots...",
            image: "https:picsum.photos/400/200",
            createdAt: "2025-01-20",
        },
        {
            id: 3,
            title: "How to Choose the Right Lens for Portraits",
            author: "Emily White",
            content:
                "Choosing the right lens is crucial for portrait photography. Here’s a guide to selecting the perfect lens for every type of portrait...",
            image: "https:picsum.photos/400/200",
            createdAt: "2025-01-22",
        },
    ];

    const openModal = (post) => {
        setSelectedPost(post);
    };

    const closeModal = () => {
        setSelectedPost(null);
    };

    const Layout =
        auth.role === "photographer" ? PhotographerLayout : AuthenticatedLayout;

    return (
        <Layout
            header={
                <h2 className="text-xl font-semibold text-center leading-tight text-gray-800">
                    Blog & Tips
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {blogs.map((blog) => (
                        <div
                            key={blog.id}
                            className="bg-white shadow-lg rounded-lg p-4 cursor-pointer"
                            onClick={() => openModal(blog)}
                        >
                            <img
                                src={blog.image}
                                alt={blog.title}
                                className="w-full h-40 object-cover rounded-lg"
                            />
                            <h2 className="text-xl font-bold text-gray-800 mt-2">
                                {blog.title}
                            </h2>
                            <p className="text-gray-500 text-sm">
                                {blog.createdAt}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Show Modal if post is selected */}
                {selectedPost && (
                    <BlogModal post={selectedPost} onClose={closeModal} />
                )}
            </div>
        </Layout>
    );
}
