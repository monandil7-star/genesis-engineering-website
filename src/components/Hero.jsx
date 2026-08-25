import { useEffect, useState } from "react";
import "../Hero.css";

const heroImages = [
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2400&q=90",
  "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=2400&q=90",
  "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=2400&q=90",
  "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=2400&q=90",
];

function Hero({ data, onExplore }) {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((previous) =>
        (previous + 1) % heroImages.length
      );
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  /*
   * Calculate project count from website data.
   * This avoids showing a hard-coded number such as 50+.
   */
  const completedCount = data?.completedProjects?.length || 0;
  const ongoingCount = data?.ongoingProjects?.length || 0;
  const totalProjects = completedCount + ongoingCount;

  const handleExplore = () => {
    if (onExplore) {
      onExplore();
      return;
    }

    document
      .getElementById("projects")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero">

      {/* =========================================
          BACKGROUND IMAGE SLIDES
      ========================================== */}

      {heroImages.map((image, index) => (
        <div
          key={image}
          className={`hero-background ${
            index === currentImage ? "active" : ""
          }`}
          style={{
            backgroundImage: `url("${image}")`,
          }}
        />
      ))}


      {/* =========================================
          PREMIUM OVERLAY
      ========================================== */}

      <div className="hero-overlay"></div>


      {/* =========================================
          HERO CONTENT
      ========================================== */}

      <div className="hero-content">

        <div className="hero-eyebrow">
          <span></span>

          STRUCTURAL ENGINEERING CONSULTANTS

          <span></span>
        </div>


        <h1>
          Safe.
          <br />

          <span className="hero-white">
            Strong.
          </span>

          <br />

          <span className="hero-gold">
            Innovative.
          </span>
        </h1>


        <p className="hero-description">
          Genesis Engineering &amp; Solutions delivers
          structural engineering solutions built around
          safety, precision and long-term performance.
        </p>


        <div className="hero-actions">

          <button
            className="hero-explore"
            onClick={handleExplore}
          >
            <span>EXPLORE PROJECTS</span>

            <strong>→</strong>
          </button>


          <a
            href="#contact"
            className="hero-contact"
          >
            CONTACT US

            <span>↗</span>
          </a>

        </div>

      </div>


      {/* =========================================
          SLIDER INDICATORS
      ========================================== */}

      <div className="hero-indicators">

        {heroImages.map((_, index) => (
          <button
            key={index}
            className={
              index === currentImage
                ? "active"
                : ""
            }
            onClick={() => setCurrentImage(index)}
            aria-label={`Show image ${index + 1}`}
          />
        ))}

      </div>


      {/* =========================================
          BOTTOM INFORMATION BAR
      ========================================== */}

      <div className="hero-stats">

        <div className="hero-stat">

          <strong>
            9+
          </strong>

          <span>
            YEARS
            <br />
            EXPERIENCE
          </span>

        </div>


        <div className="hero-stat-divider"></div>


        <div className="hero-stat">

          <strong>
            {totalProjects > 0 ? `${totalProjects}+` : "—"}
          </strong>

          <span>
            PROJECTS
            <br />
            DELIVERED &amp; ONGOING
          </span>

        </div>


        <div className="hero-stat-divider"></div>


        <div className="hero-stat">

          <strong>
            SIKKIM
          </strong>

          <span>
            REGIONAL
            <br />
            EXPERTISE
          </span>

        </div>


        <div className="hero-scroll">
          SCROLL
          <span>↓</span>
        </div>

      </div>

    </section>
  );
}

export default Hero;