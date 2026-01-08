import { Link } from "@inertiajs/react";

export default function GuestLayout({ children }) {
    return (
        <div
            className="bg-cover bg-center min-h-screen"
            style={{ backgroundImage: "url('/images/bg_main.jpg')" }}
        >
            {/* Overlay for better readability */}
            <div className="min-h-screen bg-black/40 flex items-center justify-center p-4">
                {/* Back Button - Fixed Position */}
                <div className="fixed top-4 left-4 z-10">
                    <button
                        onClick={() => window.location.href = '/'}
                        className="flex items-center gap-2 bg-white/90 backdrop-blur-sm text-gray-700 py-2 px-4 rounded-lg hover:bg-primary hover:text-white transition-all duration-200 shadow-lg"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            className="w-5 h-5"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                            />
                        </svg>
                        <span className="font-medium hidden sm:inline">Back</span>
                    </button>
                </div>

                {/* Form Container */}
                <div className="w-full max-w-md">
                    <div className="bg-white/95 backdrop-blur-md px-6 py-8 sm:px-8 sm:py-10 shadow-2xl rounded-2xl">
                        {/* Logo Inside Container */}
                        <div className="flex justify-center mb-6">
                            <Link href="/" className="flex flex-col items-center gap-2 group">
                                <img
                                    src="/images/camSociety_logo.jpg"
                                    alt="Camsociety Logo"
                                    className="h-16 w-16 sm:h-20 sm:w-20 rounded-full object-cover shadow-lg ring-4 ring-gray-100 group-hover:ring-primary/30 transition-all duration-200"
                                />
                                <span className="text-lg font-bold text-gray-900">Camsociety</span>
                            </Link>
                        </div>

                        {children}
                    </div>

                    {/* Footer */}
                    <p className="text-center text-white/80 text-xs sm:text-sm mt-4">
                        © 2025 Camsociety. All rights reserved.
                    </p>
                </div>
            </div>
        </div>
    );
}
