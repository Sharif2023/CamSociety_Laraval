import React from "react";

const EventCard = ({ id, image, title, location, rate, date }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4 text-center">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-gray-600">Location: {location}</p>
        <p className="text-gray-600">Rate: {rate}</p>
        <p className="text-gray-600">Date: {date}</p>
        <button
          onClick={() => window.location.href = `eventdetails.html?id=${id}`}
          className="mt-4 bg-[#1F1F1F] text-white px-4 py-2 rounded-lg hover:bg-[#FF3300]"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default EventCard;
