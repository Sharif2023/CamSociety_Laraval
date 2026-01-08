import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { useState, useEffect } from "react";
import EventGrid from "./Components/EventGrid";
import EventSearch from "./Components/EventSearch";
import EventModal from "./Components/EventModal";
import PhotographerLayout from "../Photographer/Layout/PhotographerLayout";


export default function index({ auth }) {

  //for event fetch from db
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [selectedEvent, setSelectedEvent] = useState(null); // State for selected event modal

  useEffect(() => {
    // Fetch events from the API
    fetch("/events")
      .then((response) => response.json())
      .then((data) => {
        setEvents(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching events:", error);
        setIsLoading(false);
      });
  }, []);

  const handleSearch = (query) => {
    console.log("Search Query:", query);
    // Add search functionality here
  };

  const handleEventClick = (id) => {
    const event = events.find((event) => event.id === id);
    setSelectedEvent(event); // Set the selected event
  };

  const handleCloseModal = () => {
    setSelectedEvent(null); // Close the modal
  };
  const Layout = auth.role === "photographer" ? PhotographerLayout : AuthenticatedLayout;

  return (
    <Layout
      header={
        <h2 className="text-xl font-semibold text-center leading-tight text-gray-800">
          Book Event
        </h2>
      }
    >
      <Head title="Dashboard" />
      <section className="underline text-[#FF3300] text-end pr-5">
        <a href="/event-upload">Create a Event</a>
      </section>

      <div className="min-h-screen bg-gray-100 py-8">
        <EventSearch onSearch={handleSearch} />
        {isLoading ? (
          <p className="text-center">Loading events...</p>
        ) : (
          <EventGrid events={events} onEventClick={handleEventClick} />
        )}
      </div>

      {selectedEvent && (
        <EventModal event={selectedEvent} onClose={handleCloseModal} />
      )}
    </Layout>
  );
}
