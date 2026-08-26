import "../Navbar.css";

function Navbar() {
  return (
    <header className="navbar">

      {/* BRAND */}
      <a href="#home" className="navbar-brand">

        <div className="navbar-logo-wrapper">
          <img
            src="/images/genesis-logo.png"
            alt="Genesis Engineering & Solutions"
            className="navbar-logo-image"
          />
        </div>

        <div className="navbar-brand-text">
          <div className="navbar-brand-name">
            GENESIS
          </div>

          <div className="navbar-brand-tagline">
            ENGINEERING &amp; SOLUTIONS
          </div>
        </div>

      </a>

      {/* NAVIGATION */}
      <nav className="navbar-links">

        <a href="#home">
          Home
        </a>

        <a href="#about">
          About
        </a>

        <a href="#services">
          Services
        </a>

        <a href="#projects">
          Projects
        </a>

        <a href="#reel">
          Our Story
        </a>

        <a
          href="#contact"
          className="contact-button"
        >
          Contact
        </a>

      </nav>

    </header>
  );
}

export default Navbar;