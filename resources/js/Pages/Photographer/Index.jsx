import { Head } from '@inertiajs/react';
import PhotographerLayout from './Layout/PhotographerLayout';

export default function Dashboard() {
    return (
        <PhotographerLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Photographer Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            Photographer!
                        </div>
                    </div>
                </div>
            </div>
        </PhotographerLayout>
    );
}
