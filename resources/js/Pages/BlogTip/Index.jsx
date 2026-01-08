import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import PhotographerLayout from "../Photographer/Layout/PhotographerLayout";
import { useState } from "react";

export default function BlogAndTips({ auth }) {
  const [activeModal, setActiveModal] = useState(null);

  const openModal = (modalId) => setActiveModal(modalId);
  const closeModal = () => setActiveModal(null);

  const posts = [
    {
      id: 1,
      title: "Top Tips for Wedding Photography",
      description: "Discover how to capture unforgettable wedding moments with these practical tips...",
      image: "photos/blogandtipspost1.png",
      author: "John Doe",
      modalContent: {
        title: "Top Tips for Wedding Photography",
        image: "photos/blogandtipspost1.png",
        content: (
          <>
            <p>Wedding photography is all about capturing timeless moments. Here are some practical tips to help you get the best shots:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 mt-4">
              <li>Understand the event schedule to be ready for key moments.</li>
              <li>Use natural light whenever possible to create soft and flattering images.</li>
              <li>Focus on capturing candid moments, not just posed ones.</li>
              <li>Experiment with different angles for creative shots.</li>
              <li>Always keep a backup camera and batteries to avoid technical issues.</li>
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
            <ul className="list-disc pl-6 space-y-2 text-gray-600 mt-4">
              <li>Use the golden hour for soft and warm light.</li>
              <li>Experiment with bokeh by using a wide aperture.</li>
              <li>Consider your background to enhance the subject.</li>
              <li>Capture candid moments to convey emotions.</li>
              <li>Make use of natural surroundings for a more dynamic composition.</li>
            </ul>
          </>
        ),
        likes: 8,
      },
    },
    {
      id: 3,
      title: "How to Choose the Right Lens",
      description: "Choosing the right lens is crucial for portrait photography. Here's a guide...",
      image: "https://picsum.photos/400/200",
      author: "Emily White",
      modalContent: {
        title: "How to Choose the Right Lens for Portraits",
        image: "https://picsum.photos/400/200",
        content: (
          <>
            <p>Choosing the right lens is crucial for portrait photography. Here's a guide to selecting the perfect lens:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 mt-4">
              <li>50mm lenses are great for beginners and offer natural perspective.</li>
              <li>85mm lenses provide beautiful bokeh and are ideal for portraits.</li>
              <li>35mm lenses are perfect for environmental portraits.</li>
              <li>Consider aperture - f/1.4 or f/1.8 for better low-light performance.</li>
            </ul>
          </>
        ),
        likes: 15,
      },
    },
  ];

  const Layout = auth?.role === "photographer" ? PhotographerLayout : AuthenticatedLayout;

  return (
    <Layout>
      <Head title="Blog & Tips" />

      {/* Page Header */}
      <section className="bg-dark text-white py-8 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold">Blog & Tips</h1>
        <p className="mt-2 text-gray-300">
          Explore thoughts, tips, and advice from professional photographers.
        </p>
      </section>

      <section className="text-primary text-end pr-5 py-3">
        <a href="/photographer-blog-tips" className="hover:underline font-medium">
          Add Blog or Post as Photographer →
        </a>
      </section>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto p-6">
        <h2 className="text-2xl font-bold mb-6 text-dark">Recent Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 cursor-pointer"
              onClick={() => openModal(post.id)}
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-dark">
                  {post.title}
                </h3>
                <p className="text-gray-600 mt-2 text-sm line-clamp-2">{post.description}</p>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-gray-500 text-sm">By {post.author}</span>
                  <span className="text-primary font-semibold text-sm">
                    Read More
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Modal */}
      {posts.map(
        (post) =>
          activeModal === post.id && (
            <div
              key={post.id}
              className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 p-4"
              onClick={closeModal}
            >
              <div
                className="relative bg-white rounded-lg shadow-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center justify-between p-5 border-b sticky top-0 bg-white">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {post.modalContent.title}
                  </h3>
                  <button
                    type="button"
                    className="text-gray-400 hover:text-gray-600 text-2xl"
                    onClick={closeModal}
                  >
                    ✕
                  </button>
                </div>
                <div className="p-6 space-y-4">
                  <img
                    src={post.modalContent.image}
                    alt={post.modalContent.title}
                    className="w-full h-60 object-cover rounded-lg"
                  />
                  <div className="text-gray-700">
                    {post.modalContent.content}
                  </div>
                </div>
                <div className="flex items-center justify-between p-5 border-t">
                  {/* Like Button */}
                  <div className="cursor-pointer flex items-center space-x-2 rounded-full text-gray-400 hover:text-primary border border-gray-300 hover:border-primary py-1 px-3 transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
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
                    <span className="font-medium text-sm">{post.modalContent.likes}</span>
                  </div>
                  {/* Close Button */}
                  <button
                    onClick={closeModal}
                    className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-dark font-semibold transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          )
      )}
    </Layout>
  );
}
