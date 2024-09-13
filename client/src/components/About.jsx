import React, { useEffect } from "react";
import {
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaDatabase,
  FaGithub,
  FaCode,
  FaGitAlt,
  FaNpm,
  FaFigma,
} from "react-icons/fa";
import AboutImg from "../assets/Heroo.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

function About() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section id="about" className="bg-lime-50  text-rose-950 py-20">
      <div className="container mx-auto flex flex-col lg:flex-row items-center lg:space-x-12 px-4">
        {/* Image Section */}
        <div
          className="flex justify-center lg:w-1/2 mb-8 lg:mb-0"
          data-aos="fade-right"
        >
          <img
            src={AboutImg}
            alt="profile"
            className="w-72 h-96 md:w-80 md:h-100 lg:w-96 lg:h-120 rounded-full lg:rounded-[50%_50%] shadow-xl object-cover border-4 border-lime-200 transform transition duration-1000 ease-in-out hover:scale-105"
          />
        </div>

        {/* Text Section */}
        <div className="lg:w-1/2 text-center lg:text-left" data-aos="fade-left">
          <h2 className="text-5xl font-bold mb-6 leading-tight">About Me</h2>
          <p className="font-secondary text-lg  max-w-xl mx-auto lg:mx-0 leading-relaxed">
            I'm a passionate full-stack developer with expertise in building
            dynamic and responsive web applications. I specialize in JavaScript,
            React, Node.js, and various other technologies.
          </p>
          <p className="font-secondary text-lg  max-w-xl mx-auto lg:mx-0 mt-6 leading-relaxed">
            I love creating solutions that not only meet client needs but also
            offer a delightful user experience. Let's work together to build
            something great!
          </p>

          {/* Skills Section */}
          <div className="mt-12" data-aos="fade-up">
            <h3 className="text-3xl font-bold mb-8 text-rose-950">Skills</h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-6">
              {[
                {
                  icon: <FaJsSquare className="text-yellow-500" />,
                  label: "JavaScript",
                },
                { icon: <FaReact className="text-blue-500" />, label: "React" },
                {
                  icon: <FaNodeJs className="text-green-500" />,
                  label: "Node.js",
                },
                {
                  icon: <FaHtml5 className="text-orange-500" />,
                  label: "HTML5",
                },
                {
                  icon: <FaCss3Alt className="text-blue-600" />,
                  label: "CSS3",
                },
                {
                  icon: <FaDatabase className="text-red-500" />,
                  label: "MongoDB",
                },
                {
                  icon: <FaGithub className="text-gray-700" />,
                  label: "Git & GitHub",
                },
                {
                  icon: <FaCode className="text-purple-500" />,
                  label: "API Development",
                },
                {
                  icon: <FaGitAlt className="text-orange-600" />,
                  label: "Git",
                },
                { icon: <FaNpm className="text-red-600" />, label: "npm" },
                { icon: <FaFigma className="text-red-500" />, label: "Figma" },
              ].map((skill, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center bg-lime-100 p-4 rounded-lg shadow-lg transform transition duration-500 hover:bg-lime-200 hover:scale-110 hover:rotate-3 hover:shadow-2xl"
                  data-aos="zoom-in"
                >
                  <div className="text-3xl mb-2">{skill.icon}</div>
                  <p className="text-sm font-semibold text-gray-800 text-center">
                    {skill.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
