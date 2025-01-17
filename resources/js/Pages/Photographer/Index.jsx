import { Head } from "@inertiajs/react";
import PhotographerLayout from "./Layout/PhotographerLayout";
import PhotographerProfile from "./Components/PhotographerProfile";
import StatsCards from "./Components/StatsCards";
import RecentProjects from "./Components/RecentProjects";

export default function Dashboard() {
    const photographer = {
        name: "John Doe",
        bio: "Capturing moments that last forever.",
        specializations: "Weddings, Events, Portraits",
        profilePicture: "https://picsum.photos/200/300",
        stats: {
            projects: 25,
            earnings: 8340,
            rating: 4.9,
        },
        projects: [
            {
                id: 1,
                title: "Wedding Photography",
                image: "https://picsum.photos/200/300/?wedding",
                date: "Delivered on Jan 10",
            },
            {
                id: 2,
                title: "Corporate Event",
                image: "https://picsum.photos/200/300/?corporate",
                date: "Delivered on Dec 20",
            },
            {
                id: 3,
                title: "Travel Photoshoot",
                image: "https://picsum.photos/200/300/?travel",
                date: "Delivered on Dec 15",
            },
        ],
    };

    return (
        <PhotographerLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Photographer Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="container mx-auto p-6">
                <PhotographerProfile
                    name={photographer.name}
                    bio={photographer.bio}
                    specializations={photographer.specializations}
                    profilePicture={photographer.profilePicture}
                />
                <StatsCards stats={photographer.stats} />
                <RecentProjects projects={photographer.projects} />
            </div>
        </PhotographerLayout>
    );
}
