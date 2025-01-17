import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import PhotographerLayout from '../Photographer/Layout/PhotographerLayout';

export default function index({ auth }) {

    const Layout = auth.role === "photographer" ? PhotographerLayout : AuthenticatedLayout;
    

    return (
        <Layout
            header={
                <h2 className="text-xl font-semibold text-center leading-tight text-gray-800">
                    Blog & Tips
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            Wellcome to Blog & Tips
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
