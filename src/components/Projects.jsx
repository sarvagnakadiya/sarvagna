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
    <div
      id="projects"
      className="bg-black text-white text-gray-800 min-h-screen"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-8 py-12">
        <h1 className="text-4xl font-bold mb-6">Projects</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData
            .slice(0, showAll ? projectsData.length : 3)
            .map((project) => (
              <div key={project.id} className="h-full">
                <div
                  className="bg-gray-800 p-4 rounded-lg shadow cursor-pointer overflow-hidden hover:bg-opacity-50 transition-opacity duration-300"
                  style={{
                    height: "360px",
                  }}
                  onClick={() => openPopup(project)}
                >
                  <h2 className="text-lg font-semibold mb-2">
                    {project.title}
                  </h2>
                  <div className="text-sm text-gray-400 mb-2">
                    {project.category}
                  </div>
                  <p className="text-gray-300 overflow-hidden">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
        </div>
        {!showAll && (
          <button
            onClick={toggleShowAll}
            className="block mx-auto mt-4 bg-gray-800 text-white py-2 px-4 rounded-lg text-center hover:bg-gray-700"
          >
            Show All
          </button>
        )}
        {showAll && (
          <button
            onClick={toggleShowAll}
            className="block mx-auto mt-4 bg-gray-800 text-white py-2 px-4 rounded-lg text-center hover:bg-gray-700"
          >
            Hide
          </button>
        )}
      </div>
      {selectedProject && (
        <ProjectPopup project={selectedProject} onClose={closePopup} />
      )}
    </div>
  );
};

export default Projects;
