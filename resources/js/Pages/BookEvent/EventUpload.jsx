import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";

const initialForm = {
    event_name: "",
    address: "",
    start_date: "",
    end_date: "",
    start_time: "",
    end_time: "",
    rate: "",
    description: "",
    photo: null,
};

export default function UploadEvent() {
    const { data, setData, post, processing, errors, reset } = useForm(initialForm);

    const handleSubmit = (e) => {
        e.preventDefault();

        post(route("eventupload.store"), {
            forceFormData: true,
            onSuccess: () => reset(),
        });
    };

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold text-center leading-tight text-gray-800">
                    Upload Event
                </h2>
            }
        >
            <Head title="Upload Event" />

            <div className="max-w-4xl mx-auto p-6">
                <div className="mb-4 text-right">
                    <Link href={route("eventbook")} className="text-sm font-medium text-primary hover:underline">
                        See event listings
                    </Link>
                </div>

                <main className="border border-b-gray-200 bg-white rounded-lg shadow-lg p-6">
                    <h1 className="text-3xl font-bold mb-6 text-center">List a New Event</h1>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label htmlFor="event_name" className="block mb-2 text-sm font-medium text-gray-900">
                                Event Name
                            </label>
                            <input
                                type="text"
                                id="event_name"
                                value={data.event_name}
                                onChange={(e) => setData("event_name", e.target.value)}
                                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5"
                                required
                            />
                            {errors.event_name && <span className="text-red-600">{errors.event_name}</span>}
                        </div>

                        <div>
                            <label htmlFor="address" className="block mb-2 text-sm font-medium text-gray-900">
                                Location
                            </label>
                            <input
                                type="text"
                                id="address"
                                value={data.address}
                                onChange={(e) => setData("address", e.target.value)}
                                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5"
                                required
                            />
                            {errors.address && <span className="text-red-600">{errors.address}</span>}
                        </div>

                        <div className="grid gap-4 sm:grid-cols-2">
                            <div>
                                <label htmlFor="start_date" className="block mb-2 text-sm font-medium text-gray-900">
                                    Start Date
                                </label>
                                <input
                                    type="date"
                                    id="start_date"
                                    value={data.start_date}
                                    onChange={(e) => setData("start_date", e.target.value)}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5"
                                    required
                                />
                                {errors.start_date && <span className="text-red-600">{errors.start_date}</span>}
                            </div>

                            <div>
                                <label htmlFor="end_date" className="block mb-2 text-sm font-medium text-gray-900">
                                    End Date
                                </label>
                                <input
                                    type="date"
                                    id="end_date"
                                    value={data.end_date}
                                    onChange={(e) => setData("end_date", e.target.value)}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5"
                                    required
                                />
                                {errors.end_date && <span className="text-red-600">{errors.end_date}</span>}
                            </div>
                        </div>

                        <div className="grid gap-4 sm:grid-cols-2">
                            <div>
                                <label htmlFor="start_time" className="block mb-2 text-sm font-medium text-gray-900">
                                    Start Time
                                </label>
                                <input
                                    type="time"
                                    id="start_time"
                                    value={data.start_time}
                                    onChange={(e) => setData("start_time", e.target.value)}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5"
                                    required
                                />
                                {errors.start_time && <span className="text-red-600">{errors.start_time}</span>}
                            </div>

                            <div>
                                <label htmlFor="end_time" className="block mb-2 text-sm font-medium text-gray-900">
                                    End Time
                                </label>
                                <input
                                    type="time"
                                    id="end_time"
                                    value={data.end_time}
                                    onChange={(e) => setData("end_time", e.target.value)}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5"
                                    required
                                />
                                {errors.end_time && <span className="text-red-600">{errors.end_time}</span>}
                            </div>
                        </div>

                        <div>
                            <label htmlFor="rate" className="block mb-2 text-sm font-medium text-gray-900">
                                Rate (BDT/hour)
                            </label>
                            <input
                                type="number"
                                id="rate"
                                value={data.rate}
                                onChange={(e) => setData("rate", e.target.value)}
                                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5"
                                min="0"
                                required
                            />
                            {errors.rate && <span className="text-red-600">{errors.rate}</span>}
                        </div>

                        <div>
                            <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900">
                                Description
                            </label>
                            <textarea
                                id="description"
                                rows="4"
                                value={data.description}
                                onChange={(e) => setData("description", e.target.value)}
                                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5"
                            />
                            {errors.description && <span className="text-red-600">{errors.description}</span>}
                        </div>

                        <div>
                            <label htmlFor="photo" className="block mb-2 text-sm font-medium text-gray-900">
                                Upload photo (optional)
                            </label>
                            <input
                                type="file"
                                id="photo"
                                accept="image/*"
                                onChange={(e) => setData("photo", e.target.files[0])}
                                className="bg-gray-50 border border-gray-300 rounded-lg block w-full"
                            />
                            {errors.photo && <span className="text-red-600">{errors.photo}</span>}
                        </div>

                        <div className="text-center">
                            <button
                                type="submit"
                                disabled={processing}
                                className="bg-[#FF3300] text-white px-6 py-2 rounded-lg shadow hover:bg-[#1F1F1F] disabled:opacity-50"
                            >
                                {processing ? "Uploading..." : "Upload Event"}
                            </button>
                        </div>
                    </form>
                </main>
            </div>
        </AuthenticatedLayout>
    );
}
