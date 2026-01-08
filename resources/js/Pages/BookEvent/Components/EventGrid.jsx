import React from "react";
import EventCard from "./EventCard";

const EventGrid = ({ events, onEventClick }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-10 mt-6">
      {events.map((event) => (
        <EventCard
          key={event.id}
          id={event.id}
          photo_url={event.photo_url}
          event_name={event.event_name}
          location={event.location}
          rate={event.rate}
          start_date={event.start_date}
          onEventClick={onEventClick} // Pass down the handler
        />
      ))}
    </div>
  );
};

export default EventGrid;
