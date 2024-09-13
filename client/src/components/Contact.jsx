import React, { useEffect, useState } from "react";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/contact", formData)
      .then((response) => alert("Message sent successfully"))
      .catch((error) => console.error(error));
  };

  return (
    <section id="contact" className="bg-white py-11">
      <div className="container mx-auto text-center">
        <h2
          className="text-5xl font-bold mb-8 text-rose-950 font-primary"
          data-aos="fade-up"
        >
          Contact Me
        </h2>
        <form
          onSubmit={handleSubmit}
          className="bg-gradient-to-r from-slate-600 via-yellow-200 to-rose-950 max-w-lg mx-auto p-6 rounded-lg shadow-lg"
          data-aos="fade-right"
        >
          <input
            type="text"
            name="name"
            placeholder="Name"
            onChange={handleChange}
            className="block w-full p-3 mb-4 border border-yellow-400 rounded font-secondary bg-lime-50"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            className="block w-full p-3 mb-4 border border-yellow-600 bg-lime-50 rounded font-secondary"
          />
          <textarea
            name="message"
            placeholder="Message"
            onChange={handleChange}
            className="block w-full p-3 mb-4 border border-lime-600 rounded font-secondary bg-lime-50"
          ></textarea>
          <button
            type="submit"
            className=" text-rose-950 border-2 border-lime-100 px-4 py-2 bg-gradient-to-r from-slate-600 via-yellow-200 to-rose-950 hover:from-yellow-200 hover:to-orange-600"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
