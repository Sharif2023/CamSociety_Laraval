import React from "react";

const StatsCards = ({ stats }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-lg font-semibold text-gray-800">Total Projects</h2>
                <p className="mt-2 text-3xl font-bold text-indigo-600">
                    {stats.projects}
                </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-lg font-semibold text-gray-800">Earnings</h2>
                <p className="mt-2 text-3xl font-bold text-green-600">
                    ${stats.earnings.toLocaleString()}
                </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-lg font-semibold text-gray-800">Rating</h2>
                <p className="mt-2 text-3xl font-bold text-yellow-500">
                    {stats.rating}
                </p>
            </div>
        </div>
    );
};

export default StatsCards;
