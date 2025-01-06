import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function Index() {

    const photographers = [
        {
            name: "John Doe",
            profession: "Wedding Photographer",
            location: "New York, USA",
            rating: "4.8/5 (25 reviews)",
            image: "https://picsum.photos/200?random=1",
        },
        {
            name: "Jane Doe",
            profession: "Event Photographer",
            location: "Los Angeles, USA",
            rating: "4.5/5 (20 reviews)",
            image: "https://picsum.photos/200?random=2",
        },
        {
            name: "John Smith",
            profession: "Portrait Photographer",
            location: "Chicago, USA",
            rating: "4.7/5 (30 reviews)",
            image: "https://picsum.photos/200?random=3",
        },
        {
            name: "Jane Smith",
            profession: "Fashion Photographer",
            location: "Miami, USA",
            rating: "4.6/5 (22 reviews)",
            image: "https://picsum.photos/200?random=4",
        },
        {
            name: "John Doe",
            profession: "Wedding Photographer",
            location: "New York, USA",
            rating: "4.8/5 (25 reviews)",
            image: "https://picsum.photos/200?random=5",
        },
        {
            name: "Jane Doe",
            profession: "Event Photographer",
            location: "Los Angeles, USA",
            rating: "4.5/5 (20 reviews)",
            image: "https://picsum.photos/200?random=6",
        },
        {
            name: "John Smith",
            profession: "Portrait Photographer",
            location: "Chicago, USA",
            rating: "4.7/5 (30 reviews)",
            image: "https://picsum.photos/200?random=7",
        },
        {
            name: "Jane Smith",
            profession: "Fashion Photographer",
            location: "Miami, USA",
            rating: "4.6/5 (22 reviews)",
            image: "https://picsum.photos/200?random=8",
        },
    ];
    
    


    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl text-center font-semibold leading-tight text-gray-800">
                    Hire Photographer
                </h2>
            }
        >
            <Head title="Hire Photographer" />

            <div className="py-4">
                <form class="flex items-center max-w-lg mx-auto py-5 ">
                    <label for="voice-search" class="sr-only">
                        Search
                    </label>
                    <div class="relative w-full">
                        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="size-5"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                                />
                            </svg>
                        </div>
                        <input
                            type="text"
                            id="voice-search"
                            class="bg-[#e5e7eb] border border-[#FF3300] text-black text-sm rounded-lg focus:ring-[#FF3300] focus:border-[#FF3300] block w-full ps-10 p-2.5"
                            placeholder="Search photographers"
                            required
                        />
                        <button
                            type="button"
                            class="absolute inset-y-0 end-0 flex items-center pe-3"
                        >
                            <svg
                                class="w-4 h-4 text-[#FF3300] dark:text-[#FF3300] hover:text-white dark:hover:text-white"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 16 20"
                            >
                                <path
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M15 7v3a5.006 5.006 0 0 1-5 5H6a5.006 5.006 0 0 1-5-5V7m7 9v3m-3 0h6M7 1h2a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V4a3 3 0 0 1 3-3Z"
                                />
                            </svg>
                        </button>
                    </div>
                    <button
                        type="submit"
                        class="inline-flex items-center py-2.5 px-3 ms-2 text-sm font-medium text-white bg-[#FF3300] rounded-lg border border-[#FF3300] hover:bg-[#1F1F1F] focus:ring-4 focus:outline-none focus:ring-[#FF3300] dark:bg-[#FF3300] dark:hover:bg-[#1F1F1F] dark:focus:ring-[#FF3300]"
                    >
                        <svg
                            class="w-4 h-4 me-2"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 20 20"
                        >
                            <path
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                            />
                        </svg>
                        Search
                    </button>
                </form>


                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {photographers.map((photographer, index) => (
                        <div
                            key={index}
                            className="overflow-hidden bg-white rounded-lg p-5 text-center shadow-sm sm:rounded-lg"
                        >
                            <img
                                src={photographer.image}
                                alt={photographer.name}
                                class="w-32 h-32 rounded-full mx-auto mb-4"
                            />
                            <div className="p-6 text-gray-900">
                                <h3 className="text-lg font-bold leading-tight text-gray-800">
                                    {photographer.name}
                                </h3>
                                <p className="text-sm text-gray-600">
                                    {photographer.profession}
                                </p>
                                <p className="text-sm text-gray-600">
                                    {photographer.location}
                                </p>
                                <p className="text-sm text-yellow-500 font-bold">
                                    {photographer.rating}
                                </p>
                                <button class="bg-[#1F1F1F] text-white mt-4 px-4 py-2 rounded hover:bg-[#FF3300]">Hire Me</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
