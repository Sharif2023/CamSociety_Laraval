import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
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
          <div className="space-y-6 text-gray-400">
            <p className="text-lg leading-relaxed first-letter:text-5xl first-letter:font-black first-letter:text-[#FF3300] first-letter:mr-3 first-letter:float-left">
                Wedding photography is all about capturing timeless moments. It requires a blend of technical skill and emotional intuition to freeze those fleeting glances and grand celebrations into eternal masterpieces.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              {[
                  "Master the Event Schedule",
                  "Leverage Pure Natural Light",
                  "Hunt for Candid Narratives",
                  "Architectural Angle Mastery"
              ].map((tip, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-white/5 border border-white/5">
                      <span className="text-[#FF3300] font-black text-xs uppercase tracking-widest block mb-1">0{idx+1}</span>
                      <p className="text-white font-bold">{tip}</p>
                  </div>
              ))}
            </div>
          </div>
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
          <div className="space-y-6 text-gray-400">
            <p className="text-lg leading-relaxed">
                The great outdoors offers the most dynamic canvas for portraiture. Mastering the light and environment is key to lifting your subject out of the ordinary.
            </p>
            <ul className="space-y-4">
              {[
                  "The Golden Hour Synchronization",
                  "Wide-Aperture Depth Manipulation",
                  "Environmental Framing Architecture",
                  "Natural Surroundings Integration"
              ].map((trick, idx) => (
                  <li key={idx} className="flex items-center gap-4">
                      <div className="w-2 h-2 rounded-full bg-[#FF3300] shadow-[0_0_10px_#FF3300]"></div>
                      <span className="text-white font-medium">{trick}</span>
                  </li>
              ))}
            </ul>
          </div>
        ),
        likes: 8,
      },
    },
    {
      id: 3,
      title: "How to Choose the Right Lens",
      description: "Choosing the right lens is crucial for portrait photography. Here's a guide...",
      image: "https://picsum.photos/800/600?nature",
      author: "Emily White",
      modalContent: {
        title: "Optic Excellence: Choosing the Right Lens",
        image: "https://picsum.photos/800/600?nature",
        content: (
          <div className="space-y-6 text-gray-400">
            <p className="leading-relaxed">
                Your lens is your eye. Choosing the correct focal length defines the relationship between your subject and their world.
            </p>
            <div className="space-y-4 pt-4">
                <div className="border-l-4 border-[#FF3300] pl-6 py-2">
                    <h4 className="text-white font-black uppercase text-xs tracking-widest mb-1">The 85mm Prime</h4>
                    <p className="text-sm">The undisputed king of portraiture, offering compression and bokeh that feels like a dream.</p>
                </div>
                <div className="border-l-4 border-indigo-600 pl-6 py-2">
                    <h4 className="text-white font-black uppercase text-xs tracking-widest mb-1">The 35mm Narrative</h4>
                    <p className="text-sm">Perfect for environmental portraits that tell a larger story of the subject in their element.</p>
                </div>
            </div>
          </div>
        ),
        likes: 15,
      },
    },
  ];

  const Layout = auth?.role === 1 ? PhotographerLayout : AuthenticatedLayout;

  return (
    <Layout
        header={
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                    <h2 className="text-3xl font-black font-['Playfair_Display'] text-white uppercase">
                        The <span className="italic text-[#FF3300]">Journal</span>
                    </h2>
                    <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mt-1">Wisdom from the Elite Masters</p>
                </div>
                <Link
                    href="/photographer-blog-tips"
                    className="px-8 py-3 bg-[#FF3300] text-white text-[10px] font-black uppercase tracking-widest rounded-full hover:bg-white hover:text-black transition-all shadow-[0_0_30px_rgba(255,51,0,0.3)]"
                >
                    Contribute Mastery
                </Link>
            </div>
        }
    >
      <Head title="Performance Journal" />

      <div className="min-h-screen bg-[#050505] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Featured Article Indicator */}
            <div className="mb-20 grid grid-cols-1 lg:grid-cols-3 gap-10">
                {posts.map((post) => (
                    <div
                        key={post.id}
                        className="group relative cursor-pointer"
                        onClick={() => openModal(post.id)}
                    >
                        <div className="relative aspect-[4/5] overflow-hidden rounded-[3rem] border border-white/10 mb-8 transition-all duration-700 group-hover:border-[#FF3300]/50 group-hover:shadow-[0_20px_50px_rgba(255,51,0,0.1)]">
                            <img
                                src={post.image}
                                alt={post.title}
                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale hover:grayscale-0"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 transition-opacity group-hover:opacity-40"></div>
                            
                            <div className="absolute bottom-10 left-10 right-10">
                                <span className="text-[#FF3300] text-[10px] font-black uppercase tracking-[0.3em] mb-4 block translate-y-4 group-hover:translate-y-0 transition-transform">
                                    {post.author} • Master Class
                                </span>
                                <h3 className="text-3xl font-black text-white font-['Playfair_Display'] leading-[0.9] group-hover:text-[#FF3300] transition-colors translate-y-2 group-hover:translate-y-0 duration-500">
                                    {post.title}
                                </h3>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* More Insights Marker */}
            <div className="flex items-center gap-10 opacity-30">
                <div className="h-px flex-grow bg-white"></div>
                <span className="text-[10px] font-black uppercase tracking-[0.5em] text-white">Archives of Excellence</span>
                <div className="h-px flex-grow bg-white"></div>
            </div>
        </div>
      </div>

      {/* Modal - Ultra Premium Dark */}
      {posts.map(
        (post) =>
          activeModal === post.id && (
            <div
                key={post.id}
                className="fixed inset-0 bg-black/95 backdrop-blur-2xl flex justify-center items-center z-[100] p-4 sm:p-8 animate-in fade-in duration-500"
                onClick={closeModal}
            >
                <div
                    className="relative bg-[#0A0A0A] border border-white/10 rounded-[4rem] w-full max-w-4xl max-h-[90vh] overflow-y-auto no-scrollbar shadow-2xl"
                    onClick={(e) => e.stopPropagation()}
                >
                    <button
                        className="absolute top-10 right-10 w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white hover:bg-[#FF3300] transition-all z-20 group"
                        onClick={closeModal}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-5 h-5 group-hover:rotate-90 transition-transform">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    <div className="p-10 sm:p-20 space-y-12">
                        <div className="space-y-4">
                            <span className="text-[#FF3300] text-[10px] font-black uppercase tracking-[0.4em]">Published by {post.author}</span>
                            <h2 className="text-5xl sm:text-7xl font-black text-white font-['Playfair_Display'] leading-none">
                                {post.modalContent.title}
                            </h2>
                        </div>

                        <div className="aspect-video w-full rounded-[3rem] overflow-hidden border border-white/5">
                            <img
                                src={post.modalContent.image}
                                alt={post.modalContent.title}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <div className="relative">
                            <div className="absolute top-0 right-0 py-4 px-6 rounded-full bg-white/5 border border-white/5 flex items-center gap-3">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-4 h-4 text-[#FF3300]" viewBox="0 0 20 20">
                                    <path d="M9.653 16.915l-.005-.003-.019-.01a20.759 20.759 0 01-1.162-.682 22.045 22.045 0 01-2.582-1.9c-2.003-1.703-3.885-3.693-3.885-6.07C2 5.588 4.34 3 7.5 3c1.76 0 3.04.832 3.5 1.54.46-.708 1.74-1.54 3.5-1.54 3.16 0 5.5 2.588 5.5 5.25 0 2.378-1.882 4.367-3.885 6.07a22.048 22.048 0 01-3.744 2.582l-.019.01-.005.003h-.002a.739.739 0 01-.69.001l-.002-.001z" />
                                </svg>
                                <span className="text-white font-black text-xs uppercase tracking-widest">{post.modalContent.likes} Appreciations</span>
                            </div>
                            
                            <div className="max-w-2xl font-medium prose prose-invert">
                                {post.modalContent.content}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          )
      )}
    </Layout>
  );
}
