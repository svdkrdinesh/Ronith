import { useState } from "react";
import { Link } from "react-router-dom";
import {
  MapPin,
  CalendarDays,
  Building2,
  Clock3,
} from "lucide-react";

import project1 from "../assets/projects/project1.jpg";
import project2 from "../assets/projects/project2.jpg";
import project3 from "../assets/projects/project3.jpg";

const projects = [
  {
    title: "Ongoing Project 1",
    client: "Private Sector Client",
    location: "Andhra Pradesh",
    sector: "Private",
    type: "Industrial Construction",
    start: "2025",
    image: project1,
    description:
      "Construction and engineering works currently under execution.",
  },

  {
    title: "Ongoing Project 2",
    client: "Government Organization",
    location: "Karnataka",
    sector: "Government",
    type: "Infrastructure Development",
    start: "2025",
    image: project2,
    description:
      "Infrastructure development project currently under execution.",
  },

  {
    title: "Ongoing Project 3",
    client: "Private Organization",
    location: "Telangana",
    sector: "Private",
    type: "Civil Engineering",
    start: "2026",
    image: project3,
    description:
      "Civil and structural works currently progressing.",
  },
];

function OngoingProjects() {
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

            <span>Ongoing Projects</span>
          </div>

          <div className="section-label">
            CURRENT PROJECTS
          </div>

          <h1>
            Ongoing
            <span> Projects</span>
          </h1>

          <p>
            Projects currently being executed by
            Ronith Infra.
          </p>

        </div>
      </section>

      {/* PROJECT LIST */}
      <section className="project-list-section">
        <div className="container">

          {/* FILTER */}
          <div className="project-filter">

            <button
              className={filter === "All" ? "active" : ""}
              onClick={() => setFilter("All")}
            >
              All Projects
            </button>

            <button
              className={
                filter === "Government"
                  ? "active"
                  : ""
              }
              onClick={() => setFilter("Government")}
            >
              Government
            </button>

            <button
              className={
                filter === "Private"
                  ? "active"
                  : ""
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

                  <span className="ongoing-badge">
                    ONGOING
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

                  {/* PROJECT DETAILS */}
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
                        Started {project.start}
                      </span>
                    </div>

                  </div>

                  {/* STATUS */}
                  <div className="project-status">

                    <Clock3 size={17} />

                    <span>
                      Work in Progress
                    </span>

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

export default OngoingProjects;