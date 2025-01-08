import { useState, useEffect } from "react";
import profilePicture1 from "../assets/mimojis/1.png";
import profilePicture2 from "../assets/mimojis/2.png";
import profilePicture3 from "../assets/mimojis/4.png";
import profilePicture4 from "../assets/mimojis/5.png";
import profilePicture5 from "../assets/mimojis/6.png";
import profilePicture6 from "../assets/mimojis/7.png";
import profilePicture7 from "../assets/mimojis/8.png";
import profilePicture8 from "../assets/mimojis/9.png";
import facebook from "../assets/socials/icons8-facebook-480.png";
import github from "../assets/socials/icons8-github-480.png";
import instagram from "../assets/socials/icons8-instagram-480.png";
import linkedIn from "../assets/socials/icons8-linkedin-480.png";
import reddit from "../assets/socials/icons8-reddit-480.png";
import telegram from "../assets/socials/icons8-telegram-app-480.png";
import twitter from "../assets/socials/icons8-twitterx-480-2.png";
import discord from "../assets/socials/icons8-discord-480.png";
import farcaster from "../assets/socials/farcaster.png";

const profilePictures = [
  profilePicture1,
  profilePicture2,
  profilePicture3,
  profilePicture4,
  profilePicture5,
  profilePicture6,
  profilePicture7,
  profilePicture8,
];

const socialLinks = {
  farcaster: {
    icon: farcaster,
    url: "https://warpcast.com/sarvagna",
  },
  twitter: {
    icon: twitter,
    url: "https://twitter.com/sarvagnakadiya",
  },
  github: {
    icon: github,
    url: "https://github.com/sarvagnakadiya",
  },
  instagram: {
    icon: instagram,
    url: "https://www.instagram.com/sarvagna13",
  },
  facebook: {
    icon: facebook,
    url: "https://www.facebook.com/sarvagnakadiya",
  },
  linkedIn: {
    icon: linkedIn,
    url: "https://www.linkedin.com/in/sarvagnakadiya",
  },
  reddit: {
    icon: reddit,
    url: "https://www.reddit.com/user/sarvagnakadiya",
  },
  telegram: {
    icon: telegram,
    url: "https://t.me/squirtle_snap",
  },
  discord: {
    icon: discord,
    url: "https://discordapp.com/users/.0xdab",
  },
};

const AboutPage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleRedirect = (url) => {
    window.open(url, "_blank");
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % profilePictures.length
      );
    }, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <>
      {/* Fixed background elements */}
      <div className="" />
      <div className="" />

      {/* Animated gradient orbs */}
      <div className="" />
      <div className="" />

      <div id="about" className="relative min-h-screen py-16 flex items-center">
        <div className="max-w-5xl mx-auto px-4 sm:px-8 w-full">
          {/* Profile Image with animation */}
          <div className="mb-8 relative group">
            <img
              src={profilePictures[currentImageIndex]}
              alt="Profile"
              className="relative h-44 w-44 transition-all duration-600 group-hover:scale-105"
            />
          </div>

          {/* Text Content */}
          <div className="text-left mb-8">
            <h1 className="text-2xl font-bold mb-4 bg-gradient-to-r from-red-100 to-blue-400 bg-clip-text text-transparent">
              hullo!
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed">
              gm, I'm Sarvagna Kadiya;{" "}
              <span className="font-black text-xl">buildor</span>,{" "}
              <span className="font-black text-xl">developor</span>, and an
              aspiring web3 <span className="font-black text-xl">foundor </span>
              who totally believes
              <br /> their product will change the world{" "}
              <span className="italic text-gray-400">
                (or at least make a dent) (eventually)
              </span>
              .
              <br />
              Defi, AI, payments, crypto—yap; Cars, F1—
              <span className="text-lg">yap</span>-
              <span className="text-xl">yap</span>-
              <span className="text-2xl">yap</span>
              <br /> I’m your go-to yap buddy for all things buzzword-worthy.
              <br />
              Awkward on socials, extrovert IRL{" "}
              <span className="italic text-gray-400">(yeah, it’s a vibe)</span>
            </p>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap justify-center sm:justify-start items-center gap-2">
            {Object.entries(socialLinks).map(([platform, { icon, url }]) => (
              <button
                key={platform}
                onClick={() => handleRedirect(url)}
                className="group relative"
              >
                <div className="" />
                <div
                  className="relative w-8 h-8 bg-center bg-cover transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-6"
                  style={{ backgroundImage: `url(${icon})` }}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
