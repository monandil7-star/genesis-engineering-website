import "../StatsSection.css";

function StatsSection() {
  return (
    <section className="stats-section">

      <div className="stats-container">

        <div className="stats-item">
          <span className="stats-number">9+</span>

          <span className="stats-label">
            YEARS OF
            <br />
            EXPERIENCE
          </span>
        </div>


        <div className="stats-divider"></div>


        <div className="stats-item">
          <span className="stats-number">01</span>

          <span className="stats-label">
            ENGINEERING
            <br />
            APPROACH
          </span>
        </div>


        <div className="stats-divider"></div>


        <div className="stats-item">
          <span className="stats-number">100%</span>

          <span className="stats-label">
            COMMITMENT TO
            <br />
            QUALITY
          </span>
        </div>


        <div className="stats-divider"></div>


        <div className="stats-item">
          <span className="stats-number">SIKKIM</span>

          <span className="stats-label">
            BASED IN
            <br />
            INDIA
          </span>
        </div>

      </div>

    </section>
  );
}

export default StatsSection;