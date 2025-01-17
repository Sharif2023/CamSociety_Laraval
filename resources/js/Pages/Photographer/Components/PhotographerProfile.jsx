import React from "react";

const PhotographerProfile = ({ name, bio, specializations, profilePicture }) => {
    return (
        <section className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-6">
            <img
                src={profilePicture}
                alt="Profile"
                className="w-24 h-24 rounded-full shadow-md"
            />
            <div>
                <h2 className="text-2xl font-bold text-gray-800">{name}</h2>
                <p className="text-gray-600 mt-2">"{bio}"</p>
                <p className="text-sm text-gray-500 mt-1">
                    Specializations: {specializations}
                </p>
            </div>
        </section>
    );
};

export default PhotographerProfile;
