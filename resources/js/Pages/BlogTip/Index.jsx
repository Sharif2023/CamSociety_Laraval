import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import React, { useState } from "react";
import { useEffect } from "react";//db to front


const BlogAndTips = () => {
  const [activeModal, setActiveModal] = useState(null);

  const openModal = (modalId) => setActiveModal(modalId);
  const closeModal = () => setActiveModal(null);

  const posts = [
    {
      id: 1,
      title: "বিবাহের ফটোগ্রাফির জন্য শীর্ষ টিপস",
      description: "এই বাস্তব টিপসগুলির সাহায্যে কীভাবে অবিস্মরণীয় বিবাহের মুহূর্তগুলি ক্যাপচার করবেন তা আবিষ্কার করুন...",
      image: "photos/blogandtipspost1.png",
      author: "John Doe",
      modalContent: {
        title: "Top Tips for Wedding Photography",
        image: "photos/blogandtipspost1.png",
        content: (
          <>
            <p>বিবাহের ফটোগ্রাফি হল নিরবধি মুহূর্তগুলি ক্যাপচার করা। আপনাকে সেরা শট পেতে সাহায্য করার জন্য এখানে কিছু ব্যবহারিক টিপস রয়েছে:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>মূল মুহূর্তের জন্য প্রস্তুত হতে ইভেন্টের সময়সূচী বুঝে নিন।</li>
              <li>Soft and Flattering ছবি তৈরি করতে যখনই সম্ভব প্রাকৃতিক আলো ব্যবহার করুন।</li>
              <li>Candid মুহূর্তগুলি ক্যাপচার করার উপর ফোকাস করুন, শুধু পোজ করা নয়।</li>
              <li>সৃজনশীল শট জন্য বিভিন্ন কোণ সঙ্গে পরীক্ষা.</li>
              <li>প্রযুক্তিগত সমস্যা এড়াতে সর্বদা একটি ব্যাকআপ ক্যামেরা এবং ব্যাটারি রাখুন।</li>
            </ul>
          </>
        ),
        likes: 10,
      },
    },
    {
      id: 2,
      title: "5 Tricks for Outdoor Portraits",
      description: "Learn how to make the most of natural light to create stunning portraits...",
      image: "photos/blogandtipspost2.png",
      author: "Jane Smith",
      modalContent: {
        title: "5 Tricks for Outdoor Portraits",
        image: "photos/blogandtipspost2.png",
        content: (
          <>
            <p>Here are some tricks to take stunning outdoor portraits:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Use the golden hour for soft and warm light.</li>
              <li>Experiment with bokeh by using a wide aperture.</li>
              <li>Consider your background to enhance the subject.</li>
              <li>Capture candid moments to convey emotions.</li>
              <li>Make use of natural surroundings for a more dynamic composition.</li>
            </ul>
          </>
        ),
      },
    },
  ];

  //database to frontend
  const [blogNTips, setBlogNTips] = useState([]);
  const [selectedTip, setSelectedTip] = useState(null);

  useEffect(() => {
    fetch('/blogntips')
      .then((response) => response.json())
      .then((data) => setBlogNTips(data))
      .catch((error) => console.error("Error fetching blog tips:", error));
  }, []);

  const handleModalClose = () => setSelectedTip(null);
  const truncateWords = (text, wordLimit) => {
    const words = text.split(" ");
    return words.length > wordLimit ? `${words.slice(0, wordLimit).join(" ")}...` : text;
  };


  return (
    <AuthenticatedLayout>
      <Head title="Blog & Tips" />

      {/* Page Header */}
      <section className="bg-gray-600 text-white py-2 text-center">
        <h1 className="text-4xl font-bold">Blog & Tips</h1>
        <p className="mt-2 text-[#FAF0E6]">
          Explore thoughts, tips, and advice from professional photographers.
        </p>
      </section>
      <section className="underline text-[#FF3300] text-end pr-5">
        <a href="/photographer-blog-tips">Add Blog or Post as Photographer</a>
      </section>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto p-6 mt-6">
        <section>
          <h2 className="text-2xl font-bold mb-4 text-[#1F1F1F]">Recent Posts</h2>
          {/**database to front */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {blogNTips.map((tip) => (
              <div key={tip.id} className="bg-white shadow-lg rounded-lg p-4 transition-transform transform hover:scale-105">
                <img
                  src={tip.image ? `/storage/${tip.image}` : "https://via.placeholder.com/150"}
                  alt={tip.title}
                  className="w-full h-48 object-cover"
                />
                <h3 className="p-4 text-xl font-semibold text-[#1F1F1F]">
                  {truncateWords(tip.title, 5)}
                </h3>
                <p className="text-[#1F1F1F] mt-2">
                  {tip.content.substring(0, 100)}...
                </p>
                <div className="text-right">
                  <button
                    className="text-[#FF3300] font-semibold hover:underline"
                    onClick={() => setSelectedTip(tip)}
                  >
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/**Modal for DB to front */}
          {selectedTip && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
              <div className="relative bg-white rounded-lg shadow-lg w-11/12 md:w-3/4 lg:w-1/2 max-h-[80vh] overflow-y-auto p-5">
                <button
                  className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                  onClick={handleModalClose}
                >
                  &times;
                </button>
                <img
                  src={selectedTip.image ? `/storage/${selectedTip.image}` : "https://via.placeholder.com/150"}
                  alt={selectedTip.title}
                  className="w-full h-60 object-cover rounded-t-lg"
                />
                <h2 className="text-2xl font-bold mt-4">{selectedTip.title}</h2>
                <div className="text-gray-700 mt-2 space-y-2">
                  {selectedTip.content.split('\n').map((line, index) => (
                    <p key={index}>{line}</p>
                  ))}
                </div>
                {selectedTip && (
                  <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="relative p-5 bg-white rounded-lg shadow-lg w-11/12 md:w-3/4 lg:w-1/2 max-h-[80vh] overflow-y-auto">
                      <button
                        className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                        onClick={handleModalClose}
                      >
                        &times;
                      </button>
                      <img
                        src={selectedTip.image ? `/storage/${selectedTip.image}` : "https://via.placeholder.com/150"}
                        alt={selectedTip.title}
                        className="w-full h-60 object-cover rounded-t-lg"
                      />
                      <h2 className="text-2xl font-bold mt-4">{selectedTip.title}</h2>
                      <div className="text-gray-700 mt-2 space-y-2">
                        {selectedTip.content.split('\n').map((line, index) => (
                          <p key={index}>{line}</p>
                        ))}
                      </div>
                      <div className="flex items-center justify-between p-5 border-t">
                        {/* Hit Button */}
                        <div
                          className="cursor-pointer flex items-center space-x-1 rounded-full text-gray-400 hover:text-rose-600 border border-[#1F1F1F] bg-white hover:bg-rose-50 py-1 px-2 text-xl font-medium"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-7 w-7 fill-current hover:text-red-400"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                            />
                          </svg>
                          <p className="font-semibold text-xs">{selectedTip.likes}</p>
                        </div>
                        {/* Close Button */}
                        <button
                          onClick={handleModalClose}
                          className="bg-[#FF3300] text-white px-6 py-2 rounded-lg hover:bg-[#1F1F1F] font-semibold"
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </section>
      </main>
    </AuthenticatedLayout>
  );
};

export default BlogAndTips;
