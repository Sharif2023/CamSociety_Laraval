import React, { useState } from 'react';
import { usePage, router } from '@inertiajs/react';

const Show = ({ event }) => {
  const { auth } = usePage().props; // Access user authentication props
  const [applicationStatus, setApplicationStatus] = useState(false);

  const handleApply = () => {
    // Use Inertia's router to send a POST request
    router.post(
      `/apply/${event.id}`, // Laravel route for applying
      {
        photographer_id: auth.user.id, // Pass user data if necessary
      },
      {
        onSuccess: () => {
          setApplicationStatus(true); // Update UI to indicate application was successful
          alert('Your application has been successfully submitted!');
        },
        onError: (errors) => {
          console.error(errors);
          alert(errors.message || 'An error occurred while applying for the event.');
        },
      }
    );
  };

  return (
    <div className="container mx-auto p-6">
      <div className="bg-white rounded-lg shadow-md">
        {/* Event Image */}
        <img
          src={event.photo_url && event.photo_url.startsWith('http') ? event.photo_url : `/storage/events_photos/${event.photo_url}`}
          alt={event.event_name}
          className="w-full h-64 object-cover"
        />

        <div className="p-4">
          <h1 className="text-2xl font-bold">{event.event_name}</h1>
          <p className="text-lg text-gray-600">{event.address}</p>
          <p className="text-md text-gray-500">
            {new Date(event.start_date).toLocaleDateString()} - {new Date(event.end_date).toLocaleDateString()}
          </p>
          <p className="text-md text-gray-700 mt-4">{event.description}</p>
          <p className="mt-2 text-lg font-semibold">Rate: BDT {event.rate}/hr</p>
        </div>

        <div className="p-4">
          {applicationStatus ? (
            <p className="text-green-500 font-semibold">You have successfully applied!</p>
          ) : (
            <button
              onClick={handleApply}
              className="w-full py-2 text-white bg-[#1F1F1F] rounded-lg hover:bg-[#FF3300] transition-colors duration-300"
            >
              Apply as Photographer
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Show;
