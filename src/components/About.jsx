import "../About.css";
import { getImageUrl } from "../services/imageURL";

const defaultAbout = {
  description:
    "Genesis Engineering and Solutions is a structural engineering firm committed to delivering safe, efficient, and innovative engineering solutions. With a foundation built on technical excellence and attention to detail, we partner with clients to bring their construction visions to life — from concept to completion. We combine rigorous structural analysis with modern design methodologies to ensure every project meets the highest standards of safety, durability, and performance. A core area of our expertise lies in earthquake-resistant design — engineering structures that are built to withstand seismic forces, protecting lives and assets for generations to come.",

  mission:
    "To provide reliable and innovative structural engineering solutions that stand the test of time, while maintaining the highest standards of quality, integrity, and client satisfaction.",

  imageUrl: "/images/about-structure.png",

  whyChooseUs: [
    "Thorough structural analysis and design expertise",
    "Proficiency in modern tools including BIM, AutoCAD, and structural software",
    "Collaborative approach with architects, contractors, and clients",
    "Practical and cost-effective designs",
    "Commitment to timely delivery and transparent communication",
  ],
};

function About({ data }) {
  const about = data || defaultAbout;

  const imageUrl =
    about.imageUrl && about.imageUrl.trim() !== ""
      ? getImageUrl(about.imageUrl)
      : getImageUrl("/images/about-structure.png");

  return (
    <section className="about-page" id="about">

      {/* =====================================================
          ABOUT INTRODUCTION
      ===================================================== */}

      <section className="about-intro">

        {/* LEFT - MAIN ENGINEERING IMAGE */}
        <div className="about-intro-image">

          <div className="about-main-frame">

            <div className="about-image-inner">
              <img
                src={imageUrl}
                alt="Genesis Engineering structural engineering"
              />
            </div>

            <div className="about-image-label">
              <span>01</span>
              <strong>STRUCTURAL ENGINEERING</strong>
            </div>

          </div>

        </div>


        {/* RIGHT - CONTENT */}
        <div className="about-intro-content">

          <span className="about-label">
            ABOUT GENESIS
          </span>

          <h1>
            Engineering
            <br />
            with purpose.
          </h1>

          <div className="about-line"></div>

          <p>
            {about.description}
          </p>

        </div>

      </section>


      {/* =====================================================
          ENGINEERING GALLERY
      ===================================================== */}

      <section className="about-gallery">

        <div className="about-gallery-heading">

          <div>
            <span className="section-small-title">
              OUR APPROACH
            </span>

            <h2>
              Engineering
              <br />
              in detail.
            </h2>
          </div>

          <p>
            From structural modelling to detailed engineering analysis,
            every project is approached with precision, practicality and
            long-term performance in mind.
          </p>

        </div>


        <div className="about-gallery-grid">

          {/* IMAGE 1 */}
          <div className="about-gallery-item about-gallery-large">

            <img
              src={getImageUrl("/images/devlok-structural-model.png")}
              alt="Structural engineering model"
            />

            <div className="about-gallery-caption">
              <span>01</span>
              <strong>STRUCTURAL MODELLING</strong>
            </div>

          </div>


          {/* IMAGE 2 */}
          <div className="about-gallery-item">

            <img
              src={getImageUrl("/images/jerry-residence-structural-model.png")}
              alt="Residential structural engineering"
            />

            <div className="about-gallery-caption">
              <span>02</span>
              <strong>RESIDENTIAL DESIGN</strong>
            </div>

          </div>


          {/* IMAGE 3 */}
          <div className="about-gallery-item">

            <img
              src={getImageUrl("/images/mangkhim-tingmo.png")}
              alt="Genesis Engineering project"
            />

            <div className="about-gallery-caption">
              <span>03</span>
              <strong>PROJECT ENGINEERING</strong>
            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          MISSION
      ===================================================== */}

      <section className="about-mission">

        <div className="mission-number">
          01
        </div>

        <div className="mission-content">

          <span className="section-small-title">
            OUR MISSION
          </span>

          <h2>
            Building safer,
            <br />
            stronger futures.
          </h2>

          <p>
            {about.mission}
          </p>

        </div>

      </section>


      {/* =====================================================
          WHY CHOOSE US
      ===================================================== */}

      <section className="about-why">

        <div className="why-heading">

          <span className="section-small-title">
            WHY CHOOSE US
          </span>

          <h2>
            Expertise that
            <br />
            makes a difference.
          </h2>

        </div>


        <div className="why-list">

          {about.whyChooseUs?.map((item, index) => (

            <div
              className="why-item"
              key={index}
            >

              <span className="why-number">
                {String(index + 1).padStart(2, "0")}
              </span>

              <p>
                {item}
              </p>

              <span className="why-arrow">
                ↗
              </span>

            </div>

          ))}

        </div>

      </section>


      {/* =====================================================
          ENGINEERING STATEMENT
      ===================================================== */}

      <section className="about-statement">

        <div className="statement-overlay">

          <span>
            GENESIS ENGINEERING & SOLUTIONS
          </span>

          <h2>
            Designed for strength.
            <br />
            Built for tomorrow.
          </h2>

        </div>

      </section>

    </section>
  );
}

export default About;