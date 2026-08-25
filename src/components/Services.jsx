import "../Services.css";

function Services({ data }) {
  const services = Array.isArray(data) ? data : [];

  return (
    <section className="services-section" id="services">

      <div className="services-container">

        {/* Header */}
        <div className="services-header">

          <span className="services-eyebrow">
            WHAT WE DO
          </span>

          <h2>
            Our Services
          </h2>

          <p>
            Comprehensive structural engineering solutions
            designed to deliver safe, practical and
            sustainable structures.
          </p>

        </div>


        {/* Services List */}
        <div className="services-list">

          {services.map((service, index) => (

            <div
              className="service-item"
              key={service.id || index}
            >

              {/* LEFT TICK */}
              <div className="service-check">
                ✓
              </div>


              {/* SERVICE CONTENT */}
              <div className="service-content">

                <span className="service-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3>
                  {service.name}
                </h3>

                <p>
                  {service.description}
                </p>

              </div>


              {/* ARROW */}
              <div className="service-arrow">
                ↗
              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Services;