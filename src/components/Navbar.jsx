import React, { useState, useEffect } from "react";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
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
    const navbarHeight = 65;
    const scrollY = window.scrollY || window.pageYOffset;

    navigation.forEach((item) => {
      const element = document.getElementById(item.href);
      if (element) {
        const rect = element.getBoundingClientRect();
        const offset = rect.top - navbarHeight;
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
    <Disclosure as="nav" id="myNavbar" className="fixed top-0 w-full z-50">
      {({ open }) => (
        <>
          <div className="relative">
            {/* Gradient background */}
            <div className="absolute inset-0 bg-black bg-opacity-95">
              <div className="absolute inset-0 bg-gradient-to-r" />
            </div>

            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 relative">
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
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
                            "relative rounded-md px-3 py-2 text-base font-medium transition-all duration-300 ease-in-out",
                            currentSection === item.href
                              ? "text-white"
                              : "text-gray-300 hover:text-white"
                          )}
                        >
                          {item.name}
                          {/* Animated underline */}
                          <div
                            className={classNames(
                              "absolute bottom-0 left-0 h-0.5 w-full transform transition-all duration-300",
                              currentSection === item.href
                                ? "bg-blue-900"
                                : "bg-blue-100 scale-x-0 group-hover:scale-x-100"
                            )}
                          />
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
                    className="relative group overflow-hidden rounded-full"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-900 transition-transform duration-300 group-hover:scale-105" />
                    <div
                      className="relative px-6 py-2 bg-black bg-opacity-90 text-white font-mono font-bold 
            
            transition-all duration-300 
            before:absolute before:inset-0 before:bg-cyan-500/10 before:translate-y-full before:hover:translate-y-0 before:transition-transform before:duration-300
            hover:scale-[1.02] hover:hover:shadow-[0_0_15px_rgba(34,211,238,0.1)] 
            flex items-center gap-2 overflow-hidden group"
                    >
                      <span className="text-cyan-500">&gt;</span>
                      View Resume
                      <span className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2 bg-black bg-opacity-95">
              {navigation.map((item) => (
                <ScrollLink
                  key={item.name}
                  to={item.href}
                  spy={true}
                  smooth={true}
                  offset={-64}
                  duration={500}
                  className={classNames(
                    "block rounded-md px-3 py-2 text-lg font-medium transition-colors duration-300",
                    currentSection === item.href
                      ? "bg-gradient-to-r from-blue-900/40 to-blue-500/10 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white"
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
