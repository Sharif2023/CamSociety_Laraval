import React from "react";

const RecentProjects = ({ projects }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
      {projects.length > 0 ? (
        projects.map((project) => (
          <div
            key={project.id}
            className="group relative bg-white/[0.02] border border-white/10 rounded-[2.5rem] p-6 hover:border-[#FF3300]/50 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(255,51,0,0.1)]"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] mb-6">
              <img
                src={
                  project.image_url && project.image_url.startsWith("http")
                    ? project.image_url
                    : `/PhotoSells/${project.image_url}`
                }
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                <span className="text-[10px] font-black text-white uppercase tracking-widest px-3 py-1 bg-[#FF3300] rounded-full shadow-lg">
                  {project.category}
                </span>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between items-start">
                <h3 className="text-xl font-bold text-white font-['Playfair_Display'] group-hover:text-[#FF3300] transition-colors line-clamp-1">
                  {project.title}
                </h3>
                <span className="text-[#FF3300] font-black text-sm">৳{(project.price * 100).toLocaleString()}</span>
              </div>
              <p className="text-gray-500 text-sm font-medium line-clamp-2 leading-relaxed">
                {project.description}
              </p>
              <div className="pt-4 flex items-center justify-between border-t border-white/5">
                <span className="text-[9px] font-black text-gray-600 uppercase tracking-widest">
                  Published {new Date(project.created_at).toLocaleDateString()}
                </span>
                <button className="text-[10px] font-black text-white uppercase tracking-widest hover:text-[#FF3300] transition-colors">
                  Details →
                </button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="col-span-full py-20 text-center rounded-[2.5rem] border-2 border-dashed border-white/5">
            <p className="text-gray-600 font-medium italic">No projects added to the portfolio yet.</p>
        </div>
      )}
    </div>
  );
};

export default RecentProjects;
