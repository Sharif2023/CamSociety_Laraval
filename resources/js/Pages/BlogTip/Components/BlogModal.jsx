import React, { useState } from 'react';

function BlogModal({ post, onClose }) {
  const [comment, setComment] = useState('');

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleCommentSubmit = () => {
    alert('Comment Submitted: ' + comment);
    setComment('');
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white w-full sm:w-3/4 lg:w-1/2 rounded-lg shadow-lg p-8 relative">
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          onClick={onClose}  // Ensure this calls the onClose prop correctly
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        {/* Blog Content */}
        <h2 className="text-3xl font-semibold text-gray-800">{post.title}</h2>
        <p className="text-gray-500 text-sm mt-2">By {post.author}</p>
        <p className="text-gray-400 text-sm mt-1">{post.createdAt}</p>
        
        <div className="mt-6">
          <img className="w-full h-64 object-cover rounded-lg" src={post.image} alt={post.title} />
          <p className="text-gray-700 mt-4">{post.content}</p>
        </div>

        {/* Comment Section */}
        <div className="mt-6">
          <textarea
            value={comment}
            onChange={handleCommentChange}
            placeholder="Leave a comment..."
            className="w-full h-24 p-4 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
          />
          <button
            onClick={handleCommentSubmit}
            className="mt-4 w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600"
          >
            Submit Comment
          </button>
        </div>
      </div>
    </div>
  );
}

export default BlogModal;
