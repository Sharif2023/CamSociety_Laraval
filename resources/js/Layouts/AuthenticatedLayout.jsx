import ApplicationLogo from "@/Components/ApplicationLogo";
import Dropdown from "@/Components/Dropdown";
import Footer from "@/Components/Footer";
import NavLink from "@/Components/NavLink";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import { Link, usePage } from "@inertiajs/react";
import { useState, useEffect } from "react";

export default function AuthenticatedLayout({ header, children }) {
    const user = usePage().props.auth.user;
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="min-h-screen bg-[#050505] font-['Outfit'] text-white selection:bg-[#FF3300] selection:text-white">
            {/* Premium Glassmorphism Navbar */}
            <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? "bg-black/80 backdrop-blur-xl border-b border-white/10 py-3" : "bg-transparent py-5"}`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
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

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-8">
                            {[
                                { 
                                    name: "Dashboard", 
                                    href: user.role === 1 ? route("photographer.dashboard") : route("dashboard"), 
                                    active: route().current("dashboard") || route().current("photographer.dashboard") 
                                },
                                { name: "Market", href: route("photomarket"), active: route().current("photomarket") },
                                { name: "Events", href: route("eventbook"), active: route().current("eventbook") },
                                { name: "Journal", href: route("blogsntips"), active: route().current("blogsntips") },
                                { 
                                    name: "Hire", 
                                    href: route("hirephotographer"), 
                                    active: route().current("hirephotographer"),
                                    show: user.role === 0 // Only users hire photographers
                                },
                            ].filter(item => item.show !== false).map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={`relative px-1 py-2 text-sm font-medium transition-colors duration-300 ${item.active ? "text-[#FF3300]" : "text-gray-400 hover:text-white"}`}
                                >
                                    {item.name}
                                    {item.active && (
                                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#FF3300] rounded-full shadow-[0_0_10px_#FF3300]"></span>
                                    )}
                                </Link>
                            ))}
                        </div>

                        <div className="flex items-center gap-6">
                            {/* Cart Icon */}
                            <Link href={route("cart.index")} className="relative p-2 text-gray-400 hover:text-[#FF3300] transition-colors group">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                                </svg>
                                <span className="absolute -top-1 -right-1 h-4 w-4 bg-[#FF3300] text-[10px] font-bold flex items-center justify-center rounded-full border-2 border-black">0</span>
                            </Link>

                            {/* User Dropdown */}
                            <div className="hidden sm:flex items-center">
                                <Dropdown>
                                    <Dropdown.Trigger>
                                        <button className="flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300">
                                            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-[#FF3300] to-[#992200] p-[2px]">
                                                <div className="h-full w-full rounded-full bg-black flex items-center justify-center text-xs font-bold">
                                                    {user.name.charAt(0)}
                                                </div>
                                            </div>
                                            <span className="text-sm font-medium">{user.name}</span>
                                            <svg className="h-4 w-4 opacity-50" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </button>
                                    </Dropdown.Trigger>
                                    <Dropdown.Content contentClasses="py-1 bg-[#1A1A1A] border border-white/10 ring-1 ring-black ring-opacity-5">
                                        <Dropdown.Link href={route("profile.edit")} className="text-gray-300 hover:bg-white/5 transition-colors">Profile Settings</Dropdown.Link>
                                        <Dropdown.Link href={route("logout")} method="post" as="button" className="text-gray-300 hover:bg-white/5 transition-colors">Sign Out</Dropdown.Link>
                                    </Dropdown.Content>
                                </Dropdown>
                            </div>

                            {/* Mobile Menu Button */}
                            <div className="flex items-center sm:hidden">
                                <button
                                    onClick={() => setShowingNavigationDropdown(!showingNavigationDropdown)}
                                    className="p-2 rounded-lg bg-white/5 border border-white/10 text-gray-400 hover:text-white"
                                >
                                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={showingNavigationDropdown ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile Navigation */}
                <div className={`${showingNavigationDropdown ? "block" : "hidden"} sm:hidden bg-black/95 backdrop-blur-2xl border-b border-white/10 overflow-hidden transition-all duration-300`}>
                    <div className="px-4 pt-2 pb-6 space-y-1">
                        {[
                            { name: "Dashboard", href: route("dashboard") },
                            { name: "Photo Market", href: route("photomarket") },
                            { name: "Book Event", href: route("eventbook") },
                            { name: "Blog & Tips", href: route("blogsntips") },
                        ].map((item) => (
                            <ResponsiveNavLink key={item.name} href={item.href} active={route().current(item.href)} className="text-lg py-4 border-none hover:bg-white/5 rounded-xl">
                                {item.name}
                            </ResponsiveNavLink>
                        ))}
                    </div>
                    <div className="px-4 py-6 border-t border-white/10">
                        <div className="flex items-center gap-4 px-3 mb-6">
                            <div className="h-12 w-12 rounded-full bg-gradient-to-br from-[#FF3300] to-[#992200] flex items-center justify-center font-bold text-lg">
                                {user.name.charAt(0)}
                            </div>
                            <div>
                                <div className="text-base font-bold text-white">{user.name}</div>
                                <div className="text-sm font-medium text-gray-500">{user.email}</div>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <Link href={route("profile.edit")} className="flex items-center justify-center py-3 px-4 rounded-xl bg-white/5 border border-white/10 text-sm font-medium hover:bg-white/10 transition-colors">Profile</Link>
                            <Link href={route("logout")} method="post" as="button" className="flex items-center justify-center py-3 px-4 rounded-xl bg-[#FF3300]/10 border border-[#FF3300]/20 text-[#FF3300] text-sm font-medium hover:bg-[#FF3300]/20 transition-colors">Sign Out</Link>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Page Content */}
            <main className="pt-24 pb-12">
                {header && (
                    <header className="py-12 relative overflow-hidden">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                            <div className="text-center">
                                {typeof header === 'string' ? (
                                    <>
                                        <h1 className="text-4xl sm:text-6xl font-black tracking-tight font-['Playfair_Display'] mb-4 text-white">
                                            {header}
                                        </h1>
                                        <div className="h-1 w-24 bg-gradient-to-r from-[#FF3300] to-[#FF6600] mx-auto rounded-full shadow-[0_0_15px_rgba(255,51,0,0.5)]"></div>
                                    </>
                                ) : (
                                    <div className="space-y-4">
                                        {header}
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-20 pointer-events-none">
                            <div className="absolute top-10 left-1/4 w-64 h-64 bg-[#FF3300] rounded-full blur-[120px]"></div>
                            <div className="absolute bottom-10 right-1/4 w-64 h-64 bg-indigo-600 rounded-full blur-[120px]"></div>
                        </div>
                    </header>
                )}

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="relative animate-in fade-in slide-in-from-bottom-5 duration-700">
                        {children}
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
