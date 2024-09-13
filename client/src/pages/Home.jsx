import React from "react";
import About from "../components/About";
import Projects from "../components/Projects";
import Blog from "../components/Blog";
import Contact from "../components/Contact";
import Hero from "../components/Hero";

function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Projects />
      <Blog />
      <Contact />
    </div>
  );
}

export default Home;
