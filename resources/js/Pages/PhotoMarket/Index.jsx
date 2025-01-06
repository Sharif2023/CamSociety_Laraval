import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function Index() {
    const products = [
        {
            name: "Photo 1",
            price: "$100",
            image: "https://picsum.photos/200?random=1",
        },
        {
            name: "Photo 2",
            price: "$200",
            image: "https://picsum.photos/200?random=2",
        },
        {
            name: "Photo 3",
            price: "$300",
            image: "https://picsum.photos/200?random=3",
        },
        {
            name: "Photo 4",
            price: "$400",
            image: "https://picsum.photos/200?random=4",
        },
        {
            name: "Photo 5",
            price: "$500",
            image: "https://picsum.photos/200?random=5",
        },
        {
            name: "Photo 6",
            price: "$600",
            image: "https://picsum.photos/200?random=6",
        },
        {
            name: "Photo 7",
            price: "$700",
            image: "https://picsum.photos/200?random=7",
        },
        {
            name: "Photo 8",
            price: "$800",
            image: "https://picsum.photos/200?random=8",
        },
    ];
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold text-center leading-tight text-gray-800">
                    Photo Market
                </h2>
            }
        >
            <Head title="Photo Market" />

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
                                    d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                                />
                            </svg>
                        </div>
                        <input
                            type="text"
                            id="voice-search"
                            class="bg-[#e5e7eb] border border-[#FF3300] text-black text-sm rounded-lg focus:ring-[#FF3300] focus:border-[#FF3300] block w-full ps-10 p-2.5"
                            placeholder="Search Photos"
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

                <div className="grid grid-cols-1 gap-4 px-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {products.map((product, index) => (
                        <div
                            key={index}
                            className="bg-white shadow-sm sm:rounded-lg"
                        >
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <h3 className="text-lg font-semibold">
                                    {product.name}
                                </h3>
                                <p className="text-gray-500">{product.price}</p>
                            </div>

                            <div className="p-4 flex justify-between gap-4">
                                <button
                                    type="button"
                                    className="w-1/2 py-2 text-sm font-semibold text-white bg-[#1F1F1F] rounded-lg hover:bg-[#FF3300] focus:ring-4 focus:outline-none focus:ring-[#FF3300] dark:bg-[#FF3300] dark:hover:bg-[#1F1F1F] dark:focus:ring-[#FF3300]"
                                >
                                    Add to Cart
                                </button>

                                <button
                                    type="button"
                                    className="w-1/2 py-2 text-sm font-semibold text-white bg-[#FF3300] rounded-lg hover:bg-[#1F1F1F] focus:ring-4 focus:outline-none focus:ring-[#FF3300] dark:bg-[#FF3300] dark:hover:bg-[#1F1F1F] dark:focus:ring-[#FF3300]"
                                >
                                    Buy Now
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
