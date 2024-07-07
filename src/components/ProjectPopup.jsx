/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";

const ProjectPopup = ({ project, onClose }) => {
  const [popupSize, setPopupSize] = useState({
    width: "80%",
    height: project.youtubeId ? "80%" : "60%",
  });
  const popupRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      const height = project.youtubeId
        ? window.innerHeight * 0.8
        : window.innerHeight * 0.6;
      const width = window.innerWidth * 0.8;
      setPopupSize({ width: `${width}px`, height: `${height}px` });
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [project.youtubeId]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <div className="fixed top-0 left-0 z-50 w-full h-full bg-black  bg-opacity-50 flex justify-center items-center">
      <div
        ref={popupRef}
        className="bg-opacity-80 rounded-lg shadow-xl overflow-hidden mt-16 backdrop-blur-lg border border-solid border-1 "
        style={{
          width: popupSize.width,
          height: popupSize.height,
        }}
      >
        <div
          className="p-8 overflow-y-auto"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <div className="flex justify-end">
            <button onClick={onClose} className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <h1 className="text-xl font-semibold mb-2">{project.title}</h1>
          <div className="text-lg text-gray-400 mb-2">{project.category}</div>
          <p className="text-lg text-gray-300 overflow-hidden">
            {project.description}
          </p>
          {project.youtubeId && (
            <div className="mb-4 mt-4">
              <iframe
                width="100%"
                height="315"
                src={`https://www.youtube.com/embed/${project.youtubeId}`}
                title="YouTube video player"
                allowFullScreen
              ></iframe>
            </div>
          )}
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-opacity-80 backdrop-blur-lg">
          <div className="flex justify-between w-full gap-2">
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-gray-800 text-white py-2 px-4 rounded-lg text-center hover:bg-gray-700"
              >
                Visit GitHub
              </a>
            )}
            {project.projectLink && (
              <a
                href={project.projectLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-gray-800 text-white py-2 px-4 rounded-lg text-center hover:bg-gray-700"
              >
                Project Link
              </a>
            )}
            {project.livelink && (
              <a
                href={project.livelink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-gray-800 text-white py-2 px-4 rounded-lg text-center hover:bg-gray-700"
              >
                Live Link
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPopup;
