import { router } from "@inertiajs/react";
import { useState } from "react";

export default function PhotoSellModal({ isOpen, onClose, onSubmit }) {
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        price: "",
        photo: null,
        category: "All", // Default to "All" for category
    });

    const $categories = [
        "All", "Nature", "People", "Food", "Architecture", "Travel", "Technology", "Animals", "Fashion", 
        "Health", "Art", "Business", "Sports", "Science", "Education", "Music", "Transportation", "Holidays", 
        "Religion", "Backgrounds", "Textures", "Patterns", "Colors", "Abstract",
    ];

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData({
            ...formData,
            [name]: files ? files[0] : value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { title, description, price, photo, category } = formData;

        // Validate fields
        if (!title || !description || !price || !photo || category === "All") {
            alert("Please fill in all fields and upload a photo.");
            return;
        }

        const formDataToSend = new FormData();
        formDataToSend.append("title", title);
        formDataToSend.append("description", description);
        formDataToSend.append("price", price);
        formDataToSend.append("category", category);
        formDataToSend.append("photo", photo);

        try {
            router.post("/photomarket", formDataToSend, {
                onStart: () => {},
                onFinish: () => {},
                onSuccess: (response) => {
                    alert("Photo submitted for sale successfully!");
                    onSubmit(formData); 
                    onClose(); 
                },
                onError: (errors) => {
                    console.log(errors); // Log any errors
                    alert("Error submitting the photo.");
                },
            });
        } catch (error) {
            alert("There was an error submitting the photo.");
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
            <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg">
                <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
                    Sell Your Photos
                </h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="photo-title" className="block text-gray-700 font-bold mb-2">
                            Photo Title
                        </label>
                        <input type="text" id="photo-title" name="title" value={formData.title} onChange={handleChange}
                            placeholder="Enter title" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400" required />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="photo-description" className="block text-gray-700 font-bold mb-2">
                            Description
                        </label>
                        <textarea id="photo-description" name="description" value={formData.description} onChange={handleChange}
                            placeholder="Enter description" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400" required></textarea>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="category" className="block text-gray-700 font-bold mb-2">
                            Category
                        </label>
                        <select id="category" name="category" value={formData.category} onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400" required>
                            {$categories.map((category, index) => (
                                <option key={index} value={category}>
                                    {category}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="photo-price" className="block text-gray-700 font-bold mb-2">
                            Price (BDT)
                        </label>
                        <input type="number" id="photo-price" name="price" value={formData.price} onChange={handleChange}
                            placeholder="Enter price" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400" required />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="photo-upload" className="block text-gray-700 font-bold mb-2">
                            Upload Photo
                        </label>
                        <input type="file" id="photo-upload" name="photo" onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400" required />
                    </div>

                    <div className="flex justify-between">
                        <button type="button" onClick={onClose} className="py-2 px-4 bg-gray-500 text-white rounded-md font-bold hover:bg-gray-700">
                            Cancel
                        </button>
                        <button type="submit" className="py-2 px-4 bg-amber-500 text-white rounded-md font-bold hover:bg-amber-600">
                            Submit for Sale
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
