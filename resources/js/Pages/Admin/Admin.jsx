import { Head, Link, router } from "@inertiajs/react";
import AdminLayout from "./Layout/AdminLayout";
import { useState } from "react";
import Pagination from "@/Components/Pagination";
import TextInput from "@/Components/TextInput";
import SelectInput from "@/Components/SelectInput";

export default function Users({ auth, admins, queryParams = null }) {
    // Initialize the full user object, not just user.data
    const [users, setUsers] = useState(admins);

    queryParams = queryParams || {};


    // console.log(users);
    

    // Search Field Change
    const searchFieldChange = (name, value) => {
        if (value) {
            queryParams[name] = value;
        } else {
            delete queryParams[name];
        }

        router.get(route("admin.admins", queryParams));
    };

    // On Key Press
    const onKeyPress = (name, e) => {
        if (e.key !== "Enter") {
            return;
        }

        searchFieldChange(name, e.target.value);
    };

    return (
        <AdminLayout
            header={
                <h2 className="text-2xl font-bold text-gray-800">
                    Manage Users
                </h2>
            }
        >
            <Head title="Manage Users" />

            <div className=" bg-gray-50 p-8 rounded-lg w-full">
                <h1 className="text-3xl font-bold text-gray-900 mb-4">
                    User Management
                </h1>

                <div className="flex items-center justify-between mb-4">
                    <TextInput
                        className="bg-white text-gray-800 border border-gray-300 rounded-full py-3 px-6 w-1/3 shadow-sm focus:ring-2 focus:ring-blue-500"
                        placeholder="Search Users..."
                        defaultValue={queryParams.name}
                        onBlur={(e) =>
                            searchFieldChange("name", e.target.value)
                        }
                        onKeyPress={(e) => onKeyPress("name", e)}
                    />
                </div>

                        {/* <pre>{JSON.stringify(users, undefined, 2)}</pre> */}
                <div className="bg-white rounded-lg shadow p-4">
                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse border border-gray-200">
                            <thead>
                                <tr className="bg-gray-100 text-gray-600">
                                    <th className="border border-gray-200 px-6 py-3 text-left font-semibold">
                                        #
                                    </th>
                                    <th className="border border-gray-200 px-6 py-3 text-left font-semibold">
                                        Name
                                    </th>
                                    <th className="border border-gray-200 px-6 py-3 text-left font-semibold">
                                        Email
                                    </th>
                                    <th className="border border-gray-200 px-6 py-3 text-center font-semibold">
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.data.map((user, index) => (
                                    <tr
                                        key={user.id}
                                        className="hover:bg-gray-50 transition duration-150"
                                    >
                                        <td className="border border-gray-200 px-6 py-4 text-center text-gray-800">
                                            {users.from + index}
                                        </td>
                                        <td className="border border-gray-200 px-6 py-4 text-gray-800">
                                            {user.name}
                                        </td>
                                        <td className="border border-gray-200 px-6 py-4 text-gray-800">
                                            {user.email}
                                        </td>
                                        
                                        <td className="border border-gray-200 px-6 py-4 text-center">
                                            <Link 
                                                href={route("admin.users.delete", user.id)} 
                                                method="delete" 
                                                as="button"
                                            className="bg-red-500 text-white px-4 py-2 rounded-lg shadow hover:bg-red-600 transition ml-3">
                                                Delete
                                            </Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Pagination Component */}
                    <div className="mt-4 flex justify-center">
                        <Pagination links={users.links} />
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}
