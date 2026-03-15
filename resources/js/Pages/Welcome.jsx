import { Head } from "@inertiajs/react";
import GuestLayout from "@/Layouts/GuestLayout";
import HeroSection from "../Components/HeroSection";
import FeaturesSection from "../Components/FeaturesSection";
import CallToAction from "../Components/CallToAction";
import TestimonialCarousel from "@/Components/TestimonialCarousel";
import FAQ from "@/Components/FAQ";

export default function Welcome({ auth }) {
    return (
        <GuestLayout>
            <Head title="Welcome to CamSociety" />

            <main className="relative">
                {/* Background Blobs */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[100vh] opacity-30 pointer-events-none overflow-hidden">
                    <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#FF3300] rounded-full blur-[150px] animate-pulse"></div>
                    <div className="absolute bottom-[20%] right-[-5%] w-[400px] h-[400px] bg-indigo-600 rounded-full blur-[150px]"></div>
                </div>

                <div className="relative z-10">
                    <HeroSection />
                    <div className="h-24 bg-gradient-to-b from-transparent to-black/50"></div>
                    <FeaturesSection />
                    <CallToAction />
                    <TestimonialCarousel />
                    <FAQ />
                </div>
            </main>
        </GuestLayout>
    );
}
