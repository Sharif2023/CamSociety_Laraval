import { router } from "@inertiajs/react";
import React from "react";

const EventCard = ({ id, image = "", title, address, rate, startDate, endDate }) => {
  // Check if image exists, and if not, provide a fallback
  const photoPath = image && image.startsWith("http") ? image : image ? `/events_photos/${image}` : "https://via.placeholder.com/300x200?text=Event";

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-all transform hover:scale-105 hover:shadow-xl cursor-pointer">
      {/* Image Section */}
      <img
        src={photoPath}
        alt={title}
        className="w-full h-48 sm:h-56 object-cover object-center"
      />

      {/* Content Section */}
      <div className="p-4 space-y-2">
        {/* Event Title */}
        <h3 className="text-lg font-semibold text-gray-800 truncate">{title}</h3>

        {/* Event Address */}
        <p className="text-sm text-gray-500 truncate">{address}</p>

        {/* Event Rate */}
        <p className="text-sm text-gray-700 font-medium">BDT {rate}/hr</p>

        {/* Event Date */}
        {startDate && (
          <p className="text-sm text-gray-600">
            <span className="font-medium">Date:</span> {startDate} {endDate && `- ${endDate}`}
          </p>
        )}

        {/* View Details Button */}
        <button
          onClick={() => router.visit(route("eventbook.show", id))}
          className="w-full mt-2 py-2 text-white bg-dark rounded-lg hover:bg-primary transition-colors duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default EventCard;
