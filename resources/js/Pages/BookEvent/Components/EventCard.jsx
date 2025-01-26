import { router } from "@inertiajs/react";
import React from "react";

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
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default EventCard;
