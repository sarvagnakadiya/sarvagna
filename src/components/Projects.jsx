import React, { useState, useEffect } from "react";
import projectsData from "../Data/projectsData.json";
import ProjectPopup from "./ProjectPopup";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const openPopup = (project) => {
    setSelectedProject(project);
  };

  const closePopup = () => {
    setSelectedProject(null);
  };

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [selectedProject]);

  return (
    <div id="projects" className="relative min-h-screen">
      {/* Fixed background gradients */}
      <div className="fixed inset-0 bg-black -z-20" />
      <div className="fixed inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20 -z-10" />

      {/* Animated gradient orbs */}
      <div className="fixed top-1/3 -right-48 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse -z-10" />
      <div className="fixed bottom-1/4 -left-24 w-72 h-72 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-8 py-12 relative">
        <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Projects
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData
            .slice(0, showAll ? projectsData.length : 3)
            .map((project) => (
              <div key={project.id} className="h-full">
                <div
                  className="relative group rounded-lg shadow-lg overflow-hidden transition-all duration-300 cursor-pointer h-[360px]"
                  onClick={() => openPopup(project)}
                >
                  {/* Card background with gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 opacity-95" />

                  {/* Hover gradient effect */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Content */}
                  <div className="relative p-6 h-full flex flex-col">
                    <h2 className="text-lg font-semibold mb-2 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                      {project.title}
                    </h2>
                    <div className="text-sm text-gray-400 mb-2">
                      {project.category}
                    </div>
                    <p className="text-gray-300 flex-grow">
                      {project.description}
                    </p>

                    {/* Subtle gradient line at bottom */}
                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500/0 via-purple-500/25 to-blue-500/0" />
                  </div>
                </div>
              </div>
            ))}
        </div>

        <button
          onClick={toggleShowAll}
          className="relative group overflow-hidden rounded-lg mx-auto mt-8 block"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-75 transition-transform duration-300 group-hover:scale-105" />
          <span className="relative px-6 py-2 block bg-black bg-opacity-90 text-white font-medium transition-all duration-300 group-hover:bg-opacity-50">
            {showAll ? "Show Less" : "Show All"}
          </span>
        </button>
      </div>

      {selectedProject && (
        <ProjectPopup project={selectedProject} onClose={closePopup} />
      )}
    </div>
  );
};

export default Projects;
