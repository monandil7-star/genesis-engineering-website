import "../ReelSection.css";

function ReelSection() {
  return (
    <section className="reel-section">

      <div className="reel-container">

        {/* LEFT CONTENT */}
        <div className="reel-content">

          <span className="reel-label">
            ENGINEERING WITH PURPOSE
          </span>

          <h2>
            Building your dream
            <br />
            home?
          </h2>

          <div className="reel-line"></div>

          <p className="reel-intro">
            Let Genesis Engineering &amp; Solutions be with you
            from the very beginning to the final touches.
          </p>

          <p>
            From structural and foundation design to seismic analysis,
            stability certification, construction consultancy, cost
            estimation and more, we provide complete structural
            engineering solutions tailored to your project.
          </p>

          <div className="reel-tagline">
            <span>Strong.</span>
            <span>Safe.</span>
            <span>Stable.</span>
            <span>Economical.</span>
          </div>

          <a
            href="https://www.facebook.com/reel/1353385373632551"
            target="_blank"
            rel="noopener noreferrer"
            className="reel-watch-button"
          >
            WATCH OUR REEL
            <span>↗</span>
          </a>

        </div>


        {/* RIGHT VISUAL */}
        <div className="reel-visual">

          <div className="reel-visual-inner">

            <span className="reel-visual-text">
              GENESIS
            </span>

            <span className="reel-visual-subtext">
              ENGINEERING &amp; SOLUTIONS
            </span>

          </div>

        </div>

      </div>

    </section>
  );
}

export default ReelSection;