import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import aboutImage from "../assets/about.jpg";

function About() {
  return (
    <section className="about section" id="about">

      <div className="container about-grid">

        <div className="about-image-wrapper">

          <img
            src={aboutImage}
            alt="Build Well construction project"
            className="about-image"
          />

          <div className="experience-box">

            <strong>30+</strong>

            <span>
              Years of
              <br />
              Experience
            </span>

          </div>

        </div>


        <div className="about-content">

          <div className="section-label">
            ABOUT US
          </div>

          <h2>
            From Humble Beginnings
            <br />
            to <span>Trusted Builder</span>
          </h2>

          <p className="large-text">
            Founded in 1994, Build Well Engineers began
            with a commitment to ethical, quality-driven
            construction.
          </p>

          <p>
            Today, we deliver professional civil engineering
            and construction solutions across Gujarat.
            Our experience covers industrial, commercial,
            infrastructure and residential projects.
          </p>

          <div className="about-points">

            <div>
              <CheckCircle2 size={20} />
              <span>Experienced Engineering Team</span>
            </div>

            <div>
              <CheckCircle2 size={20} />
              <span>Quality Driven Construction</span>
            </div>

            <div>
              <CheckCircle2 size={20} />
              <span>Safety Focused Execution</span>
            </div>

            <div>
              <CheckCircle2 size={20} />
              <span>Timely Project Delivery</span>
            </div>

          </div>

          <a href="/contact" className="text-link">
            Discover More
            <ArrowUpRight size={18} />
          </a>

        </div>

      </div>

    </section>
  );
}

export default About;