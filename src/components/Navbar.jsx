// components/Navbar.jsx
import React, { useState, useEffect } from "react";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import CustomConnectButton from "./CustomConnectButton";
import { Link as ScrollLink, Events } from "react-scroll";

const navigation = [
  { name: "About", href: "about", current: false },
  { name: "Projects", href: "projects", current: false },
  { name: "Skills", href: "skills", current: false },
  { name: "Education", href: "education", current: false },
  { name: "Experience", href: "experience", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const [currentSection, setCurrentSection] = useState("");

  const handleScroll = () => {
    const navbarHeight = 65; // Replace with your actual navbar height
    const scrollY = window.scrollY || window.pageYOffset;

    navigation.forEach((item) => {
      const element = document.getElementById(item.href);
      if (element) {
        const rect = element.getBoundingClientRect();
        const offset = rect.top - navbarHeight;
        // console.log(
        //   `Element ID: ${item.href}, Top: ${offset}, Bottom: ${rect.bottom}`
        // );
        if (offset <= 0 && rect.bottom > 0) {
          setCurrentSection(item.href);
        }
      } else {
        console.warn(`Element with ID ${item.href} not found.`);
      }
    });
  };

  useEffect(() => {
    Events.scrollEvent.register("begin", handleScroll);
    window.addEventListener("scroll", handleScroll);

    return () => {
      Events.scrollEvent.remove("begin");
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Disclosure
      as="nav"
      id="myNavbar"
      className="bg-black fixed top-0 w-full z-50"
    >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <ScrollLink
                        key={item.name}
                        to={item.href}
                        spy={true}
                        smooth={true}
                        offset={-64}
                        duration={500}
                        className={classNames(
                          currentSection === item.href
                            ? "bg-gray-900 text-white cursor-pointer"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white cursor-pointer",
                          "rounded-md px-3 py-2 text-base font-medium"
                        )}
                      >
                        {item.name}
                      </ScrollLink>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <a
                  href="https://sarvagna.vercel.app/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-teal-500 hover:bg-teal-600 text-gray-800 font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
                >
                  View Resume
                </a>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <ScrollLink
                  key={item.name}
                  to={item.href}
                  spy={true}
                  smooth={true}
                  offset={-64}
                  duration={500}
                  className={classNames(
                    currentSection === item.href
                      ? "bg-gray-900 text-white cursor-pointer"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white cursor-pointer",
                    "block rounded-md px-3 py-2 text-lg font-medium"
                  )}
                >
                  {item.name}
                </ScrollLink>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
