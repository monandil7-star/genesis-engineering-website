import "../FounderVideo.css";

function FounderVideo() {
  return (
    <section className="founder-video-section">

      <div className="founder-video-container">

        {/* LEFT CONTENT */}
        <div className="founder-video-content">

          <div className="founder-video-eyebrow">
            <span></span>
            THE VISION BEHIND GENESIS
          </div>

          <h2>
            Engineering
            <br />
            <span>with purpose.</span>
          </h2>

          <p>
            Discover the story, vision, and engineering philosophy
            behind Genesis Engineering & Solutions.
          </p>

          <p>
            Hear directly from our founder about our commitment to
            safe, sustainable, and innovative structural engineering.
          </p>

          <div className="founder-video-signature">
            <strong>Er. Reshma Biswakarma</strong>
            <span>Founder & Principal Engineer</span>
          </div>

        </div>


        {/* RIGHT VIDEO */}
        <div className="founder-video-wrapper">

          <div className="founder-video-frame">

            <video
              className="founder-video"
              controls
              preload="metadata"
              playsInline
            >
              <source
                src="/videos/founder-introduction-compressed.mp4"
                type="video/mp4"
              />

              Your browser does not support the video tag.
            </video>

            <div className="founder-video-label">
              <span>01</span>
              FOUNDER'S MESSAGE
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default FounderVideo;