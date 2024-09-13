import React from "react";
import AboutImg from "../assets/photo_2024-08-31_21-38-04.jpg";

function About() {
  return (
    <section id="about" className="bg-white py-20">
      <div className="container mx-auto flex flex-col lg:flex-row items-center lg:space-x-12 px-4">
        {/* Image Section */}
        <div
          data-aos="zoom-in"
          className="flex justify-center lg:w-1/2 mb-8 lg:mb-0"
        >
          <img
            src={AboutImg}
            alt="profile"
            className="w-full max-w-md lg:max-w-full rounded-lg shadow-lg object-cover"
          />
        </div>

        {/* Text Section */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">About Me</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto lg:mx-0">
            I'm a passionate full-stack developer with expertise in building
            dynamic and responsive web applications. I specialize in JavaScript,
            React, Node.js, and various other technologies.
          </p>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto lg:mx-0 mt-4">
            I love creating solutions that not only meet client needs but also
            offer a delightful user experience. Let's work together to build
            something great!
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
