import React from "react";
import experienceData from "../Data/experienceData.json";

const Experience = () => {
  return (
    <>
      <div className="fixed inset-0 bg-black -z-20" />
      <div className="fixed inset-0 bg-gradient-to-br from-black-900/20 via-black to-blue-900/20 -z-10" />

      <div
        id="experience"
        className="relative min-h-screen py-16 flex items-center"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-8 py-12">
          <h1 className="text-4xl font-bold mb-6 text-white">Experience</h1>

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
                  <h2 className="text-lg font-semibold text-white">
                    {experience.title}
                  </h2>
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
    </>
  );
};

export default Experience;
