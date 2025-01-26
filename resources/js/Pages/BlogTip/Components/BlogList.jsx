import React from 'react';

function BlogList({ blogs, onBlogClick }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
      {blogs.map((blog) => (
        <div
          key={blog.id}
          className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-xl"
          onClick={() => onBlogClick(blog)}
        >
          <img className="w-full h-48 object-cover" src={blog.image} alt={blog.title} />
          <div className="p-6">
            <h2 className="text-xl font-bold text-gray-800">{blog.title}</h2>
            <p className="text-gray-500 text-sm mt-2">By {blog.author}</p>
            <p className="text-gray-400 text-sm mt-1">{blog.createdAt}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BlogList;
