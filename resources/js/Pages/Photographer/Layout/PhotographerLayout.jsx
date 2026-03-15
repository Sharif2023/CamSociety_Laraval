import ApplicationLogo from "@/Components/ApplicationLogo";
import Dropdown from "@/Components/Dropdown";
import Footer from "@/Components/Footer";
import NavLink from "@/Components/NavLink";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import { Link, usePage } from "@inertiajs/react";
import { useState, useEffect } from "react";

export default function PhotographerLayout({ header, children }) {
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
                                { name: "Studio", href: route("photographer.dashboard"), active: route().current("photographer.dashboard") },
                                { name: "Market", href: route("photomarket"), active: route().current("photomarket") },
                                { name: "Events", href: route("eventbook"), active: route().current("eventbook") },
                                { name: "Journal", href: route("blogsntips"), active: route().current("blogsntips") },
                            ].map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={`relative px-1 py-2 text-sm font-medium transition-colors duration-300 ${item.active ? "text-[#FF3300]" : "text-gray-400 hover:text-white"}`}
                                >
                                    {item.name}
                                    <span className={`absolute bottom-0 left-0 h-0.5 bg-[#FF3300] rounded-full shadow-[0_0_10px_#FF3300] transition-all duration-300 ${item.active ? "w-full" : "w-0 group-hover:w-full"}`}></span>
                                </Link>
                            ))}
                        </div>

                        <div className="flex items-center gap-6">
                            {/* Vault Icon (Cart) */}
                             <Link href={route("cart.index")} className="relative p-2 text-gray-400 hover:text-[#FF3300] transition-colors group">
                                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                     <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                                 </svg>
                                 <span className="absolute -top-1 -right-1 h-4 w-4 bg-[#FF3300] text-[10px] font-bold flex items-center justify-center rounded-full border-2 border-black shadow-[0_0_10px_rgba(255,51,0,0.5)]">0</span>
                             </Link>

                            {/* Session Dropdown */}
                            <div className="hidden sm:flex items-center">
                                <Dropdown>
                                    <Dropdown.Trigger>
                                        <button className="flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300">
                                            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-[#FF3300] to-[#992200] p-[2px]">
                                                <div className="h-full w-full rounded-full bg-black flex items-center justify-center text-xs font-bold">
                                                    {user?.name?.charAt(0) || 'U'}
                                                </div>
                                            </div>
                                            <div className="text-left hidden lg:block">
                                                <div className="text-sm font-black text-white leading-tight">{user?.name || 'Photographer'}</div>
                                                <div className="text-[9px] font-black uppercase tracking-widest text-[#FF3300]">Certified Visionary</div>
                                            </div>
                                            <span className="text-sm font-medium lg:hidden">{user?.name || 'Photographer'}</span>
                                            <svg className="h-4 w-4 opacity-50" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </button>
                                    </Dropdown.Trigger>
                                    <Dropdown.Content contentClasses="py-2 bg-[#0A0A0A] border border-white/10 backdrop-blur-3xl shadow-2xl">
                                        <Dropdown.Link href={route("profile.edit")} className="text-gray-400 hover:text-white hover:bg-white/5 transition-all text-xs font-bold uppercase tracking-widest px-6 py-3">Profile Settings</Dropdown.Link>
                                        <Dropdown.Link href={route("logout")} method="post" as="button" className="text-gray-400 hover:text-[#FF3300] hover:bg-[#FF3300]/5 transition-all text-xs font-bold uppercase tracking-widest px-6 py-3 border-t border-white/5">Terminate Session</Dropdown.Link>
                                    </Dropdown.Content>
                                </Dropdown>
                            </div>

                            {/* Mobile Toggle */}
                            <div className="md:hidden flex items-center">
                                <button
                                    onClick={() => setShowingNavigationDropdown(!showingNavigationDropdown)}
                                    className="p-3 rounded-2xl bg-white/5 border border-white/10 text-[#FF3300] hover:bg-[#FF3300] hover:text-white transition-all"
                                >
                                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d={showingNavigationDropdown ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile Vault */}
                <div className={`${showingNavigationDropdown ? "max-h-screen translate-y-0" : "max-h-0 -translate-y-10"} md:hidden bg-black/98 backdrop-blur-3xl border-b border-white/10 overflow-hidden transition-all duration-700 ease-in-out`}>
                    <div className="px-6 py-12 space-y-6">
                        {[
                            { name: "My Studio", href: route("photographer.dashboard") },
                            { name: "Global Market", href: route("photomarket") },
                            { name: "Open Gigs", href: route("eventbook") },
                            { name: "Journal", href: route("blogsntips") },
                        ].map((item) => (
                            <Link 
                                key={item.name} 
                                href={item.href} 
                                className="block text-2xl font-black text-gray-500 hover:text-white transition-colors"
                                onClick={() => setShowingNavigationDropdown(false)}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <div className="pt-10 border-t border-white/10">
                            <div className="flex items-center gap-4 px-3 mb-8">
                                <div className="h-14 w-14 rounded-full bg-gradient-to-br from-[#FF3300] to-indigo-600 p-[2px]">
                                    <div className="h-full w-full rounded-full bg-black flex items-center justify-center overflow-hidden">
                                        <img src={user.profile_picture || `https://i.pravatar.cc/100?u=${user.id}`} className="w-full h-full object-cover opacity-80" />
                                    </div>
                                </div>
                                <div>
                                    <div className="text-lg font-black text-white">{user.name}</div>
                                    <div className="text-[10px] font-black uppercase tracking-[0.2em] text-[#FF3300]">Certified Visionary</div>
                                    <div className="text-[10px] font-medium text-gray-500 uppercase tracking-tighter mt-1">{user.email}</div>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <Link href={route("profile.edit")} className="flex items-center justify-center py-4 px-4 rounded-2xl bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest hover:bg-white/10 transition-colors">Settings</Link>
                                <Link href={route("logout")} method="post" as="button" className="flex items-center justify-center py-4 px-4 rounded-2xl bg-[#FF3300]/10 border border-[#FF3300]/20 text-[#FF3300] text-xs font-black uppercase tracking-widest hover:bg-[#FF3300]/20 transition-colors">Sign Out</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Page Execution Area */}
            <main className="pt-24 min-h-screen flex flex-col">
                {header && (
                    <header className="py-20 relative overflow-hidden flex-shrink-0">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-10 pointer-events-none">
                            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-indigo-600 rounded-full blur-[150px]"></div>
                        </div>
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                            <div className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-black uppercase tracking-[0.3em] text-[#FF3300] mb-6">
                                Professional Workspace
                            </div>
                            <h1 className="text-5xl sm:text-7xl font-black tracking-tighter font-['Playfair_Display'] mb-6 text-white leading-none">
                                {header}
                            </h1>
                            <div className="h-1.5 w-32 bg-[#FF3300] mx-auto rounded-full shadow-[0_0_30px_#FF3300]"></div>
                        </div>
                    </header>
                )}

                <div className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    {children}
                </div>
                
                <Footer />
            </main>
        </div>
    );
}
