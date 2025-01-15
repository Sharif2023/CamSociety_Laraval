import React from "react";
import EventCard from "./EventCard";

const EventGrid = ({ events }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-10 mt-6">
      {events.map((event) => (
        <EventCard
          key={event.id}
          id={event.id}
          image={event.image}
          title={event.title}
          location={event.location}
          rate={event.rate}
          date={event.date}
        />
      ))}
    </div>
  );
};

export default EventGrid;
