import { Head, Link } from "@inertiajs/react";
import HeroSection from "../Components/HeroSection";
import FeaturesSection from "../Components/FeaturesSection";
import CallToAction from "../Components/CallToAction";
import TestimonialCarousel from "@/Components/TestimonialCarousel";
import Footer from "@/Components/Footer";
import FAQ from "@/Components/FAQ";
import ApplicationLogo from "@/Components/ApplicationLogo";

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    const handleImageError = () => {
        document
            .getElementById("screenshot-container")
            ?.classList.add("!hidden");
        document.getElementById("docs-card")?.classList.add("!row-span-1");
        document
            .getElementById("docs-card-content")
            ?.classList.add("!flex-row");
        document.getElementById("background")?.classList.add("!hidden");
    };

    return (
        <>
            <Head title="Welcome" />
            <div class="bg-white text-gray-900">
                <div class="w-full">
                    {/* Premium Sticky Header */}
                    <header className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm transition-all duration-300">
                        <div className="container mx-auto flex justify-between items-center py-4 px-6 lg:px-12">
                            {/* Logo & Brand */}
                            <div className="flex items-center gap-3 group cursor-pointer">
                                <div className="w-10 h-10 rounded-full flex items-center justify-center overflow-hidden shadow-md group-hover:scale-105 transition-transform duration-300">
                                    <img src="/images/camSociety_logo.jpg" alt="Camsociety Logo" className="w-full h-full object-cover" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-xl font-bold tracking-tight text-gray-900 group-hover:text-black transition-colors leading-tight">CamSocity</span>
                                    <span className="text-xs font-medium text-gray-500 uppercase tracking-widest mt-0.5 leading-tight">Your Photography Hub</span>
                                </div>
                            </div>

                            {/* Navigation Links */}
                            <nav className="hidden md:flex items-center gap-8">
                                <a href="#" className="relative text-sm font-semibold text-gray-600 hover:text-gray-900 transition-colors py-2 after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-gray-900 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">Home</a>
                                <a href="#" className="relative text-sm font-semibold text-gray-600 hover:text-gray-900 transition-colors py-2 after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-gray-900 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">About</a>
                                <a href="#" className="relative text-sm font-semibold text-gray-600 hover:text-gray-900 transition-colors py-2 after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-gray-900 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">Services</a>
                                <a href="#" className="relative text-sm font-semibold text-gray-600 hover:text-gray-900 transition-colors py-2 after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-gray-900 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">Contact</a>
                            </nav>

                            {/* Actions / Auth */}
                            <div className="flex items-center gap-4">
                                {/* Search Icon */}
                                <button className="hidden sm:block text-gray-500 hover:text-gray-900 transition-colors p-2 rounded-full hover:bg-gray-50">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                                    </svg>
                                </button>
                                
                                {auth.user ? (
                                    <Link
                                        href={route("dashboard")}
                                        className="flex items-center justify-center px-5 py-2.5 bg-gray-900 text-white text-sm font-semibold rounded-full hover:bg-gray-800 hover:shadow-lg transition-all transform hover:-translate-y-0.5"
                                    >
                                        Dashboard
                                    </Link>
                                ) : (
                                    <>
                                        <Link
                                            href={route("login")}
                                            className="flex items-center gap-2 text-gray-700 hover:text-gray-900 font-semibold text-sm transition-colors p-2 rounded-full hover:bg-gray-50"
                                        >
                                            Log in
                                        </Link>
                                        <Link
                                            href={route("register")}
                                            className="hidden sm:flex items-center justify-center px-6 py-2 bg-gray-900 text-white text-sm font-semibold rounded-full hover:bg-gray-800 hover:shadow-lg transition-all transform hover:-translate-y-0.5"
                                        >
                                            Register
                                        </Link>
                                    </>
                                )}

                                {/* Mobile Menu Toggle */}
                                <button className="md:hidden text-gray-500 hover:text-gray-900 transition-colors p-2 rounded-full hover:bg-gray-50">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </header>

                    {/* Spacer to prevent content from hiding behind the absolute/fixed header */}
                    <div className="h-20"></div>

                    <main className="mt-6">
                        <HeroSection />
                        <CallToAction />
                        <FeaturesSection />
                        <TestimonialCarousel />
                        <FAQ />
                    </main>

                    {/* <footer className="py-16 text-center text-sm text-black dark:text-white/70">
                        Laravel v{laravelVersion} (PHP v{phpVersion})
                    </footer> */}

                    <Footer />
                </div>
            </div>
        </>
    );
}
