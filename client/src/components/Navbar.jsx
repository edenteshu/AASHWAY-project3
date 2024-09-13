import React, { useState } from "react";
import { Link } from "react-scroll";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className=" bg-gradient-to-r from-slate-600 via-yellow-200 to-rose-950 text-rose-950  p-4 fixed w-full z-20 top-0 shadow-lg transition-all duration-300 ease-in-out">
      <div className="  container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold font-primary">
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="cursor-pointer text-lime-200 hover:text-rose-950"
            onClick={() => setIsOpen(false)} // Close the menu when a link is clicked
          >
            Edu Tech
          </Link>
        </div>

        {/* Hamburger Menu Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg
              className="w-6 h-6 text-lime-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              ></path>
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <ul
          className={`md:flex md:items-center md:space-x-6 md:relative md:bg-transparent md:py-0 absolute left-0 w-full transition-transform duration-500 ease-in-out transform ${
            isOpen
              ? "top-full bg-gradient-to-r from-slate-600 via-yellow-200 to-rose-950 py-6 opacity-100"
              : "-translate-y-full opacity-0 md:opacity-100 md:translate-y-0"
          }`}
        >
          <li>
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="block md:inline-block p-2 cursor-pointer hover:text-lime-100 transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="block md:inline-block p-2 cursor-pointer hover:text-lime-100 transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="blogs"
              smooth={true}
              duration={500}
              className="block md:inline-block p-2 cursor-pointer hover:text-lime-100 transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="block md:inline-block p-2 cursor-pointer hover:text-lime-200 transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
