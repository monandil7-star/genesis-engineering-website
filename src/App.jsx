import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Founder from "./components/Founder";
import Contact from "./components/Contact";
import ReelSection from "./components/ReelSection";
import StatsSection from "./components/StatsSection";
import Footer from "./components/Footer";

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

        {/* COMPANY STATISTICS */}
        <StatsSection />

        {/* FACEBOOK REEL / COMPANY MESSAGE */}
        <section id="reel">
          <ReelSection />
        </section>

        {/* PROJECTS */}
        <section id="projects">
          <Projects projects={projects} />
        </section>

        {/* FOUNDER */}
        <section id="founder">
          <Founder data={websiteData.founder} />
        </section>

        {/* CONTACT */}
        <section id="contact">
          <Contact />
        </section>

      </main>

      <Footer />

    </div>
  );
}

export default App;