import { Head, router } from "@inertiajs/react";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import Sidebar from "./Components/Sidebar";

export default function Dashboard({ auth }) {

    // if not active route to notActive page
    if (auth.is_active === 0) {
        router.get(route("admin.notactive"));
        
    }
    return (
        <>
            <Head title="Admin Dashboard" />
            <div >
                <Sidebar />
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            Dashboard will be here
                            <ResponsiveNavLink
                                method="post"
                                href={route("admin.logout")}
                                as="button"
                            >
                                Log Out
                            </ResponsiveNavLink>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
