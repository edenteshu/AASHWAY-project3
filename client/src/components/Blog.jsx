import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [expandedIndex, setExpandedIndex] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    fetch("/blogs.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setBlogs(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching blogs:", error);
        setError("Failed to fetch blogs.");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p className="text-center text-gray-400">Loading blogs...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">{error}</p>;
  }

  return (
    <section id="blogs" className="bg-lime-50 text-rose-950 py-20">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-5xl font-bold text-center mb-12" data-aos="fade-up">
          Blog Posts
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-slate-400 via-yellow-100 to-rose-950 p-6 rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl"
              data-aos="zoom-in"
            >
              <h3 className="text-lime-600 text-2xl font-bold mb-4">
                {blog.title}
              </h3>
              <p className="mb-4">
                {expandedIndex === index
                  ? blog.content
                  : `${blog.content.substring(0, 100)}...`}
              </p>
              <p className="text-sm">
                By {blog.author} on {new Date(blog.date).toLocaleDateString()}
              </p>
              <br />
              <button
                onClick={() =>
                  setExpandedIndex(expandedIndex === index ? null : index)
                }
                className="inline-block bg-gradient-to-r from-slate-600 via-yellow-200 to-rose-950 px-4 py-2 rounded-full font-semibold transition-colors duration-300 hover:from-yellow-500 hover:to-orange-600"
              >
                {expandedIndex === index ? "Read Less" : "Read More"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Blogs;
