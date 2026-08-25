import { getImageUrl } from "../services/imageURL";
import "../Founder.css";

function Founder({ data }) {
  if (!data) {
    return null;
  }

  const imageUrl = data.imageUrl
    ? getImageUrl(data.imageUrl)
    : "";

  return (
    <section className="founder-page" id="founder">
      <div className="founder-container">

        {/* ================================
            LEFT - FOUNDER IMAGE
        ================================= */}

        <div className="founder-image-section">

          <div className="founder-image-wrapper">

            <img
              src={imageUrl}
              alt={data.name || "Genesis Engineering Founder"}
              className="founder-image"
            />

            {/* SINGLE IMAGE LABEL */}
            <div className="founder-image-label">
              <span className="founder-image-number">01</span>
              <span>FOUNDER & PRINCIPAL ENGINEER</span>
            </div>

          </div>

        </div>


        {/* ================================
            RIGHT - FOUNDER INFORMATION
        ================================= */}

        <div className="founder-content">

          <span className="founder-label">
            MEET OUR FOUNDER
          </span>

          <h1>
            Engineering leadership
            <br />
            with <span>experience.</span>
          </h1>

          <div className="founder-line"></div>

          <h2>
            {data.name}
          </h2>

          <h3>
            {data.designation}
          </h3>

          <p className="founder-qualification">
            {data.qualification}
          </p>

          {data.empanelled && (
            <p className="founder-empanelled">
              {data.empanelled}
            </p>
          )}

          <p className="founder-experience">
            {data.experience}
          </p>

        </div>

      </div>
    </section>
  );
}

export default Founder;