import { Head } from "@inertiajs/react";
import PhotographerLayout from "./Layout/PhotographerLayout";
import PhotographerProfile from "./Components/PhotographerProfile";
import StatsCards from "./Components/StatsCards";
import RecentProjects from "./Components/RecentProjects";

export default function Dashboard({auth, photos}) {
    const user = auth.user;

    const photographerStats = {
        listed_photos: photos.length,
        rating: user.rating || 0,
        experience: "Expert",
    };

    return (
        <PhotographerLayout
            header={
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div>
                        <h2 className="text-3xl font-black font-['Playfair_Display'] text-white">
                            Creative <span className="italic text-[#FF3300]">Studio</span>
                        </h2>
                        <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mt-1">Professional Excellence Hub</p>
                    </div>
                </div>
            }
        >
            <Head title="Creative Studio" />

            <div className="py-20 space-y-20">
                {/* Profile Section */}
                <div className="animate-in fade-in slide-in-from-bottom-6 duration-700">
                    <PhotographerProfile
                        name={user.name}
                        bio={user.bio || 'Your visual story starts here. Witness the blend of passion and precision.'} 
                        specializations={user.specializations || 'Bespoke Visual Narrative Specialist'}
                        profilePicture={user.profile_picture || `https://i.pravatar.cc/400?u=${user.id}`}
                    />
                </div>

                {/* Stats Section */}
                <div className="animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
                    <StatsCards stats={photographerStats} />
                </div>

                {/* Recent Projects Section */}
                <div className="animate-in fade-in slide-in-from-bottom-10 duration-700 delay-200">
                    <div className="flex items-center justify-between mb-8">
                        <h3 className="text-2xl font-black font-['Playfair_Display'] text-white uppercase tracking-tighter">Current Portfolio</h3>
                        <div className="h-px flex-grow mx-8 bg-white/10 hidden md:block"></div>
                    </div>
                    <RecentProjects projects={photos} />
                </div>
            </div>
        </PhotographerLayout>
    );
}
