import React from "react";
import EventCard from "./EventCard";

const EventGrid = ({ events }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-10 mt-6">
      {events.map((event) => (
        <EventCard
          key={event.id}
          id={event.id}
<<<<<<< HEAD
          photo_url={event.photo_url} // Update to match backend field
          event_name={event.event_name} // Update to match backend field
          location={event.location}
          rate={event.rate}
          start_date={event.start_date} // Correct field for date
=======
          image={event.photo_url}
          title={event.title}
          address={event.address}
          rate={event.rate}
          startDate={new Date(event.start_date).toLocaleDateString("en-GB", {
            day: "2-digit",
            month: "short",
            year: "numeric",
          })}
          endDate={new Date(event.end_date).toLocaleDateString("en-GB", {
            day: "2-digit",
            month: "short",
            year: "numeric",
          })}
>>>>>>> 82830a56bbe0eaea2d391d47383e2ecce526af8b
        />
      ))}
    </div>
  );
};

export default EventGrid;
