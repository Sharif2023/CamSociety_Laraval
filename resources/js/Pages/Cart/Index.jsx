import { Head, router, Link } from "@inertiajs/react";
import React, { useEffect, useState } from "react";
import PhotographerLayout from "../Photographer/Layout/PhotographerLayout";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { ToastContainer, toast } from 'react-toastify';

export default function Cart({ auth, cartItems, cartId, flash }) {

    useEffect(() => {
        if (flash.message.success) {
            toast.success(flash.message.success);
        }
        if (flash.message.error) {
            toast.error(flash.message.error);
        }
    }, [flash]);

    const Layout = auth.role === 1 ? PhotographerLayout : AuthenticatedLayout;

    const handleRemove = (id) => {
        router.delete(route("cart.destroy", id));
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

    // Calculate the Subtotal (Multiplier is 100 as per requirement)
    const subtotal = cartItems.reduce((total, item) => {
        const itemPrice = (parseFloat(item.photo_sell?.price) || 0) * 100;
        return total + itemPrice * item.quantity;
    }, 0);

    const shipping = 500.00; // Flat premium shipping
    const taxRate = 0.05; // 5% luxury tax
    const tax = subtotal * taxRate;
    const total = subtotal + shipping + tax;

    const [errors, setErrors] = useState({});
    const [userDetails, setUserDetails] = useState({
        name: auth.user.name,
        email: auth.user.email,
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
        if (!userDetails.name.trim()) newErrors.name = "Verification of identity required.";
        if (!userDetails.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userDetails.email)) newErrors.email = "Valid communication channel required.";
        if (!userDetails.phone || !/^\d+$/.test(userDetails.phone)) newErrors.phone = "Secure contact number required.";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleCheckout = () => {
        if (validateInputs()) {
            router.get(route("checkout"), userDetails);
        }
    };

    return (
        <Layout
            header={
                <div>
                    <h2 className="text-3xl font-black font-['Playfair_Display'] text-white">
                        Acquisition <span className="italic text-[#FF3300]">Vault</span>
                    </h2>
                    <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mt-1">Review Your Selections</p>
                </div>
            }
        >
            <Head title="Acquisition Vault" />
            <ToastContainer theme="dark" />

            <div className="min-h-screen bg-[#050505] py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                        
                        {/* Cart Items */}
                        <div className="lg:col-span-8 space-y-10">
                            {cartItems.length === 0 ? (
                                <div className="py-40 text-center rounded-[3rem] border-2 border-dashed border-white/5 bg-white/[0.01]">
                                    <div className="mb-6 flex justify-center text-gray-800">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-16 h-16 opacity-20">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m20.25 7.5-.625 10.125a3.375 3.375 0 0 1-3.375 3.375H7.75a3.375 3.375 0 0 1-3.375-3.375L3.75 7.5m16.5 0-1.25-1.25a3.375 3.375 0 0 0-3.375-3.375H8.375A3.375 3.375 0 0 0 5 6.25L3.75 7.5m16.5 0V6.25m-16.5 5.25h16.5" />
                                        </svg>
                                    </div>
                                    <p className="text-gray-500 font-medium italic text-xl">Your acquisition vault is currently empty.</p>
                                    <Link href={route('photomarket')} className="mt-8 inline-block text-[#FF3300] font-black uppercase text-xs tracking-widest hover:text-white transition-colors">Return to Gallery →</Link>
                                </div>
                            ) : (
                                cartItems.map((item) => (
                                    <div key={item.id} className="relative group flex flex-col sm:flex-row items-center gap-10 p-8 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:border-[#FF3300]/30 transition-all duration-500">
                                        <div className="w-48 h-48 flex-shrink-0 overflow-hidden rounded-[1.5rem] border border-white/10 shadow-2xl">
                                            <img
                                                src={item.photo_sell?.image_url.startsWith("http") ? item.photo_sell?.image_url : `/PhotoSells/${item.photo_sell?.image_url}`}
                                                alt={item.photo_sell?.title}
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                            />
                                        </div>

                                        <div className="flex-grow space-y-4 text-center sm:text-left">
                                            <div>
                                                <span className="text-[#FF3300] text-[9px] font-black uppercase tracking-widest mb-1 block">{item.photo_sell?.category}</span>
                                                <h3 className="text-2xl font-black text-white font-['Playfair_Display']">{item.photo_sell?.title}</h3>
                                            </div>
                                            <p className="text-gray-500 text-sm font-medium line-clamp-2 leading-relaxed">
                                                {item.photo_sell?.description}
                                            </p>
                                            
                                            <div className="flex items-center justify-center sm:justify-start gap-8 pt-4">
                                                <div className="flex items-center gap-4 px-4 py-2 rounded-full bg-white/5 border border-white/10 uppercase font-black text-[10px] tracking-widest text-white">
                                                    <button onClick={() => minusQuantity(item.id)} className="hover:text-[#FF3300] transition-colors">—</button>
                                                    <span className="min-w-[20px] text-center border-x border-white/10 px-4">{item.quantity}</span>
                                                    <button onClick={() => plusQuantity(item.id)} className="hover:text-[#FF3300] transition-colors">+</button>
                                                </div>
                                                <button onClick={() => handleRemove(item.id)} className="text-gray-600 hover:text-red-500 text-[10px] font-black uppercase tracking-widest transition-colors">Discard</button>
                                            </div>
                                        </div>

                                        <div className="text-center sm:text-right">
                                            <p className="text-3xl font-black text-white font-['Playfair_Display'] tracking-tighter">৳{((item.photo_sell?.price * 100) * item.quantity).toLocaleString()}</p>
                                            <p className="text-[10px] font-black text-gray-600 uppercase tracking-widest mt-1">Single Unit: ৳{(item.photo_sell?.price * 100).toLocaleString()}</p>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>

                        {/* Order Summary */}
                        <div className="lg:col-span-4">
                            <div className="sticky top-32 p-10 rounded-[3rem] bg-gradient-to-br from-white/[0.04] to-white/[0.01] border border-white/10 backdrop-blur-3xl space-y-10">
                                <h3 className="text-2xl font-black text-white font-['Playfair_Display'] tracking-tight">Financial Summary</h3>
                                
                                <div className="space-y-6">
                                    <div className="space-y-4">
                                        <div>
                                            <label className="text-[10px] font-black text-[#FF3300] uppercase tracking-widest mb-2 block">Acquisition Holder</label>
                                            <input
                                                type="text"
                                                name="name"
                                                value={userDetails.name}
                                                onChange={handleInputChange}
                                                className={`w-full bg-black/40 border-white/10 rounded-2xl text-white text-sm focus:ring-[#FF3300] focus:border-[#FF3300] p-4 transition-all ${errors.name ? 'border-red-500/50' : ''}`}
                                            />
                                        </div>
                                        <div>
                                            <label className="text-[10px] font-black text-[#FF3300] uppercase tracking-widest mb-2 block">Secure Email</label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={userDetails.email}
                                                onChange={handleInputChange}
                                                className={`w-full bg-black/40 border-white/10 rounded-2xl text-white text-sm focus:ring-[#FF3300] focus:border-[#FF3300] p-4 transition-all ${errors.email ? 'border-red-500/50' : ''}`}
                                            />
                                        </div>
                                        <div>
                                            <label className="text-[10px] font-black text-[#FF3300] uppercase tracking-widest mb-2 block">Contact Matrix (Phone)</label>
                                            <input
                                                type="text"
                                                name="phone"
                                                value={userDetails.phone}
                                                onChange={handleInputChange}
                                                placeholder="+880 ..."
                                                className={`w-full bg-black/40 border-white/10 rounded-2xl text-white text-sm focus:ring-[#FF3300] focus:border-[#FF3300] p-4 transition-all ${errors.phone ? 'border-red-500/50' : ''}`}
                                            />
                                        </div>
                                    </div>

                                    <div className="pt-6 border-t border-white/5 space-y-4">
                                        <div className="flex justify-between text-sm">
                                            <span className="text-gray-500 font-bold uppercase tracking-widest">Subtotal Assets</span>
                                            <span className="text-white font-black">৳{subtotal.toLocaleString()}</span>
                                        </div>
                                        <div className="flex justify-between text-sm">
                                            <span className="text-gray-500 font-bold uppercase tracking-widest">Premium Logistics</span>
                                            <span className="text-white font-black">৳{shipping.toLocaleString()}</span>
                                        </div>
                                        <div className="flex justify-between text-sm">
                                            <span className="text-gray-500 font-bold uppercase tracking-widest">Luxury Processing</span>
                                            <span className="text-white font-black">৳{tax.toLocaleString()}</span>
                                        </div>
                                        <div className="h-px bg-white/10"></div>
                                        <div className="flex justify-between items-end">
                                            <span className="text-[10px] font-black text-[#FF3300] uppercase tracking-[0.3em]">Total Commitment</span>
                                            <span className="text-4xl font-black text-white font-['Playfair_Display'] leading-none">৳{total.toLocaleString()}</span>
                                        </div>
                                    </div>

                                    <button
                                        onClick={handleCheckout}
                                        disabled={cartItems.length === 0}
                                        className="w-full py-6 bg-white text-black text-xs font-black uppercase tracking-widest rounded-[2rem] hover:bg-[#FF3300] hover:text-white transition-all transform hover:-translate-y-1 shadow-[0_20px_40px_rgba(255,51,0,0.2)] disabled:opacity-20 disabled:pointer-events-none"
                                    >
                                        Initiate Checkout
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
