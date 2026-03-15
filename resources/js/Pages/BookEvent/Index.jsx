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
  const events = bookevents?.data || [];

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

  const searchFieldChange = (name, value) => {
    if (value) {
      queryParams[name] = value;
    } else {
      delete queryParams[name];
    }
    router.get(route("eventbook", queryParams));
  };

  const onKeyPress = (name, e) => {
    if (e.key !== "Enter") return;
    searchFieldChange(name, e.target.value);
  };

  const Layout = auth.role === "photographer" ? PhotographerLayout : AuthenticatedLayout;

  return (
    <Layout
      header={
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
                <h2 className="text-3xl font-black font-['Playfair_Display'] text-white leading-tight">
                    Event <span className="italic text-[#FF3300]">Book</span>
                </h2>
                <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mt-1">Exclusive Photography Assignments</p>
            </div>

            <div className="flex items-center gap-4">
                <div className="relative group">
                    <TextInput
                        className="bg-white/5 border-white/10 text-white placeholder:text-gray-600 rounded-full py-2.5 px-6 w-64 md:w-80 focus:ring-[#FF3300] transition-all"
                        placeholder="Filter by location..."
                        defaultValue={queryParams.address}
                        onBlur={(e) => searchFieldChange("address", e.target.value)}
                        onKeyPress={(e) => onKeyPress("address", e)}
                    />
                </div>

                <button
                    onClick={handleModalOpen}
                    className="px-10 py-2.5 bg-[#FF3300] text-white font-black rounded-full hover:bg-[#CC2900] shadow-[0_4px_20px_rgba(255,51,0,0.3)] transition-all transform hover:-translate-y-0.5 active:scale-95"
                >
                    POST ASSIGNMENT
                </button>
            </div>
        </div>
      }
    >
      <Head title="Premium Events" />
      <ToastContainer theme="dark" />

      <div className="min-h-screen bg-[#050505] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Event Stats - Minimalist Premium */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
                {[
                    { label: 'Open Gigs', value: bookevents?.meta?.total || 0, icon: '📸' },
                    { label: 'Top Region', value: 'Dhaka', icon: '📍' },
                    { label: 'Avg. Rate', value: '৳ 25k', icon: '💰' },
                    { label: 'Elite Gigs', value: '100+', icon: '💎' }
                ].map((stat, i) => (
                    <div key={i} className="p-6 rounded-[2rem] bg-white/[0.02] border border-white/5 backdrop-blur-xl flex items-center gap-6">
                        <div className="text-3xl">{stat.icon}</div>
                        <div>
                            <p className="text-2xl font-black text-white">{stat.value}</p>
                            <p className="text-[10px] uppercase tracking-widest font-bold text-gray-500">{stat.label}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000">
                {events.length > 0 ? (
                    <EventGrid events={events} />
                ) : (
                    <div className="flex flex-col items-center justify-center py-20 bg-white/[0.01] border border-white/5 rounded-[3rem] backdrop-blur-md">
                        <div className="text-5xl mb-6 opacity-20">📽️</div>
                        <p className="text-gray-500 font-bold uppercase tracking-[0.3em] text-xs">No assignments discovered in this sector</p>
                    </div>
                )}
            </div>

            <div className="mt-20 flex justify-center">
                {bookevents?.links && <Pagination links={bookevents.links} />}
            </div>
        </div>
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
