import { Head, router } from "@inertiajs/react";
import React, { useState } from "react";
import PhotographerLayout from "../Photographer/Layout/PhotographerLayout";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function Cart({ auth, cartItems, cartId }) {
    const Layout =
        auth.role === "photographer" ? PhotographerLayout : AuthenticatedLayout;

    const handleRemove = (id) => {
        if (confirm("Are you sure you want to remove this item?")) {
            router.delete(route("cart.destroy", id));
        }
    };

    const plusQuantity = (id) => {
        router.put(route("cart.update", id), {
            quantity: cartItems.find((item) => item.id === id).quantity + 1,
        });
    };

    const minusQuantity = (id) => {
        const item = cartItems.find((item) => item.id === id);
        if (item.quantity > 1) {
            router.put(route("cart.update", id), {
                quantity: item.quantity - 1,
            });
        }
    };

    const formatPrice = (price) => {
        return price ? `$${price.toFixed(2)}` : "$0.00";
    };

    // console.log(cartItems); // Add this inside your component

    // Calculate the Subtotal
    const subtotal = cartItems.reduce((total, item) => {
        const itemPrice = parseFloat(item.photo_sell?.price) || 0;
        return total + itemPrice * item.quantity;
    }, 0);

    // Shipping (fixed for now)
    const shipping = 2.0;

    // Tax calculation (e.g., 10% of the subtotal)
    const taxRate = 0.1; // 10% tax
    const tax = subtotal * taxRate;

    // Total calculation
    const total = subtotal + shipping + tax;

    const [errors, setErrors] = useState({});

    const [userDetails, setUserDetails] = useState({
        name: "",
        email: "",
        phone: "",
        photo_sell_id: cartItems.map((item) => item.id),
        total: total,
    });

    const handleInputChange = (e) => {
        setUserDetails({
            ...userDetails,
            [e.target.name]: e.target.value,
        });
    };

    const validateInputs = () => {
        const newErrors = {};

        if (!userDetails.name.trim()) {
            newErrors.name = "Name is required.";
        }
        if (
            !userDetails.email ||
            !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userDetails.email)
        ) {
            newErrors.email = "Invalid email address.";
        }
        if (!userDetails.phone || !/^\d+$/.test(userDetails.phone)) {
            newErrors.phone = "Phone number must be numeric.";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleCheckout = () => {
        if (validateInputs()) {
            // route checkout get method with userDetails
            router.get(route("checkout"), userDetails);
        }
    };

    return (
        <Layout>
        {/* <pre>{JSON.stringify(cartId, null, 2)}</pre> */}
            <Head title="Shopping Cart" />
            <div className="font-sans max-w-5xl max-md:max-w-xl mx-auto bg-white py-4 px-4 md:px-8">
                <h1 className="text-3xl font-bold text-gray-800 text-center">
                    Shopping Cart
                </h1>
                <div className="grid md:grid-cols-3 gap-8 mt-16">
                    <div className="md:col-span-2 space-y-4">
                        {cartItems.length === 0 ? (
                            <div className="text-center">
                                <p>Your cart is empty!</p>
                            </div>
                        ) : (
                            cartItems.map((item) => (
                                <div
                                    key={item.id}
                                    className="grid grid-cols-3 items-start gap-4"
                                >
                                    <div className="col-span-2 flex items-start gap-4">
                                        <div className="w-28 h-28 max-sm:w-24 max-sm:h-24 shrink-0 bg-gray-100 p-2 rounded-md">
                                            <img
                                                src={item.photo_sell?.image_url} // Accessing photo_sell here
                                                alt={item.photo_sell?.title} // Accessing photo_sell here
                                                className="w-full h-full object-contain"
                                            />
                                        </div>

                                        <div className="flex flex-col">
                                            <h3 className="text-base font-bold text-gray-800">
                                                {item.photo_sell?.title}{" "}
                                                {/* Accessing photo_sell here */}
                                            </h3>

                                            <p className="text-xs font-semibold text-gray-500 mt-0.5">
                                                {item.photo_sell?.description}{" "}
                                                {/* Accessing photo_sell here */}
                                            </p>

                                            <button
                                                type="button"
                                                onClick={() =>
                                                    handleRemove(item.id)
                                                }
                                                className="mt-6 font-semibold text-red-500 text-xs flex items-center gap-1 shrink-0"
                                            >
                                                {/* SVG icon */}
                                                REMOVE
                                            </button>
                                        </div>
                                    </div>
                                    <div className="ml-auto">
                                        <h4 className="text-lg max-sm:text-base font-bold text-gray-800">
                                            $
                                            {parseFloat(
                                                item.photo_sell?.price
                                            ).toFixed(2)}{" "}
                                            {/* Accessing photo_sell and formatting the price */}
                                        </h4>

                                        <button
                                            type="button"
                                            class="mt-6 flex items-center px-3 py-1.5 border border-gray-300 text-gray-800 text-xs outline-none bg-transparent rounded-md"
                                        >
                                            <button
                                                onClick={() =>
                                                    minusQuantity(item.id)
                                                }
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    class="w-2.5 fill-current"
                                                    viewBox="0 0 124 124"
                                                >
                                                    <path
                                                        d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z"
                                                        data-original="#000000"
                                                    ></path>
                                                </svg>
                                            </button>
                                            <span class="mx-3 font-bold">
                                                {item.quantity}
                                            </span>

                                            <button
                                                onClick={() =>
                                                    plusQuantity(item.id)
                                                }
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    class="w-2.5 fill-current"
                                                    viewBox="0 0 42 42"
                                                >
                                                    <path
                                                        d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z"
                                                        data-original="#000000"
                                                    ></path>
                                                </svg>
                                            </button>
                                        </button>
                                    </div>
                                </div>
                            ))
                        )}
                        <hr className="border-gray-300" />
                    </div>

                    <div class="bg-gray-100 rounded-md p-4 h-max">
                        <h3 class="text-lg max-sm:text-base font-bold text-gray-800 border-b border-gray-300 pb-2">
                            Order Summary
                        </h3>

                        <form class="mt-6">
                            <div>
                                <h3 class="text-base text-gray-800  font-semibold mb-4">
                                    Enter Details
                                </h3>
                                <div class="space-y-3">
                                    <div class="relative flex items-center">
                                        <input
                                            type="text"
                                            name="name"
                                            value={userDetails.name}
                                            onChange={handleInputChange}
                                            className={`mt-1 block w-full rounded-md border ${
                                                errors.name
                                                    ? "border-red-500"
                                                    : "border-gray-300"
                                            } shadow-sm`}
                                            placeholder="Name"
                                        />
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="#bbb"
                                            stroke="#bbb"
                                            class="w-4 h-4 absolute right-4"
                                            viewBox="0 0 24 24"
                                        >
                                            <circle
                                                cx="10"
                                                cy="7"
                                                r="6"
                                                data-original="#000000"
                                            ></circle>
                                            <path
                                                d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z"
                                                data-original="#000000"
                                            ></path>
                                        </svg>
                                    </div>

                                    <div class="relative flex items-center">
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Email"
                                            value={userDetails.email}
                                            onChange={handleInputChange}
                                            className={`mt-1 block w-full rounded-md border ${
                                                errors.email
                                                    ? "border-red-500"
                                                    : "border-gray-300"
                                            } shadow-sm`}
                                        />
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="#bbb"
                                            stroke="#bbb"
                                            class="w-4 h-4 absolute right-4"
                                            viewBox="0 0 682.667 682.667"
                                        >
                                            <defs>
                                                <clipPath
                                                    id="a"
                                                    clipPathUnits="userSpaceOnUse"
                                                >
                                                    <path
                                                        d="M0 512h512V0H0Z"
                                                        data-original="#000000"
                                                    ></path>
                                                </clipPath>
                                            </defs>
                                            <g
                                                clip-path="url(#a)"
                                                transform="matrix(1.33 0 0 -1.33 0 682.667)"
                                            >
                                                <path
                                                    fill="none"
                                                    stroke-miterlimit="10"
                                                    stroke-width="40"
                                                    d="M452 444H60c-22.091 0-40-17.909-40-40v-39.446l212.127-157.782c14.17-10.54 33.576-10.54 47.746 0L492 364.554V404c0 22.091-17.909 40-40 40Z"
                                                    data-original="#000000"
                                                ></path>
                                                <path
                                                    d="M472 274.9V107.999c0-11.027-8.972-20-20-20H60c-11.028 0-20 8.973-20 20V274.9L0 304.652V107.999c0-33.084 26.916-60 60-60h392c33.084 0 60 26.916 60 60v196.653Z"
                                                    data-original="#000000"
                                                ></path>
                                            </g>
                                        </svg>
                                    </div>

                                    <div class="relative flex items-center">
                                        <input
                                            type="number"
                                            name="phone"
                                            placeholder="Phone No."
                                            value={userDetails.phone}
                                            onChange={handleInputChange}
                                            className={`mt-1 block w-full rounded-md border ${
                                                errors.phone
                                                    ? "border-red-500"
                                                    : "border-gray-300"
                                            } shadow-sm`}
                                        />
                                        <svg
                                            fill="#bbb"
                                            class="w-4 h-4 absolute right-4"
                                            viewBox="0 0 64 64"
                                        >
                                            <path
                                                d="m52.148 42.678-6.479-4.527a5 5 0 0 0-6.963 1.238l-1.504 2.156c-2.52-1.69-5.333-4.05-8.014-6.732-2.68-2.68-5.04-5.493-6.73-8.013l2.154-1.504a4.96 4.96 0 0 0 2.064-3.225 4.98 4.98 0 0 0-.826-3.739l-4.525-6.478C20.378 10.5 18.85 9.69 17.24 9.69a4.69 4.69 0 0 0-1.628.291 8.97 8.97 0 0 0-1.685.828l-.895.63a6.782 6.782 0 0 0-.63.563c-1.092 1.09-1.866 2.472-2.303 4.104-1.865 6.99 2.754 17.561 11.495 26.301 7.34 7.34 16.157 11.9 23.011 11.9 1.175 0 2.281-.136 3.29-.406 1.633-.436 3.014-1.21 4.105-2.302.199-.199.388-.407.591-.67l.63-.899a9.007 9.007 0 0 0 .798-1.64c.763-2.06-.007-4.41-1.871-5.713z"
                                                data-original="#000000"
                                            ></path>
                                        </svg>
                                    </div>
                                    {errors.phone && (
                                        <p className="text-red-500 text-sm">
                                            {errors.phone}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </form>

                        <hr className="border-gray-300" />
                        <ul className="text-gray-800 mt-6 space-y-3">
                            <li className="flex flex-wrap gap-4 text-sm">
                                Subtotal{" "}
                                <span className="ml-auto font-bold">
                                    ${subtotal.toFixed(2)}
                                </span>
                            </li>
                            <li className="flex flex-wrap gap-4 text-sm">
                                Shipping{" "}
                                <span className="ml-auto font-bold">
                                    ${shipping.toFixed(2)}
                                </span>
                            </li>
                            <li className="flex flex-wrap gap-4 text-sm">
                                Tax{" "}
                                <span className="ml-auto font-bold">
                                    ${tax.toFixed(2)}
                                </span>
                            </li>
                            <hr className="border-gray-300" />
                            <li className="flex flex-wrap gap-4 text-sm font-bold">
                                Total{" "}
                                <span className="ml-auto">
                                    ${total.toFixed(2)}
                                </span>
                            </li>
                        </ul>

                        <div class="mt-6 space-y-3">
                            <button
                                type="button"
                                onClick={handleCheckout}
                                class="text-sm px-4 py-2.5 w-full font-semibold tracking-wide bg-gray-800 hover:bg-gray-900 text-white rounded-md"
                            >
                                Checkout
                            </button>
                            <button
                                type="button"
                                class="text-sm px-4 py-2.5 w-full font-semibold tracking-wide bg-transparent text-gray-800 border border-gray-300 rounded-md"
                            >
                                Continue Shopping{" "}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
