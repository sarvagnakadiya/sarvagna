// components/Skills.jsx
import skillsData from "../Data/skillsData.json";

const Skills = () => {
  return (
    <>
      <div className="fixed inset-0 bg-black -z-20" />
      <div className="fixed inset-0 bg-gradient-to-br from-black via-black to-blue-900/25 -z-10" />
      <div
        id="skills"
        className="relative min-h-screen py-16 flex items-center"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-8 py-12">
          <h1 className="text-4xl font-bold mb-6 text-white">Skills</h1>
          <p className="text-lg text-white">I do pretty much well in:</p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 rounded-lg border border-green-800 p-4">
            {skillsData.map((language) => (
              <div
                key={language.name}
                className="px-4 py-1  rounded-md transition-transform transform hover:scale-105 hover:shadow-lg"
              >
                <div className="group inline-block">
                  <p className="text-lg font-semibold relative text-white">
                    {language.name}
                    <span className="absolute bottom-0 left-0 bg-green-800 h-0.5 w-0 transition-all group-hover:w-full"></span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
