import { useState } from "react";
import "../Contact.css";

const GOOGLE_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSet-GQZHyn4u7mIaEGJGVbIqSzeO470JsA1-W_f8GuUUoTGGw/formResponse";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "Residential",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSuccess("");
    setError("");

    // Validation
    if (!formData.name.trim()) {
      setError("Please enter your name.");
      return;
    }

    if (!formData.email.trim()) {
      setError("Please enter your email.");
      return;
    }

    if (!formData.message.trim()) {
      setError("Please tell us about your project.");
      return;
    }

    try {
      setLoading(true);

      const formBody = new URLSearchParams();

      // Google Form field mappings
      formBody.append("entry.1357399626", formData.name);
      formBody.append("entry.1206811568", formData.email);
      formBody.append("entry.1206977643", formData.phone);
      formBody.append("entry.1906819402", formData.projectType);
      formBody.append("entry.620309259", formData.message);

      await fetch(GOOGLE_FORM_URL, {
        method: "POST",
        mode: "no-cors",
        body: formBody,
      });

      // Google Forms does not expose the response because of CORS.
      // If the request was sent, we show success to the user.
      setSuccess(
        "Thank you for contacting us. We will get back to you shortly."
      );

      // Clear form
      setFormData({
        name: "",
        email: "",
        phone: "",
        projectType: "Residential",
        message: "",
      });
    } catch (err) {
      console.error("Failed to submit contact form:", err);

      setError(
        "Unable to send your message right now. Please try again later."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact-page" id="contact">

      {/* HERO */}
      <section className="contact-hero">
        <div className="contact-hero-label">
          GET IN TOUCH
        </div>

        <h1>
          Something that <span>lasts.</span>
        </h1>
      </section>

      {/* MAIN CONTACT SECTION */}
      <section className="contact-main">

        {/* LEFT - FORM */}
        <div className="contact-form-section">

          <form onSubmit={handleSubmit}>

            {/* NAME + EMAIL */}
            <div className="contact-form-row">

              <div className="contact-field">
                <label htmlFor="name">
                  FULL NAME
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="contact-field">
                <label htmlFor="email">
                  EMAIL
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

            </div>

            {/* PHONE + PROJECT TYPE */}
            <div className="contact-form-row">

              <div className="contact-field">
                <label htmlFor="phone">
                  PHONE
                </label>

                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+91..."
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div className="contact-field">
                <label htmlFor="projectType">
                  PROJECT TYPE
                </label>

                <select
                  id="projectType"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                >
                  <option value="Residential">
                    Residential
                  </option>

                  <option value="Commercial">
                    Commercial
                  </option>

                  <option value="Industrial">
                    Industrial
                  </option>

                  <option value="Institutional">
                    Institutional
                  </option>

                  <option value="Infrastructure">
                    Infrastructure
                  </option>

                  <option value="Structural Design">
                    Structural Design
                  </option>

                  <option value="Other">
                    Other
                  </option>
                </select>
              </div>

            </div>

            {/* MESSAGE */}
            <div className="contact-field contact-message-field">

              <label htmlFor="message">
                TELL US ABOUT YOUR PROJECT
              </label>

              <textarea
                id="message"
                name="message"
                placeholder="Scope, location, timeline..."
                value={formData.message}
                onChange={handleChange}
                rows="7"
                required
              />

            </div>

            {/* ERROR */}
            {error && (
              <div className="contact-error">
                {error}
              </div>
            )}

            {/* SUCCESS */}
            {success && (
              <div className="contact-success">
                {success}
              </div>
            )}

            {/* SUBMIT */}
            <button
              type="submit"
              className="contact-submit"
              disabled={loading}
            >
              {loading ? "SENDING..." : "SEND MESSAGE"}
              <span>→</span>
            </button>

          </form>

        </div>

        {/* RIGHT - CONTACT INFORMATION */}
        <div className="contact-info">

          {/* ADDRESS */}
          <div className="contact-info-block">

            <span className="contact-info-title">
              VISIT THE STUDIO
            </span>

            <p className="contact-address">
              8H9W+RJ5, Upper Tadong, Tadong, Gangtok, Sikkim 737102
              <br />
              India
            </p>

            <a
              href="https://maps.app.goo.gl/wGKvkDCrm1Fv169P7?g_st=iw"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              Get directions ↗
            </a>

          </div>

          <div className="contact-divider"></div>

          {/* SOCIAL / COMMUNICATION */}
          <div className="contact-info-block">

            <span className="contact-info-title">
              TALK TO US
            </span>

            {/* WHATSAPP */}
            <a
              href="https://wa.me/918968771017"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-social-link"
            >
              Message on WhatsApp
              <span>→</span>
            </a>

            {/* FACEBOOK */}
            <a
              href="https://www.facebook.com/share/r/1FYErU8jNQ/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-social-link"
            >
              Facebook
              <span>↗</span>
            </a>

          </div>

          <div className="contact-divider"></div>

          {/* BUSINESS HOURS */}
          <div className="contact-info-block">

            <span className="contact-info-title">
              BUSINESS HOURS
            </span>

            <div className="business-hours">

              <div>
                <span>Monday – Saturday</span>
                <span>09:00 – 18:30</span>
              </div>

              <div>
                <span>Sunday</span>
                <span>Closed</span>
              </div>

            </div>

          </div>

        </div>

      </section>

    </section>
  );
}

export default Contact;