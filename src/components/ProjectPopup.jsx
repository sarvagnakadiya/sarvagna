import React, { useEffect, useRef, useState } from "react";

const ProjectPopup = ({ project, onClose }) => {
  const [popupSize, setPopupSize] = useState({
    maxWidth: "90%",
    maxHeight: "90%",
  });
  const popupRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      const maxHeight = window.innerHeight * 0.9; // Set the maximum height to 90% of the window height
      const maxWidth = window.innerWidth * 0.9; // Set the maximum width to 90% of the window width
      setPopupSize({ maxWidth: `${maxWidth}px`, maxHeight: `${maxHeight}px` });
    };

    handleResize(); // Set initial size
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
    <div className="fixed top-0 left-0 z-50 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
      <div
        ref={popupRef}
        className="bg-opacity-80 rounded-lg shadow-xl max-w-3xl w-11/12 h-5/6 overflow-y-scroll mt-16 backdrop-blur-lg border border-solid border-1"
        style={{
          ...popupSize,
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        <div className="p-8">
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

          <h1 className="text-lg font-semibold mb-2">{project.title}</h1>
          <div className="text-sm text-gray-00 mb-2">{project.category}</div>
          <p className="text-gray-300 overflow-hidden">{project.description}</p>
          {/* Add YouTube iframe below description */}
          {project.youtubeId ? (
            <>
              <div className="mb-4">
                {/* Replace "YOUTUBE_VIDEO_ID" with your YouTube video ID */}
                <iframe
                  width="100%"
                  height="315"
                  src={`https://www.youtube.com/embed/${project.youtubeId}`}
                  title="YouTube video player"
                  allowFullScreen
                ></iframe>
              </div>
            </>
          ) : null}
          <a
            href={project.githubLink}
            className="block bg-gray-800 text-white py-2 px-4 rounded-lg text-center hover:bg-gray-700"
          >
            Visit GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectPopup;
