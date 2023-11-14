// components/Projects.jsx

import React, { useState } from "react";

const projectsData = [
  {
    id: 1,
    title: "Project Title 1",
    description: "Description of Project 1",
    category: "DeFi",
    githubLink: "https://github.com/yourusername/project1",
  },
  {
    id: 2,
    title: "Project Title 2",
    description: "Description of Project 2",
    category: "AI",
    githubLink: "https://github.com/yourusername/project2",
  },
  {
    id: 1,
    title: "Project Title 1",
    description: "Description of Project 1",
    category: "DeFi",
    githubLink: "https://github.com/yourusername/project1",
  },
  {
    id: 2,
    title: "Project Title 2",
    description: "Description of Project 2",
    category: "AI",
    githubLink: "https://github.com/yourusername/project2",
  },
  {
    id: 1,
    title: "Project Title 1",
    description: "Description of Project 1",
    category: "DeFi",
    githubLink: "https://github.com/yourusername/project1",
  },
  {
    id: 2,
    title: "Project Title 2",
    description: "Description of Project 2",
    category: "AI",
    githubLink: "https://github.com/yourusername/project2",
  },
  {
    id: 1,
    title: "Project Title 1",
    description: "Description of Project 1",
    category: "DeFi",
    githubLink: "https://github.com/yourusername/project1",
  },
  {
    id: 2,
    title: "Project Title 2",
    description: "Description of Project 2",
    category: "AI",
    githubLink: "https://github.com/yourusername/project2",
  },
  {
    id: 1,
    title: "Project Title 1",
    description: "Description of Project 1",
    category: "DeFi",
    githubLink: "https://github.com/yourusername/project1",
  },
  {
    id: 2,
    title: "Project Title 2",
    description: "Description of Project 2",
    category: "AI",
    githubLink: "https://github.com/yourusername/project2",
  },
  {
    id: 1,
    title: "Project Title 1",
    description: "Description of Project 1",
    category: "DeFi",
    githubLink: "https://github.com/yourusername/project1",
  },
  {
    id: 2,
    title: "Project Title 2",
    description: "Description of Project 2",
    category: "AI",
    githubLink: "https://github.com/yourusername/project2",
  },
  // Add more project objects as needed
];

const Projects = () => {
  const [showAllProjects, setShowAllProjects] = useState(false);

  const visibleProjects = showAllProjects
    ? projectsData
    : projectsData.slice(0, 3);

  return (
    <div
      id="projects"
      className="bg-black text-white min-h-screen flex items-center"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-8">
        <h1 className="text-4xl font-bold mb-6">Projects</h1>

        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-8 overflow-x-auto">
          {visibleProjects.map((project) => (
            <a
              key={project.id}
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="project-tile bg-gray-700 p-4 sm:p-6 rounded-lg flex items-center transition-all transform hover:shadow-xl hover:-translate-y-1 hover:bg-gray-800"
            >
              <div className="category-container text-sm text-gray-400">
                {project.category}
              </div>
              <div className="project-details ml-4 sm:ml-6">
                <h2 className="text-lg font-semibold">{project.title}</h2>
                <p className="text-gray-300">{project.description}</p>
              </div>
            </a>
          ))}
        </div>

        {projectsData.length > 3 && (
          <div className="mt-4">
            {showAllProjects ? (
              <button
                className="text-blue-500 hover:underline"
                onClick={() => setShowAllProjects(false)}
              >
                Hide
              </button>
            ) : (
              <button
                className="text-blue-500 hover:underline"
                onClick={() => setShowAllProjects(true)}
              >
                Show All
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
