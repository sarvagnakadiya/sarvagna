import React, { useState, useEffect } from "react";
import profilePicture1 from "../assets/mimojis/1.png";
import profilePicture2 from "../assets/mimojis/2.png";
import profilePicture3 from "../assets/mimojis/3.png";
import profilePicture4 from "../assets/mimojis/4.png";
import profilePicture5 from "../assets/mimojis/5.png";
import profilePicture6 from "../assets/mimojis/6.png";
import profilePicture7 from "../assets/mimojis/7.png";
import profilePicture8 from "../assets/mimojis/8.png";
import profilePicture9 from "../assets/mimojis/9.png";
// ... import the rest of your profile pictures

const profilePictures = [
  profilePicture1,
  profilePicture2,
  profilePicture3,
  profilePicture4,
  profilePicture5,
  profilePicture6,
  profilePicture7,
  profilePicture8,
  profilePicture9,
];

const AboutPage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Update the image index in a cyclic manner
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % profilePictures.length
      );
    }, 5000); // Change the interval to 5000ms (5 seconds)

    return () => {
      // Clear the interval when the component unmounts
      clearInterval(intervalId);
    };
  }, []); // Empty dependency array ensures the effect runs only once on mount

  return (
    <div
      id="about"
      className="bg-black text-white min-h-screen flex items-center"
    >
      <div className="max-w-5xl mx-auto px-8">
        {/* Left side with image */}
        <div className="text-left mb-4">
          <img
            src={profilePictures[currentImageIndex]}
            alt="Profile"
            className="rounded-full h-44 w-44 mr-4 transition-opacity duration-1000 hover:opacity-100"
          />
        </div>

        {/* Right side with text */}
        <div className="text-left">
          <h1 className="text-4xl font-bold mb-2 animate-bounce">GM!</h1>
          <p className="text-lg mb-2">I'm Sarvagna Kadiya</p>
          <p className="text-gray-400">
            Hello, I'm Sarvagna Kadiya, a passionate full stack blockchain
            developer. I specialize in creating decentralized applications and
            smart contracts. With expertise in both front-end and back-end
            technologies, I bring innovative solutions to the world of
            blockchain development.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
