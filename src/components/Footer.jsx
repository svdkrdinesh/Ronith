import {
  Phone,
  Mail,
  MapPin
} from "lucide-react";

import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">

      {/* CTA */}
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

            {/* CONTACT PAGE */}
            <Link
              to="/contact"
              className="footer-cta-button"
            >
              Contact Us
            </Link>

          </div>

        </div>

      </div>


      {/* FOOTER MAIN */}
      <div className="container footer-main">

        {/* BRAND */}
        <div className="footer-column footer-brand">

          <Link
            to="/"
            className="footer-logo"
          >
            Ronith
            <span> Infra project private limited</span>
          </Link>

          <p>
            Delivering quality engineering and
            construction solutions with integrity,
            innovation and excellence.
          </p>

        </div>


        {/* QUICK LINKS */}
        <div className="footer-column">

          <h4>Quick Links</h4>

          <Link to="/">
            Home
          </Link>

          <Link to="/#about">
            About
          </Link>

          <Link to="/#services">
            Services
          </Link>

          <Link to="/#process">
            How We Work
          </Link>

          <Link to="/contact">
            Contact
          </Link>

        </div>


        {/* SERVICES */}
        <div className="footer-column">

          <h4>Services</h4>

          <Link to="/#services">
            Civil Engineering
          </Link>

          <Link to="/#services">
            Industrial Construction
          </Link>

          <Link to="/#services">
            Project Management
          </Link>

          <Link to="/#services">
            Equipment Leasing
          </Link>

        </div>


        {/* CONTACT */}
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
            ronithinfraprojects@ripl.com
          </p>

        </div>

      </div>


      {/* FOOTER BOTTOM */}
      <div className="footer-bottom">

        <div className="container">

          <p>
            © 2026 Ronith Infra Project Private Limited.
            All rights reserved.
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;