// components/Education.jsx
import React from "react";
import educationData from "../Data/educationData.json";

const Education = () => {
  return (
    <>
      <div className="fixed inset-0 bg-black -z-20" />
      <div className="fixed inset-0 bg-gradient-to-br from-black-900/20 via-black to-blue-900/20 -z-10" />

      <div
        id="education"
        className="relative min-h-screen py-16 flex items-center"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-8 py-12">
          <h1 className="text-4xl font-bold mb-6 text-white">
            Academic Background
          </h1>

          <div className="relative">
            {educationData.map((education) => (
              <div key={education.id} className="mb-8">
                <div className="flex items-center mb-2">
                  <div className="w-4 h-4 bg-white rounded-full mr-2"></div>
                  <div className="text-sm font-bold text-gray-500">
                    {education.startDate} - {education.endDate}
                  </div>
                </div>
                <div className="ml-6">
                  <h2 className="text-lg font-semibold text-white">
                    {education.institution}
                  </h2>
                  <p className="text-gray-400 text-sm mb-2">
                    {education.location}
                  </p>

                  <p className="text-gray-400 test-sm">
                    {education.courceType} | {education.cource}
                  </p>
                  <p className="text-gray-400 mb-2 test-sm">
                    {education.grade}
                  </p>
                </div>
              </div>
            ))}
            {/* Timeline line */}
            <div
              className="absolute top-0 bottom-0 left-1 bg-white w-0.5 mt-1"
              style={{
                height: `calc(100% - ${educationData.length * 2}px)`,
                left: "0.45rem", // Adjust the value as needed
              }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Education;
