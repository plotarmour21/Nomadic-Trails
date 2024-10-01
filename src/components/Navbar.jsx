import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const isActive = (path) => {
    return location.pathname === path ? "text-yellow-300" : "text-white";
  };

  const handleLinkClick = () => {
    if (isOpen) {
      setIsOpen(false);
    }
  };

  return (
    <nav className="bg-gradient-to-r from-indigo-500 to-purple-600 shadow-xl border-spacing-1">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <h1 className="text-white text-2xl font-bold tracking-wide">
              Nomadic Trail
            </h1>
          </div>
          <div className="hidden md:flex md:space-x-8">
            {[
              { name: "Home", path: "/" },
              { name: "Destinations", path: "/destinations" },
              { name: "Travel Tips", path: "/travel-tips" },
              { name: "Blog", path: "/blog" },
              { name: "About Us", path: "/about" },
              { name: "Contact", path: "/contact" },
            ].map(({ name, path }) => (
              <Link
                key={name}
                to={path}
                className={`hover:text-yellow-300 transition duration-300 ${isActive(
                  path
                )}`}
                onClick={handleLinkClick}
              >
                {name}
              </Link>
            ))}
          </div>
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              aria-expanded={isOpen}
              className="text-white hover:text-yellow-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-300 transition duration-300"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {[
              { name: "Home", path: "/" },
              { name: "Destinations", path: "/destinations" },
              { name: "Travel Tips", path: "/travel-tips" },
              { name: "Blog", path: "/blog" },
              { name: "About Us", path: "/about" },
              { name: "Contact", path: "/contact" },
            ].map(({ name, path }) => (
              <Link
                key={name}
                to={path}
                className={`text-gray-600 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium transition duration-300 ${isActive(
                  path
                )}`}
                onClick={handleLinkClick}
              >
                {name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
