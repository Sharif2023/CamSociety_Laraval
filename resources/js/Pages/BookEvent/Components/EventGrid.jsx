import React from "react";
import EventCard from "./EventCard";

const EventGrid = ({ events }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
      {events.map((event) => (
        <div key={event.id} className="animate-in fade-in slide-in-from-bottom-4 duration-700">
            <EventCard
                id={event.id}
                image={event.photo_url}
                title={event.event_name || event.title}
                address={event.address || event.location}
                rate={event.rate}
                startDate={event.start_date ? new Date(event.start_date).toLocaleDateString("en-GB", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                }) : ""}
                endDate={event.end_date ? new Date(event.end_date).toLocaleDateString("en-GB", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                }) : ""}
            />
        </div>
      ))}
    </div>
  );
};

export default EventGrid;
