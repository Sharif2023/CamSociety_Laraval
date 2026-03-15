import { Link, usePage } from "@inertiajs/react";
import Footer from "@/Components/Footer";
import { useState, useEffect } from "react";

export default function GuestLayout({ children, title }) {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="min-h-screen bg-[#050505] text-white font-['Outfit'] selection:bg-[#FF3300] selection:text-white overflow-hidden">
            {/* Premium Sticky Header */}
            <header className={`fixed w-full top-0 z-50 transition-all duration-500 ${scrolled ? "bg-black/80 backdrop-blur-xl border-b border-white/10 py-3" : "bg-transparent py-5"}`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
                    {/* Logo & Brand */}
                    <div className="flex items-center gap-4 group cursor-pointer">
                        <Link href="/" className="flex items-center gap-3">
                            <div className="relative">
                                <div className="absolute -inset-1 bg-gradient-to-r from-[#FF3300] to-[#FF6600] rounded-full blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                                <img src="/images/camSociety_logo.jpg" alt="Logo" className="relative h-12 w-12 rounded-full object-cover border-2 border-white/10" />
                            </div>
                            <div className="hidden sm:block">
                                <span className="text-2xl font-bold tracking-tight bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent font-['Playfair_Display']">CamSociety</span>
                                <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-medium">The Photography Elite</p>
                            </div>
                        </Link>
                    </div>

                    {/* Navigation */}
                    <nav className="hidden md:flex items-center gap-10">
                        {[
                            { name: "Home", href: "/" },
                            { name: "About", href: "/about" },
                            { name: "Services", href: "/services" },
                            { name: "Contact", href: "https://engineer-sharif.infinityfreeapp.com/#contact", external: true }
                        ].map((item) => (
                            item.external ? (
                                <a 
                                    key={item.name} 
                                    href={item.href} 
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm font-semibold transition-colors relative group py-2 text-gray-400 hover:text-white"
                                >
                                    {item.name}
                                    <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-[#FF3300] transition-all duration-300 group-hover:w-full group-hover:left-0 shadow-[0_0_10px_#FF3300]"></span>
                                </a>
                            ) : (
                                <Link 
                                    key={item.name} 
                                    href={item.href} 
                                    className={`text-sm font-semibold transition-colors relative group py-2 ${window.location.pathname === item.href ? 'text-white' : 'text-gray-400 hover:text-white'}`}
                                >
                                    {item.name}
                                    <span className={`absolute bottom-0 left-1/2 h-0.5 bg-[#FF3300] transition-all duration-300 group-hover:w-full group-hover:left-0 shadow-[0_0_10px_#FF3300] ${window.location.pathname === item.href ? 'w-full left-0' : 'w-0'}`}></span>
                                </Link>
                            )
                        ))}
                    </nav>

                    {/* Actions / Auth */}
                    <div className="flex items-center gap-6">
                        <Link
                            href={route("login")}
                            className="text-sm font-bold text-gray-300 hover:text-white transition-colors"
                        >
                            Log in
                        </Link>
                        <Link
                            href={route("register")}
                            className="px-8 py-3 bg-white text-black text-sm font-bold rounded-full hover:bg-gray-200 shadow-xl transition-all transform hover:-translate-y-1"
                        >
                            Join Society
                        </Link>
                    </div>
                </div>
            </header>

            <main className="relative">
                {children}
            </main>

            <Footer />
        </div>
    );
}
