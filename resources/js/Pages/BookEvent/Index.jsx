import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, router } from "@inertiajs/react";
import { useEffect, useState } from "react";
import EventGrid from "./Components/EventGrid";
import PhotographerLayout from "../Photographer/Layout/PhotographerLayout";
import Pagination from "@/Components/Pagination";
import TextInput from "@/Components/TextInput";
import AddEventModal from "./Components/AddEventModal";
import { ToastContainer, toast } from 'react-toastify';

export default function index({ auth, bookevents, queryParams = null, flash }) {
  const [events, setEvents] = useState(bookevents?.data || []);

  useEffect(() => {
    if (flash?.message?.success) {
      toast.success(flash.message.success);
    }
    if (flash?.message?.error) {
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

  // On Key Press
  const onKeyPress = (name, e) => {
    if (e.key !== "Enter") {
      return;
    }

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

      <div className="min-h-screen bg-gray-100 py-8">
        <div className="flex items-center mb-6 justify-center flex-wrap gap-4 px-4">
          <TextInput
            className="bg-white text-gray-800 border border-gray-300 rounded-full py-2 px-4 w-full sm:w-1/3 lg:w-1/4 focus:ring-2 focus:ring-primary"
            placeholder="Search by location"
            defaultValue={queryParams.address}
            onBlur={(e) =>
              searchFieldChange("address", e.target.value)
            }
            onKeyPress={(e) => onKeyPress("address", e)}
          />
          <button
            onClick={handleModalOpen}
            className="py-2 px-6 bg-primary text-white rounded-full hover:bg-dark transition duration-300"
          >
            ADD EVENT
          </button>
        </div>
        <EventGrid events={events} />

        {bookevents?.links && <Pagination links={bookevents.links} />}
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
}
