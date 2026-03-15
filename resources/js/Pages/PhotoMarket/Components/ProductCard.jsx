import { router, useForm } from "@inertiajs/react";

export default function ProductCard({ product }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        item_type: "photo",
        cart_item_id: product.id,
        quantity: 1,
        price: product.price,
    });

    const photoPath = product.photo.startsWith("http")
        ? product.photo
        : `/PhotoSells/${product.photo}`;

    const handleAddToCart = () => {
        post(route("cart.store"), {
            onSuccess: () => {
                reset();
            },
        });
    };

    const handleBuyNow = () => {
        post(route("cart.store"), {
            onSuccess: () => {
                router.visit(route("cart.index"));
            },
        });
    };

    return (
        <div className="group relative bg-white/[0.02] border border-white/10 rounded-[2.5rem] overflow-hidden hover:border-[#FF3300]/50 transition-all duration-500 shadow-2xl">
            {/* Image Section */}
            <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-black/40 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <img
                    src={photoPath || "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=2070&auto=format&fit=crop"}
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Float Category Badge */}
                <div className="absolute top-4 left-4 z-20">
                    <span className="px-3 py-1 bg-black/60 backdrop-blur-md border border-white/10 rounded-full text-[10px] uppercase tracking-widest font-bold text-gray-300">
                        {product.category}
                    </span>
                </div>

                {/* Hover Actions */}
                <div className="absolute inset-0 z-30 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                    <button
                        onClick={handleAddToCart}
                        className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-[#FF3300] hover:border-[#FF3300] transition-all"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                        </svg>
                    </button>
                    <button
                        onClick={handleBuyNow}
                        className="px-6 py-3 bg-[#FF3300] text-white text-xs font-black rounded-full hover:bg-white hover:text-black transition-all shadow-xl"
                    >
                        BUY NOW
                    </button>
                </div>
            </div>

            {/* Information Section */}
            <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-white font-['Playfair_Display'] group-hover:text-[#FF3300] transition-colors leading-tight">
                        {product.title}
                    </h3>
                    <div className="text-right">
                        <p className="text-[10px] uppercase tracking-widest font-black text-gray-500 mb-1">Asset Value</p>
                        <p className="text-xl font-black text-white leading-none">
                            ৳{parseFloat(product.price).toLocaleString()}
                        </p>
                    </div>
                </div>
                
                <p className="text-gray-500 text-sm font-medium line-clamp-2 leading-relaxed">
                    {product.description}
                </p>

                <div className="mt-6 pt-6 border-t border-white/5 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-gradient-to-r from-[#FF3300] to-indigo-600"></div>
                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Master Studio</span>
                    </div>
                    <span className="text-[10px] font-bold text-[#FF3300] uppercase tracking-widest px-2 py-1 bg-[#FF3300]/10 rounded">Authentic</span>
                </div>
            </div>
        </div>
    );
}
