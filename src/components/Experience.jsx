import React from "react";
import experienceData from "../Data/experienceData.json";

const Experience = () => {
  return (
    <div
      id="experience"
      className="bg-black text-white text-gray-800 min-h-screen"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-8 py-12">
        <h1 className="text-4xl font-bold mb-6">Experience</h1>

        <div className="relative">
          {experienceData.map((experience) => (
            <div key={experience.id} className="mb-8">
              <div className="flex items-center mb-2">
                <div className="w-4 h-4 bg-white rounded-full mr-2"></div>
                <div className="text-sm font-bold text-gray-500">
                  {experience.startDate} - {experience.endDate}
                </div>
              </div>
              <div className="ml-6">
                <h2 className="text-lg font-semibold">{experience.title}</h2>
                <p className="text-gray-400 mb-2 test-sm">
                  {experience.company} - {experience.location}
                </p>
                <p className="text-gray-600">{experience.description}</p>
              </div>
            </div>
          ))}
          {/* Timeline line */}
          <div
            className="absolute top-0 bottom-0 left-1 bg-white w-0.5 mt-1"
            style={{
              height: `calc(100% - ${experienceData.length * 2}px)`,
              left: "0.45rem", // Adjust the value as needed
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
