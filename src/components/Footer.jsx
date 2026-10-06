import {
  Phone,
  Mail,
  MapPin
} from "lucide-react";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-cta">

        <div className="container">

          <div className="footer-cta-content">

            <div>

              <div className="section-label">
                LET'S BUILD TOGETHER
              </div>

              <h2>
                Ready to Start Your
                <br />
                Next Project?
              </h2>

            </div>

            <a href="/contact" className="footer-cta-button">
              Contact Us
            </a>

          </div>

        </div>

      </div>


      <div className="container footer-main">

        <div className="footer-column footer-brand">

          <a href="/" className="footer-logo">
            Ronith<span> Infra project private limited</span>
          </a>

          <p>
            Delivering quality engineering and
            construction solutions with integrity,
            innovation and excellence.
          </p>

        </div>


        <div className="footer-column">

          <h4>Quick Links</h4>

          <a href="/">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#process">How We Work</a>
          <a href="/contact">Contact</a>

        </div>


        <div className="footer-column">

          <h4>Services</h4>

          <a href="#services">
            Civil Engineering
          </a>

          <a href="#services">
            Industrial Construction
          </a>

          <a href="#services">
            Project Management
          </a>

          <a href="#services">
            Equipment Leasing
          </a>

        </div>


        <div className="footer-column">

          <h4>Contact</h4>

          <p>
            <MapPin size={17} />
            Bangalore, India
          </p>

          <p>
            <Phone size={17} />
            +91 XXXXX XXXXX
          </p>

          <p>
            <Mail size={17} />
            info@buildwellengineers.in
          </p>

        </div>

      </div>


      <div className="footer-bottom">

        <div className="container">

          <p>
            © 2026 Build Well Engineers.
            All rights reserved.
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;