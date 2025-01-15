// components/layouts/Sidebar.jsx
import React from "react";
import { Link } from "@inertiajs/inertia-react";

const Sidebar = () => {
    return (
        <div className="w-64 bg-white shadow-lg h-full flex flex-col">
            <div className="p-4 text-xl font-bold text-center text-blue-600 border-b">
                Admin Panel
            </div>
            <ul className="flex-1 p-4 space-y-2">
                <li>
                    <Link
                        to="/admin/dashboard"
                        className="block px-4 py-2 text-gray-700 rounded hover:bg-blue-100"
                    >
                        Dashboard
                    </Link>
                </li>
                <li>
                    <Link
                        to="/admin/users"
                        className="block px-4 py-2 text-gray-700 rounded hover:bg-blue-100"
                    >
                        Manage Users
                    </Link>
                </li>
                <li>
                    <Link
                        to="/admin/posts"
                        className="block px-4 py-2 text-gray-700 rounded hover:bg-blue-100"
                    >
                        Manage Posts
                    </Link>
                </li>
                <li>
                    <Link
                        to="/admin/settings"
                        className="block px-4 py-2 text-gray-700 rounded hover:bg-blue-100"
                    >
                        Settings
                    </Link>
                </li>
                <li>
                    <ResponsiveNavLink
                        method="post"
                        href={route("admin.logout")}
                        as="button"
                    >
                        Log Out
                    </ResponsiveNavLink>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
