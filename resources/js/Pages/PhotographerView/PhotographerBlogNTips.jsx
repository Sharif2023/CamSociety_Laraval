import PhotographerLayout from "../Photographer/Layout/PhotographerLayout";
import { Head, Link } from "@inertiajs/react";
import axios from "axios";
import { useEffect, useState } from "react";

export default function PhotographerBlogNTips() {
  const [activeModal, setActiveModal] = useState(null);
  const [formData, setFormData] = useState({ title: "", content: "", image: null });
  const [blogNTips, setBlogNTips] = useState([]);
  const [selectedTip, setSelectedTip] = useState(null);

  const openModal = (modalId) => setActiveModal(modalId);
  const closeModal = () => setActiveModal(null);
  const handleModalClose = () => setSelectedTip(null);

  const loadTips = async () => {
    const response = await fetch("/blogntips");
    const data = await response.json();
    setBlogNTips(data);
  };

  useEffect(() => {
    loadTips().catch((error) => console.error("Error fetching blog tips:", error));
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataObj = new FormData();
    formDataObj.append("title", formData.title);
    formDataObj.append("content", formData.content);
    if (formData.image) {
      formDataObj.append("image", formData.image);
    }

    try {
      await axios.post(route("blogntips.store"), formDataObj, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setFormData({ title: "", content: "", image: null });
      closeModal();
      await loadTips();
    } catch (error) {
      console.error("Error creating post:", error.response ? error.response.data : error.message);
      alert(error.response?.data?.message || "Failed to create post.");
    }
  };

  const truncateWords = (text, wordLimit) => {
    const words = text.split(" ");
    return words.length > wordLimit ? `${words.slice(0, wordLimit).join(" ")}...` : text;
  };

  return (
    <PhotographerLayout
      header={
        <h2 className="text-xl font-semibold text-center leading-tight text-gray-800">
          Photographer Blog & Tips
        </h2>
      }
    >
      <Head title="Photographer Blog & Tips" />

      <section className="bg-gray-600 text-white py-2 text-center">
        <h1 className="text-4xl font-bold">Blog & Tips</h1>
        <p className="mt-2 text-[#FAF0E6]">
          Explore thoughts, tips, and advice from professional photographers.
        </p>
      </section>
      <section className="underline text-[#FF3300] text-end pr-5">
        <Link href={route("blogsntips")}>View User Interface</Link>
      </section>
      <main className="max-w-6xl mx-auto p-6 mt-6">
        <button
          type="button"
          className="inline-flex text-white bg-[#FF3300] hover:bg-[#1F1F1F] font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          onClick={() => openModal("addPost")}
        >
          Add post
        </button>

        <h2 className="text-2xl font-bold my-6 text-[#1F1F1F]">Recent Posts</h2>

        {activeModal === "addPost" && (
          <div className="fixed inset-0 z-50 justify-center items-center bg-black bg-opacity-50 flex p-4">
            <div className="relative w-full max-w-lg bg-white rounded-lg shadow">
              <div className="flex items-center justify-between p-4 border-b rounded-t">
                <h3 className="text-lg font-semibold text-gray-900">
                  Post Your Blog or Tip
                </h3>
                <button
                  onClick={closeModal}
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center"
                >
                  <span className="sr-only">Close modal</span>
                  ×
                </button>
              </div>

              <form onSubmit={handleSubmit} className="p-4 md:p-5 space-y-4">
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900" htmlFor="file_input">
                    Upload Photo
                  </label>
                  <input
                    className="block w-full text-sm text-[#1F1F1F] border border-gray-300 rounded-lg cursor-pointer bg-gray-50"
                    id="file_input"
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                  />
                </div>

                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900" htmlFor="title">
                    Title
                  </label>
                  <input
                    type="text"
                    name="title"
                    id="title"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                    placeholder="Enter the title"
                    required
                    value={formData.title}
                    onChange={handleInputChange}
                  />
                </div>

                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900" htmlFor="content">
                    Content
                  </label>
                  <textarea
                    id="content"
                    rows="4"
                    name="content"
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300"
                    placeholder="Write your blog or tip"
                    value={formData.content}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="flex justify-between">
                  <button
                    type="submit"
                    className="text-white inline-flex items-center bg-[#FF3300] hover:bg-orange-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                  >
                    Post
                  </button>
                  <button
                    type="button"
                    onClick={closeModal}
                    className="text-white inline-flex items-center bg-[#1F1F1F] hover:bg-gray-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

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
                  type="button"
                  className="text-[#FF3300] font-semibold hover:underline"
                  onClick={() => setSelectedTip(tip)}
                >
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>

        {selectedTip && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
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
                {selectedTip.content.split("\n").map((line, index) => (
                  <p key={index}>{line}</p>
                ))}
              </div>
              <div className="p-5 border-t flex justify-end">
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
      </main>
    </PhotographerLayout>
  );
}
