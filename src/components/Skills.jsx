// components/Skills.jsx
import React from "react";
import skillsData from "../Data/skillsData.json";

const Skills = () => {
  //   const skillsData = [
  //     { name: "C" },
  //     { name: "C++" },
  //     { name: "Java" },
  //     { name: "Python" },
  //   ];

  return (
    <div id="skills" className="bg-black text-white text-gray-800 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-8 py-12">
        <h1 className="text-4xl font-bold mb-4">Skills</h1>
        <p className="text-lg">Here are some of my awesome skills.</p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 rounded-lg border border-green-800 p-4">
          {skillsData.map((language) => (
            <div
              key={language.name}
              className="px-4 py-1  rounded-md transition-transform transform hover:scale-105 hover:shadow-lg"
            >
              <div className="group inline-block">
                <p className="text-lg font-semibold relative">
                  {language.name}
                  <span className="absolute bottom-0 left-0 bg-green-800 h-0.5 w-0 transition-all group-hover:w-full"></span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
