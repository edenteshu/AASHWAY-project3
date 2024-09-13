import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    fetch("/projects.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch projects.");
        }
        return response.json();
      })
      .then((data) => {
        setProjects(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p className="text-center text-gray-400">Loading projects...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">{error}</p>;
  }

  return (
    <section id="projects" className=" text-rose-950 bg-lime-50 py-20">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2
          className="text-5xl font-bold text-center  mb-12"
          data-aos="fade-up"
        >
          My Projects
        </h2>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gradient-to-r from-slate-400 via-yellow-100 to-rose-950  p-6 rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl"
              data-aos="zoom-in"
            >
              <h3 className=" text-lime-600 text-2xl font-bold mb-4 ">
                {project.title}
              </h3>
              <p className=" mb-4">{project.description}</p>
              <p className="mb-4">
                <strong>Tech Stack:</strong> {project.techStack.join(", ")}
              </p>
              <a
                href={project.link}
                className="inline-block bg-gradient-to-r from-slate-600 via-yellow-200 to-rose-950 px-4 py-2 rounded-full font-semibold transition-colors duration-300 hover:from-yellow-500 hover:to-orange-600"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
