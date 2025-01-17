import React from "react";

const RecentProjects = ({ projects }) => {
    return (
        <section className="mt-8">
            <h2 className="text-2xl font-bold text-gray-800">Recent Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
                {projects.map((project) => (
                    <div
                        key={project.id}
                        className="bg-white p-4 rounded-lg shadow-md h-2/5"
                    >
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-2/3 rounded-md"

                        />
                        <h3 className="mt-4 font-semibold text-gray-800">
                            {project.title}
                        </h3>
                        <p className="text-gray-600">{project.date}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default RecentProjects;
