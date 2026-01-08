import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
<<<<<<< HEAD
import { Head } from "@inertiajs/react";
import { useState, useEffect } from "react";
=======
import { Head, router } from "@inertiajs/react";
import { useEffect, useState } from "react";
>>>>>>> 82830a56bbe0eaea2d391d47383e2ecce526af8b
import EventGrid from "./Components/EventGrid";
import PhotographerLayout from "../Photographer/Layout/PhotographerLayout";
import Pagination from "@/Components/Pagination";
import TextInput from "@/Components/TextInput";
import AddEventModal from "./Components/AddEventModal";
import { ToastContainer, toast } from 'react-toastify';

export default function index({ auth, bookevents, queryParams = null, flash }) {
    const [events, setEvents] = useState(bookevents.data);


<<<<<<< HEAD
export default function index({ auth }) {

  //for event fetch from db
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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
=======
    useEffect(() => {
            if (flash.message.success) {
                toast.success(flash.message.success);
            }
            if (flash.message.error) {
                toast.error(flash.message.error);
            }
        }, [flash]);



    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleModalOpen = () => setIsModalOpen(true);
    const handleModalClose = () => setIsModalOpen(false);

    queryParams = queryParams || {};

    // Search Field Change
    const searchFieldChange = (name, value) => {
        if (value) {
            queryParams[name] = value;
        } else {
            delete queryParams[name];
        }

        router.get(route("eventbook", queryParams));
    };
>>>>>>> 82830a56bbe0eaea2d391d47383e2ecce526af8b

    // On Key Press
    const onKeyPress = (name, e) => {
        if (e.key !== "Enter") {
            return;
        }

<<<<<<< HEAD
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
          <EventGrid events={events} />
        )}
      </div>
    </Layout>
  );
=======
        searchFieldChange(name, e.target.value);
    };

    const Layout =
        auth.role === "photographer" ? PhotographerLayout : AuthenticatedLayout;

    return (
        <Layout
            header={
                <h2 className="text-xl font-semibold text-center leading-tight text-gray-800">
                    Book Event
                </h2>
            }
        >
            <Head title="Events" />
            <ToastContainer />

            {/* <pre>{JSON.stringify(bookevents, null, 2)}</pre> */}

            <div className="min-h-screen bg-gray-100 py-8">
                <div className="flex items-center mb-6 justify-center">
                    <TextInput
                        className="bg-white text-gray-800 border border-gray-300 rounded-full py-2 px-4 w-1/4 focus:ring-2 focus:ring-blue-500"
                        placeholder="Search by location"
                        defaultValue={queryParams.title}
                        onBlur={(e) =>
                            searchFieldChange("address", e.target.value)
                        }
                        onKeyPress={(e) => onKeyPress("address", e)}
                    />
                    <button
                        onClick={handleModalOpen}
                        className="mx-4 py-2 px-6 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition duration-300"
                    >
                        ADD EVENT
                    </button>
                </div>
                <EventGrid events={events} />

                <Pagination links={bookevents.links} />
            </div>
            {isModalOpen && (
                <AddEventModal
                    isModalOpen={isModalOpen}
                    handleModalClose={handleModalClose}
                    queryParams={queryParams}
                />
            )}
        </Layout>
    );
>>>>>>> 82830a56bbe0eaea2d391d47383e2ecce526af8b
}
