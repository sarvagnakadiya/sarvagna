import React from "react";
import achievementsData from "../Data/achievementsData.json";

const Achievements = () => {
  return (
    <>
      <div className="fixed inset-0 bg-black -z-20" />
      <div className="fixed inset-0 bg-gradient-to-br from-black-900/20 via-black to-blue-900/20 -z-10" />

      <div
        id="achievements"
        className="relative min-h-screen py-16 flex items-center"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-8 py-12">
          <h1 className="text-4xl font-bold mb-6 text-white">
            Notable Achievements
          </h1>

          <div className="relative">
            {achievementsData.map((achievement) => (
              <div key={achievement.id} className="mb-8">
                <div className="flex items-center mb-2">
                  <div className="w-4 h-4 bg-white rounded-full mr-2"></div>
                  <div className="text-sm font-bold text-gray-500">
                    {achievement.date}
                  </div>
                </div>
                <div className="ml-6">
                  <h2 className="text-lg font-semibold text-white">
                    {achievement.title}
                  </h2>
                  <p className="text-gray-400 text-sm mb-2">
                    {achievement.organization}
                  </p>
                  <p className="text-gray-400">{achievement.description}</p>
                </div>
              </div>
            ))}
            {/* Timeline line */}
            <div
              className="absolute top-0 bottom-0 left-1 bg-white w-0.5 mt-1"
              style={{
                height: `calc(100% - ${achievementsData.length * 2}px)`,
                left: "0.45rem",
              }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Achievements;
