import React from "react";

const RecentProjects = ({ projects }) => {
  return (
    <section className="mt-8">
      <h2 className="text-2xl font-bold text-gray-800">Recent Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white p-4 rounded-lg shadow-md h-full"
          >
            {/* Image */}
            {/* <pre>{JSON.stringify(project, null, 2)}</pre> */}
            <img
              src={
                project.image_url && project.image_url.startsWith("http")
                  ? project.image_url  // Use the external URL if it starts with 'http'
                  : `/PhotoSells/${project.image_url}`  // Otherwise, use the local path
              }
              alt={project.title}
              className="w-full h-48 object-cover rounded-md"
            />
            <h3 className="mt-4 font-semibold text-gray-800">
              {project.title}
            </h3>
            <p className="text-gray-600">{project.description}</p>
            <p className="text-gray-500 text-sm mt-2">
              Category: {project.category}
            </p>
            <p className="text-gray-500 text-sm">
              Price: BDT{project.price}
            </p>
            <p className="text-gray-400 text-xs mt-1">
              Created at: {new Date(project.created_at).toLocaleDateString()}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecentProjects;
