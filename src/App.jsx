import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Founder from "./components/Founder";
import FounderVideo from "./components/FounderVideo";
import ReelSection from "./components/ReelSection";
import Contact from "./components/Contact";
import websiteData from "./components/websiteData";

import "./App.css";

function App() {

  const projects = [
    ...(websiteData.completedProjects || []).map((project) => ({
      ...project,
      status: "COMPLETED",
    })),

    ...(websiteData.ongoingProjects || []).map((project) => ({
      ...project,
      status: "ONGOING",
    })),
  ];

  return (
    <div className="app">

      <Navbar />

      <main>

        {/* HOME */}
        <section id="home">
          <Hero data={websiteData} />
        </section>


        {/* ABOUT */}
        <section id="about">
          <About data={websiteData.about} />
        </section>


        {/* SERVICES */}
        <section id="services">
          <Services data={websiteData.services} />
        </section>


        {/* PROJECTS */}
        <section id="projects">
          <Projects projects={projects} />
        </section>


        {/* FOUNDER */}
        <section id="founder">
          <Founder data={websiteData.founder} />
        </section>


        {/* FOUNDER VIDEO */}
        <section id="founder-video">
          <FounderVideo />
        </section>


        {/* FACEBOOK REEL */}
        <section id="reel">
          <ReelSection />
        </section>


        {/* CONTACT */}
        <section id="contact">
          <Contact />
        </section>

      </main>

    </div>
  );
}

export default App;