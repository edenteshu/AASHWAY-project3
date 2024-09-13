import React, { useEffect } from "react";
import { Link } from "react-scroll";
import AOS from "aos";
import "aos/dist/aos.css";
import Heroimg from "../assets/Hero.jpg";

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section
      id="home"
      className="bg-lime-50  text-rose-950 py-20 min-h-screen flex items-center"
    >
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center justify-between">
        {/* Text Section */}
        <div
          className=" lg:w-1/2 text-center lg:text-left"
          data-aos="fade-right"
        >
          <h1 className=" font-primary  text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Hi, I'm Eden Teshome
          </h1>
          <p className="font-secondary  text-lg lg:text-xl mb-8">
            I am a full-stack developer specializing in building exceptional
            digital experiences. Currently focused on crafting clean and
            scalable solutions.
          </p>
          <div className="flex justify-center lg:justify-start space-x-4">
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="  bg-gradient-to-r from-slate-600 via-yellow-200 to-rose-950  hover:from-yellow-200 hover:to-orange-600 text-rose-950 hover:text-red-500 font-semibold py-3 px-6 rounded-lg shadow-md  transition duration-300 cursor-pointer border-2 border-lime-300"
            >
              Contact Me
            </Link>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="bg-gradient-to-r from-slate-600 via-yellow-200 to-rose-950  hover:from-yellow-200 hover:to-orange-600 border-2 border-lime-300 text-rose-950 font-semibold py-3 px-6 rounded-lg  hover:text-red-500 transition duration-300 cursor-pointer"
            >
              View Projects
            </Link>
          </div>
        </div>

        {/* Image Section */}
        <div
          className="lg:w-1/2 mt-10 lg:mt-0 flex justify-center lg:justify-end"
          data-aos="fade-left"
        >
          <img
            src={Heroimg}
            alt="Profile"
            className="w-full h-auto max-w-md rounded-lg object-cover shadow-lg transform hover:scale-105 transition duration-500 ease-in-out"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
