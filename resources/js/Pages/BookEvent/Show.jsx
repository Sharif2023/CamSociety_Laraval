import React, { useState } from 'react';
import { Head, usePage, router } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import PhotographerLayout from '../Photographer/Layout/PhotographerLayout';

const Show = ({ event, canApply, hasApplied }) => {
  const { auth } = usePage().props;
  const [applicationStatus, setApplicationStatus] = useState(hasApplied);
  const Layout = auth.role === 'photographer' ? PhotographerLayout : AuthenticatedLayout;

  const handleApply = () => {
    router.post(
      route('eventbook.apply', event.id),
      {},
      {
        onSuccess: () => {
          setApplicationStatus(true);
        },
        onError: (errors) => {
          console.error(errors);
        },
      }
    );
  };

  return (
    <Layout
      header={
        <h2 className="text-xl font-semibold text-center leading-tight text-gray-800">
          Event Details
        </h2>
      }
    >
      <Head title={event.event_name} />
      <div className="container mx-auto p-6">
        <div className="bg-white rounded-lg shadow-md">
          <img
            src={event.photo_url && event.photo_url.startsWith('http') ? event.photo_url : event.photo_url ? `/events_photos/${event.photo_url}` : 'https://via.placeholder.com/1200x400?text=Event'}
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
              <p className="text-green-500 font-semibold">You have already applied to this event.</p>
            ) : canApply ? (
              <button
                onClick={handleApply}
                className="w-full py-2 text-white bg-[#1F1F1F] rounded-lg hover:bg-[#FF3300] transition-colors duration-300"
              >
                Apply as Photographer
              </button>
            ) : (
              <p className="text-gray-600 text-sm">
                {auth.role === 'photographer'
                  ? 'This event is not available for application right now.'
                  : 'Only photographers can apply to this event.'}
              </p>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Show;
