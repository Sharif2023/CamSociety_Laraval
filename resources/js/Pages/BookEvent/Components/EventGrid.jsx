import React from "react";
import EventCard from "./EventCard";

const EventGrid = ({ events }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-10 mt-6">
      {events.map((event) => (
        <EventCard
          key={event.id}
          id={event.id}
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
        />
      ))}
    </div>
  );
};

export default EventGrid;
