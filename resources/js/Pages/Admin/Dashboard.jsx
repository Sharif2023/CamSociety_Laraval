import { Head, router } from "@inertiajs/react";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import Sidebar from "./Components/Sidebar";
import { useEffect } from "react";

export default function Dashboard({ auth }) {
    useEffect(() => {
        if (auth.is_active === false) {
            router.get(route("admin.notactive"));
        }
    }, [auth.is_active]);

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
