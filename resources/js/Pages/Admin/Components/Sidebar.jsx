import NavLink from "@/Components/NavLink";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import { Link } from "@inertiajs/react";
import React from "react";

const Sidebar = () => {
    return (
        <div className="fixed bg-gray-800 text-gray-100 w-1/6 flex flex-col h-full">
            <div className="flex items-center justify-center h-16 bg-gray-900">
                <h1 className="text-xl font-bold">CAMSOCIETY</h1>
            </div>
            <nav class="grid px-4 py-4 gap-4">
                    <NavLink
                        href={route("admin.dashboard")}
                        active={route().current("admin.dashboard")}
                        className=" py-2 text-white rounded hover:bg-gray-600 hover:text-white"
                    >
                        Dashboard
                    </NavLink>
                
                    <NavLink
                        href={route("admin.users")}
                        active={route().current("admin.users")}
                        className=" py-2 text-white rounded hover:bg-gray-600 hover:text-white"
                    >
                        Users
                    </NavLink>
                    <NavLink
                        href={route("admin.admins")}
                        active={route().current("admin.admins")}
                        className=" py-2 text-white rounded hover:bg-gray-600 hover:text-white"
                    >
                        Admins
                    </NavLink>
            </nav>

            <div class="absolute bottom-0 flex w-full justify-center items-end">
                <ul className=" px-4 py-2  space-y-2">
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
        </div>
    );
};

export default Sidebar;
