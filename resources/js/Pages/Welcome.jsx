import { Head, Link } from "@inertiajs/react";
import HeroSection from "../Components/HeroSection";
import FeaturesSection from "../Components/FeaturesSection";
import CallToAction from "../Components/CallToAction";
import TestimonialCarousel from "@/Components/TestimonialCarousel";
import Footer from "@/Components/Footer";

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
                    <header class="bg-[#F8E9E7]">
                        <div class="container mx-auto flex justify-between items-center py-4">
                            <div class="flex items-center gap-3">
                                <img
                                    src="https://placehold.co/40x40"
                                    alt="CamSocity Logo"
                                    class="h-10 w-10"
                                />
                                <span class="text-lg">
                                    <p class="font-semibold">CamSocity</p>Your
                                    Photography Hub
                                </span>
                            </div>
                            <nav class="hidden md:flex items-center gap-8">
                                <a
                                    href="#"
                                    class="text-gray-700 hover:text-gray-900"
                                >
                                    Home
                                </a>
                                <a
                                    href="#"
                                    class="text-gray-700 hover:text-gray-900"
                                >
                                    About
                                </a>
                                <a
                                    href="#"
                                    class="text-gray-700 hover:text-gray-900"
                                >
                                    Services
                                </a>
                                <a
                                    href="#"
                                    class="text-gray-700 hover:text-gray-900"
                                >
                                    Contact
                                </a>
                            </nav>

                            <div className="flex items-center gap-4">
                                {auth.user ? (
                                    <Link
                                        href={route("dashboard")}
                                        className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                    >
                                        Dashboard
                                    </Link>
                                ) : (
                                    <>
                                        <Link
                                            href={route("login")}
                                            className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                        >
                                            Log in
                                        </Link>
                                        <Link
                                            href={route("register")}
                                            className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                        >
                                            Register
                                        </Link>
                                    </>
                                )}
                            </div>
                        </div>
                    </header>

                    <main className="mt-6">
                        <HeroSection />
                        <CallToAction />
                        <FeaturesSection />
                        <TestimonialCarousel />
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
