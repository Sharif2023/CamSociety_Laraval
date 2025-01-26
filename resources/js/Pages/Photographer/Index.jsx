import { Head } from "@inertiajs/react";
import PhotographerLayout from "./Layout/PhotographerLayout";
import PhotographerProfile from "./Components/PhotographerProfile";
import StatsCards from "./Components/StatsCards";
import RecentProjects from "./Components/RecentProjects";
import { use } from "react";

export default function Dashboard({auth, photos}) {


    const user = auth.user;

    const photographer = {
        name: "John Doe",
        bio: "Capturing moments that last forever.",
        specializations: "Weddings, Events, Portraits",
        profilePicture: "https://picsum.photos/200/300",
        stats: {
            listed_photos: photos.length,
            // earnings: 8340,
            rating: user.rating,
        },
        
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
                    name={user.name}
                    bio={user.bio? user.bio : 'No bio provided'} 
                    specializations={user.specializations? user.specializations : 'No specializations provided'}
                    profilePicture={photographer.profilePicture}
                />
                <StatsCards stats={photographer.stats} />
                <RecentProjects projects={photos} />
            </div>
        </PhotographerLayout>
    );
}
