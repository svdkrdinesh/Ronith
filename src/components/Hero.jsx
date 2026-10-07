import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero" id="home">

      <div className="hero-overlay"></div>

      <div className="container hero-inner">

        <div className="hero-content">

          <div className="hero-label">
            BANGALORE CIVIL ENGINEERING EXPERTS
          </div>

          <h1>
            Building
            <br />
            <span>Tomorrow's</span>
            <br />
            Infrastructure
          </h1>

          <p>
            Delivering excellence in infrastructure,
            industrial and residential projects with
            quality, innovation and integrity.
          </p>

          <div className="hero-buttons">

            <a
              href="#projects"
              className="btn-primary"
            >
              <span>Explore Our Projects</span>
              <ArrowRight size={18} />
            </a>

            <Link
              to="/contact"
              className="btn-outline"
            >
              Contact Us
            </Link>

          </div>

        </div>

      </div>

      <div className="hero-bottom">

        <div className="container hero-bottom-inner">

          <div>
            <strong>30+</strong>
            <span>Years Experience</span>
          </div>

          <div>
            <strong>500+</strong>
            <span>Projects Completed</span>
          </div>

          <div>
            <strong>10K+</strong>
            <span>Professional Hours</span>
          </div>

          <div>
            <strong>Gujarat</strong>
            <span>Our Home</span>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;