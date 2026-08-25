import "../Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-main">

        <div className="footer-brand">

          <div className="footer-logo">
            GENESIS
          </div>

          <div className="footer-logo-sub">
            ENGINEERING &amp; SOLUTIONS
          </div>

          <p>
            Structural engineering solutions designed
            for strength, safety and lasting performance.
          </p>

        </div>


        <div className="footer-links">

          <div>
            <span>EXPLORE</span>

            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#projects">Projects</a>
            <a href="#founder">Founder</a>
          </div>


          <div>
            <span>CONNECT</span>

            <a href="#contact">Contact</a>

            <a
              href="https://www.facebook.com/reel/1353385373632551"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook ↗
            </a>
          </div>

        </div>

      </div>


      <div className="footer-bottom">

        <span>
          © 2026 Genesis Engineering &amp; Solutions
        </span>

        <a href="#home">
          BACK TO TOP ↑
        </a>

      </div>

    </footer>
  );
}

export default Footer;