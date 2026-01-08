import { router, useForm } from "@inertiajs/react";

export default function ProductCard({ product }) {
    // Initialize useForm once outside the function
    const { data, setData, post, processing, errors, reset } = useForm({
        item_type: "photo",
        cart_item_id: product.id,
        quantity: 1,
        price: product.price,
    });

    // const photoPath = `/PhotoSells/${product.photo}`; // Path to the photo

    // if image link starts with http, use it as is, otherwise use the asset function
    const photoPath = product.photo.startsWith("http")
        ? product.photo // Use the image link as is
        : `/PhotoSells/${product.photo}`; // Use the asset function to generate the correct path

    // Function to handle adding to cart
    const handleAddToCart = () => {
        // Post the form data to the cart store route
        post(route("cart.store"), {
            onSuccess: () => {
                console.log("Item added to cart");
                reset(); // Optional: Reset form data after success
            },
            onError: (errors) => {
                console.error("Failed to add item to cart:", errors);
            },
        });
    };

    const handleBuyNow = () => {
        post(route("cart.store"), {
            onSuccess: () => {
                console.log("Item successfully added to cart");
                router.visit(route("cart.index")); // Redirect to cart page
            },
            onError: (errors) => {
                console.error("Failed to add item to cart:", errors);
            },
        });
    };

    return (
        <div className="group bg-white shadow-lg rounded-lg overflow-hidden relative hover:shadow-xl transition-shadow duration-300">
            {/* Image Section */}
            <img
                src={photoPath || "https://via.placeholder.com/300"}
                alt={product.title}
                className="w-full h-48 object-cover transition-all duration-300 group-hover:opacity-80"
            />

            {/* Overlay with buttons on hover */}
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 flex items-center justify-center space-x-4 transition-all duration-300">
                <button
                    className="text-white bg-[#1F1F1F] p-3 rounded-full hover:bg-[#FF3300] transition duration-300 flex items-center"
                    onClick={handleAddToCart}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                        />
                    </svg>
                    Cart
                </button>
                <button
                    className="text-white bg-[#FF3300] p-3 rounded-full hover:bg-[#1F1F1F] transition duration-300 flex items-center"
                    onClick={handleBuyNow}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                        />
                    </svg>
                    Buy
                </button>
            </div>

            {/* Product Information */}
            <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">
                    {product.title}
                </h3>
                <p className="text-gray-500">{product.description}</p>
                <p className="text-gray-900 font-bold text-xl">
                    BDT {parseFloat(product.price).toFixed(2)}
                </p>
            </div>
        </div>
    );
}
