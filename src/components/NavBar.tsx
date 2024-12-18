
"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [currentDateTime, setCurretDateTime] = useState(``);
  const [shortDateTime, setShortDateTime] = useState(``);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const fullOptions: Intl.DateTimeFormatOptions = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };
      const shortOptions: Intl.DateTimeFormatOptions = {
        weekday: "short",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };

      setCurretDateTime(
        now.toLocaleDateString("en-US", fullOptions) +
          " " +
          now.toLocaleTimeString("en-US", { hour12: false })
      );

      setShortDateTime(
        now.toLocaleDateString("en-US", shortOptions) +
          " " +
          now.toLocaleTimeString("en-US", { hour12: false })
      );
    };

    updateDateTime();
    const intervalId = setInterval(updateDateTime, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <header className="text-gray-400 body-font shadow-lg bg-white">
      <div className="container mx-auto flex flex-wrap p-4 flex-col md:flex-row items-center">
        {/* Current DateTime */}
        <div className="flex-1 text-black text-sm mb-4 md:mb-0">
          {/* Full DateTime for Large Screens */}
          <span className="hidden md:block">{currentDateTime}</span>
          {/* Short DateTime for Small Screens */}
          <span className="md:hidden">{shortDateTime}</span>
        </div>

        {/* Hamburger Menu Button */}
        <button
          className="inline-flex items-center text-black md:hidden focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Navbar Links */}
        <nav
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } md:flex flex-col md:flex-row items-center w-full md:w-auto gap-4 text-black justify-center`}
        >
          <Link
            href={"/"}
            className="hover:text-red-700 transition-colors duration-300 transform hover:scale-105"
          >
            Home
          </Link>

          <Link
            href={"/about"}
            className="hover:text-red-700 transition-colors duration-300 transform hover:scale-105"
          >
            About
          </Link>

          <Link
            href={"/Blog"}
            className="hover:text-red-700 transition-colors duration-300 transform hover:scale-105"
          >
            Blog
          </Link>

          <Link
            href={"/Contact"}
            className="hover:text-red-700 transition-colors duration-300 transform hover:scale-105"
          >
            Contact
          </Link>

          <a
            href="https://www.linkedin.com/in/neha-bilal-7abab22b4"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="inline-flex items-center bg-blue-800 border-0 py-1 px-3 focus:outline-none hover:bg-blue-900 rounded text-white transition-colors duration-300">
              Linkedin
              <svg
                className="w-4 h-4 ml-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </a>
        </nav>
      </div>
    </header>
  );
}
