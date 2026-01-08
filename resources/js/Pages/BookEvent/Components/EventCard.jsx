import { router } from "@inertiajs/react";
import React from "react";

<<<<<<< HEAD
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
=======
const EventCard = ({ id, image = "", title, address, rate, startDate, endDate }) => {
  // Check if image exists, and if not, provide a fallback
  const photoPath = image && image.startsWith("http") ? image : `/events_photos/${image}`;

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-all transform hover:scale-105 hover:shadow-xl cursor-pointer">
      {/* Image Section */}
      <img
        src={photoPath}
        alt={title}
        className="w-full h-56 sm:h-64 md:h-72 object-cover object-center"
      />

      {/* Content Section */}
      <div className="p-4 space-y-3">
        {/* Event Title */}
        <h3 className="text-xl font-semibold text-gray-800 truncate">{title}</h3>

        {/* Event Address */}
        <p className="text-sm text-gray-500">{address}</p>

        {/* Event Rate */}
        <p className="text-sm text-gray-700 font-medium">BDT {rate}/hr</p>

        {/* Event Date */}
        <p className="text-sm text-gray-600">
          <span className="font-semibold">Date:</span> {startDate} - {endDate}
        </p>

        {/* View Details Button */}
        <button
          onClick={() => router.visit(route("eventbook.show", id))}
          className="w-full py-2 text-white bg-[#1F1F1F] rounded-lg hover:bg-[#FF3300] transition-colors duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-[#FF3300] focus:ring-opacity-50"
>>>>>>> 82830a56bbe0eaea2d391d47383e2ecce526af8b
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default EventCard;
