// components/Education.jsx
import React from "react";
import educationData from "../Data/educationData.json";

const Education = () => {
  return (
    <div
      id="education"
      className="bg-black text-white text-gray-800 min-h-screen"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-8 py-12">
        <h1 className="text-4xl font-bold mb-6">Education</h1>

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
                <h2 className="text-lg font-semibold">
                  {education.institution}
                </h2>
                <p className="text-gray-400 text-sm mb-2">
                  {education.location}
                </p>

                <p className="text-gray-400 test-sm">
                  {education.courceType} | {education.cource}
                </p>
                <p className="text-gray-400 mb-2 test-sm">{education.grade}</p>
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
  );
};

export default Education;
