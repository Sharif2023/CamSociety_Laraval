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
                    <header class="bg-matte-black">
                        <div class="container mx-auto flex justify-between items-center py-4">
                            <div class="flex items-center gap-3">
                                <img
                                    src="/images/camSociety_logo.jpg"
                                    alt="Camsociety Logo"
                                    class="h-10 w-10 rounded-full object-cover"
                                />
                                <span class="text-lg text-white">
                                    <p class="font-semibold">Camsociety</p>Your
                                    Photography Hub
                                </span>
                            </div>
                            <nav class="hidden md:flex items-center gap-8">
                                <a
                                    href="#"
                                    class="text-white text-base font-medium hover:text-primary"
                                >
                                    Home
                                </a>
                                <a
                                    href="#"
                                    class="text-white text-base font-medium hover:text-primary"
                                >
                                    About
                                </a>
                                <a
                                    href="#"
                                    class="text-white text-base font-medium hover:text-primary"
                                >
                                    Services
                                </a>
                                <a
                                    href="#"
                                    class="text-white text-base font-medium hover:text-primary"
                                >
                                    Contact
                                </a>
                            </nav>

                            <div className="flex items-center gap-4">
                                {auth.user ? (
                                    <Link
                                        href={route("dashboard")}
                                        className="rounded-md px-3 py-2 text-white text-base font-medium ring-1 ring-transparent transition hover:text-primary focus:outline-none"
                                    >
                                        Dashboard
                                    </Link>
                                ) : (
                                    <>
                                        <Link
                                            href={route("login")}
                                            className="rounded-md px-3 py-2 text-white text-base font-medium ring-1 ring-transparent transition hover:text-primary focus:outline-none"
                                        >
                                            Log in
                                        </Link>
                                        <Link
                                            href={route("register")}
                                            className="rounded-md px-4 py-2 bg-primary text-white text-base font-medium transition hover:bg-dark focus:outline-none"
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
