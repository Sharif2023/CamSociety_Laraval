import { Head, router } from "@inertiajs/react";
import React from "react";
import PhotographerLayout from "../Photographer/Layout/PhotographerLayout";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function index({ auth, cartItems }) {
    const handleRemove = (id) => {
        if (confirm("Are you sure you want to remove this item?")) {
            router.delete(route("cart.destroy", id));
        }
    };

    const Layout = auth.role === "photographer" ? PhotographerLayout : AuthenticatedLayout;

    return (
        <Layout>
        <div className="max-w-4xl mx-auto p-6">
            <Head title="Product Cart" />
            <h1 className="text-2xl font-bold text-gray-800 mb-4">Your Cart</h1>

            {cartItems.length === 0 ? (
                <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
                    <p className="text-gray-500 text-lg">Your cart is empty.</p>
                </div>
            ) : (
                <div className="bg-white rounded-lg shadow-lg p-6">
                    <ul className="space-y-4">
                        {cartItems.map((item) => (
                            <li
                                key={item.id}
                                className="flex items-center justify-between bg-gray-50 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                            >
                                <div>
                                    <h3 className="text-lg font-medium text-gray-800 capitalize">
                                        {item.item_type}: {item.item_id}
                                    </h3>
                                    <p className="text-sm text-gray-500">
                                        Quantity: {item.quantity}
                                    </p>
                                    <p className="text-gray-800 font-bold mt-2">
                                        BDT {parseFloat(item.price).toFixed(2)}
                                    </p>
                                </div>
                                <button
                                    onClick={() => handleRemove(item.id)}
                                    className="bg-red-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-600 transition duration-300"
                                >
                                    Remove
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
        </Layout>
    );
}
