import "../Navbar.css";

function Navbar() {
  return (
    <header className="navbar">

      {/* LOGO */}
      <a href="#home" className="navbar-logo">
        <div className="logo-main">
          GENESIS
        </div>

        <div className="logo-sub">
          ENGINEERING &amp; SOLUTIONS
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