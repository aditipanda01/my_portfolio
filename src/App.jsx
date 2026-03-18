import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import ExperienceTimeline from "./components/ExperienceTimeline";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Achievements from "./components/Achievement";


function App() {
  return (
    <div className="font-sans scroll-smooth">
      <Navbar />
      <main className="pt-24"> {/* Offset for fixed navbar */}
        <Hero />
        <About />
        
        <ExperienceTimeline />
        <Experience />
          <Achievements />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
