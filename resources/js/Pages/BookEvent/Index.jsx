import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { useState } from "react";
import EventGrid from "./Components/EventGrid";
import EventSearch from "./Components/EventSearch";


export default function About() {
    const [events] = useState([
        {
          id: 1,
          image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
          title: "Charity Gala",
          location: "Pan Pacific Sonargaon, Dhaka",
          rate: "BDT 8500/hr",
          date: "19 March, 2025",
        },
        {
          id: 2,
          image: "https://images.pexels.com/photos/461593/pexels-photo-461593.jpeg?cs=srgb&dl=pexels-pixabay-461593.jpg&fm=jpg",
          title: "Cultural Evening",
          location: "Shilpakala Academy, Dhaka",
          rate: "BDT 4000/hr",
          date: "12 February, 2025",
        },
        {
          id: 3,
          image: "https://images.pexels.com/photos/3184327/pexels-photo-3184327.jpeg?cs=srgb&dl=pexels-fauxels-3184327.jpg&fm=jpg",
          title: "Startup Pitch Competition",
          location: "Grameenphone HQ, Dhaka",
          rate: "BDT 9500/hr",
          date: "1 February, 2025",
        },
        {
          id: 4,
          image: "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?cs=srgb&dl=pexels-wendy-wei-1763075.jpg&fm=jpg",
          title: "Open Air Cinema",
          location: "Ahsan Manzil, Dhaka",
          rate: "BDT 3500/hr",
          date: "8 February, 2025",
        },
       
      ]);
      
      
      

    const handleSearch = (query) => {
        console.log("Search Query:", query);
        // Add search functionality here
    };

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold text-center leading-tight text-gray-800">
                    Book Event
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="min-h-screen bg-gray-100 py-8">
                <EventSearch onSearch={handleSearch} />
                <EventGrid events={events} />
            </div>
        </AuthenticatedLayout>
    );
}
