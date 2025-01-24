import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";

export default function Dashboard({ auth, flash }) {
    const user = auth.user;

    useEffect(() => {
        if (flash.message.success) {
            toast.success(flash.message.success);
        }
        if (flash.message.error) {
            toast.error(flash.message.error);
        }
    }, [flash]);

    return (
        <AuthenticatedLayout
        // header={
        //     <h2 className="text-xl font-semibold leading-tight text-gray-800">
        //         Dashboard
        //     </h2>
        // }
        >
            <Head title="Dashboard" />
            <ToastContainer />

            <div className="py-12">
                <div className="container mx-auto p-6">
                    <section className="bg-white p-6 rounded-lg shadow-md flex items-center justify-between">
                        <div className="flex items-center space-x-6">
                        <img
                            src={
                                user.profile_picture
                                    ? user.profile_picture
                                    : "https://picsum.photos/200/300"
                            }
                            alt="Profile"
                            className="w-64 h-64 rounded-full shadow-md"
                        />
                        <div>
                            <h2 className="text-2xl font-bold text-gray-800">
                                {user.name}
                            </h2>
                            <p className="text-gray-600 mt-2">
                                {user.bio ? user.bio : "No bio available"}
                            </p>
                            <p className="text-sm text-gray-500 mt-1">
                                Email: {user.email}
                                {/* <pre>{JSON.stringify(user, undefined, 2)}</pre> */}
                            </p>
                            <p className="text-sm text-gray-500 mt-1">
                                {/* format date and time */}
                                Last Profile Update:{" "}
                                {new Date(user.updated_at).toLocaleString()}
                            </p>
                        </div>
                        </div>


                        <div className="flex items-center space-x-4">
                            <a
                                href={route("profile.edit")}
                                className="py-2 px-4 bg-blue-500 text-white rounded-md font-bold hover:bg-blue-700"
                            >
                                Edit Profile
                            </a>
                        </div>
                    </section>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
