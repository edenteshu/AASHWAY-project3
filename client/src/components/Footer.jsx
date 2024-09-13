import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaWhatsapp,
  FaTelegramPlane,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RxTwitterLogo } from "react-icons/rx";

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-slate-600 via-yellow-200 to-rose-950 text-rose-950 text-center p-6">
      <div className="container mx-auto">
        <p className="font-secondary mb-4">
          &copy; {new Date().getFullYear()} Eden Teshome. All rights reserved.
        </p>
        <div className="flex justify-center space-x-6 mb-4">
          <a
            href="https://github.com/edenteshu"
            target="_blank"
            rel="noopener noreferrer"
            className="text-rose-950 hover:text-lime-200 transition-colors"
          >
            <FaGithub size={30} />
          </a>
          <a
            href="https://linkedin.com/in/Eden-Teshome"
            target="_blank"
            rel="noopener noreferrer"
            className="text-rose-950 hover:text-lime-200 transition-colors"
          >
            <FaLinkedin size={30} />
          </a>
          <a
            href="https://instagram.com/amenteshuu"
            target="_blank"
            rel="noopener noreferrer"
            className="text-rose-950 hover:text-lime-200  transition-colors"
          >
            <FaInstagram size={30} />
          </a>
          <a
            href="https://wa.me/+251952497916"
            target="_blank"
            rel="noopener noreferrer"
            className="text-rose-950 hover:text-lime-200 transition-colors"
          >
            <FaWhatsapp size={30} />
          </a>
          <a
            href="https://t.me/edu_techn"
            target="_blank"
            rel="noopener noreferrer"
            className="text-rose-950 hover:text-lime-200  transition-colors"
          >
            <FaTelegramPlane size={30} />
          </a>
          <a
            href="https://x.com/@Utopiya7"
            target="_blank"
            rel="noopener noreferrer"
            className="text-rose-950 hover:text-lime-200  transition-colors"
          >
            <RxTwitterLogo size={30} />
          </a>
          <a
            href="mailto:edutesh2124@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-rose-950 hover:text-lime-200 transition-colors"
          >
            <MdEmail size={30} />
          </a>
        </div>
        <p className="font-secondary">
          Built with <span className="text-rose-600 ">&hearts;</span> using
          React and TailwindCSS.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
