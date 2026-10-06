import { useState } from "react";
import { Link } from "react-router-dom";
import {
  MapPin,
  CalendarDays,
  Building2,
} from "lucide-react";

import project1 from "../assets/projects/project1.jpg";
import project2 from "../assets/projects/project2.jpg";
import project3 from "../assets/projects/project3.jpg";
import project4 from "../assets/projects/project4.jpg";

const projects = [
  {
    title: "Project Name 1",
    client: "Private Sector Client",
    location: "Andhra Pradesh",
    sector: "Private",
    type: "Industrial Construction",
    year: "2024",
    description:
      "Civil and structural construction works delivered with a focus on quality, safety and timely execution.",
    image: project1,
  },

  {
    title: "Project Name 2",
    client: "Government Organization",
    location: "Karnataka",
    sector: "Government",
    type: "Infrastructure Development",
    year: "2023",
    description:
      "Infrastructure development project executed according to project specifications and quality standards.",
    image: project2,
  },

  {
    title: "Project Name 3",
    client: "Private Organization",
    location: "Telangana",
    sector: "Private",
    type: "Civil Engineering",
    year: "2023",
    description:
      "Civil engineering and construction works completed successfully.",
    image: project3,
  },

  {
    title: "Project Name 4",
    client: "Government Department",
    location: "Andhra Pradesh",
    sector: "Government",
    type: "Public Infrastructure",
    year: "2022",
    description:
      "Construction and infrastructure development completed successfully.",
    image: project4,
  },
];

function CompletedProjects() {
  const [filter, setFilter] = useState("All");

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter(
          (project) => project.sector === filter
        );

  return (
    <main className="projects-list-page">

      {/* HERO */}
      <section className="projects-inner-hero">
        <div className="container">

          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>

            <Link to="/projects">
              Projects
            </Link>

            <span>/</span>

            <span>Completed Projects</span>
          </div>

          <div className="section-label">
            PROJECT PORTFOLIO
          </div>

          <h1>
            Completed
            <span> Projects</span>
          </h1>

          <p>
            A selection of projects successfully
            delivered by Ronith Infra.
          </p>

        </div>
      </section>

      {/* FILTER */}
      <section className="project-list-section">
        <div className="container">

          <div className="project-filter">

            <button
              className={filter === "All" ? "active" : ""}
              onClick={() => setFilter("All")}
            >
              All Projects
            </button>

            <button
              className={
                filter === "Government" ? "active" : ""
              }
              onClick={() => setFilter("Government")}
            >
              Government
            </button>

            <button
              className={
                filter === "Private" ? "active" : ""
              }
              onClick={() => setFilter("Private")}
            >
              Private
            </button>

          </div>

          {/* PROJECT CARDS */}
          <div className="project-list-grid">

            {filteredProjects.map((project) => (
              <article
                className="project-list-card"
                key={project.title}
              >

                {/* IMAGE */}
                <div className="project-list-image">

                  <img
                    src={project.image}
                    alt={project.title}
                  />

                  <span>
                    COMPLETED
                  </span>

                </div>

                {/* CONTENT */}
                <div className="project-list-content">

                  <div className="project-sector">
                    {project.sector}
                  </div>

                  <h2>
                    {project.title}
                  </h2>

                  <p>
                    {project.description}
                  </p>

                  {/* PROJECT META */}
                  <div className="project-meta">

                    <div>
                      <Building2 size={17} />
                      <span>
                        {project.client}
                      </span>
                    </div>

                    <div>
                      <MapPin size={17} />
                      <span>
                        {project.location}
                      </span>
                    </div>

                    <div>
                      <CalendarDays size={17} />
                      <span>
                        {project.year}
                      </span>
                    </div>

                  </div>

                </div>

              </article>
            ))}

          </div>

        </div>
      </section>

    </main>
  );
}

export default CompletedProjects;