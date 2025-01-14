import { Head } from "@inertiajs/react";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";

export default function Dashboard() {
    return (
        <>
            <Head title="Admin Dashboard" />
            <div className="py-12">
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
