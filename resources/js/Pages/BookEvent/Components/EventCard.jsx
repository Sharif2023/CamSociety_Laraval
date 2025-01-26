import React from "react";

const EventCard = ({ id, photo_url, event_name, location, rate, start_date, onEventClick }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
      <img src={photo_url || "https://via.placeholder.com/150"} alt={event_name} className="w-full h-48 object-cover" />
      <div className="p-4 text-center">
        <h3 className="text-lg font-semibold">{event_name}</h3>
        <p className="text-gray-600">Location: {location}</p>
        <p className="text-gray-600">Rate: BDT {rate}/hr</p>
        <p className="text-gray-600">Date: {start_date}</p>
        <button
          onClick={() => onEventClick(id)}
          className="mt-4 bg-[#1F1F1F] text-white px-4 py-2 rounded-lg hover:bg-[#FF3300]"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default EventCard;
