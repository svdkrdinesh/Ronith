import { Link } from "react-router-dom";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Clock3,
} from "lucide-react";

function Projects() {

  return (
    <main className="projects-page">

      {/* HERO */}

      <section className="projects-hero">

        <div className="container">

          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Projects</span>
          </div>

          <div className="projects-hero-content">

            <div className="section-label">
              OUR PROJECTS
            </div>

            <h1>
              Projects That
              <br />
              <span>Build the Future</span>
            </h1>

            <p>
              Explore our completed and ongoing projects
              across private and government sectors.
            </p>

          </div>

        </div>

      </section>


      {/* PROJECT TYPES */}

      <section className="section project-options">

        <div className="container">

          <div className="project-options-heading">

            <div className="section-label">
              PROJECT PORTFOLIO
            </div>

            <h2>
              Our Work,
              <br />
              <span>Our Commitment</span>
            </h2>

          </div>


          <div className="project-options-grid">

            {/* COMPLETED */}

            <Link
              to="/projects/completed"
              className="project-option-card"
            >

              <div className="project-option-icon">
                <CheckCircle2 size={35} />
              </div>

              <div>

                <span>01</span>

                <h3>
                  Completed Projects
                </h3>

                <p>
                  Explore successfully completed
                  construction and infrastructure
                  projects.
                </p>

                <div className="project-option-link">
                  View Completed Projects
                  <ArrowRight size={18} />
                </div>

              </div>

            </Link>


            {/* ONGOING */}

            <Link
              to="/projects/ongoing"
              className="project-option-card"
            >

              <div className="project-option-icon">
                <Clock3 size={35} />
              </div>

              <div>

                <span>02</span>

                <h3>
                  Ongoing Projects
                </h3>

                <p>
                  Discover projects currently under
                  execution and development.
                </p>

                <div className="project-option-link">
                  View Ongoing Projects
                  <ArrowRight size={18} />
                </div>

              </div>

            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}

export default Projects;