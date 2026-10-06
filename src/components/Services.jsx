import {
  Building2,
  Factory,
  Landmark,
  ClipboardList,
  Truck,
  ShieldCheck,
  ArrowUpRight
} from "lucide-react";

import { Link } from "react-router-dom";

import s1 from "../assets/service1.jpg";
import s2 from "../assets/service2.jpg";
import s3 from "../assets/service3.jpg";
import s4 from "../assets/service4.jpg";
import s5 from "../assets/service5.jpg";
import s6 from "../assets/service6.jpg";

const services = [
  {
    icon: Building2,
    title: "Civil Engineering & Infrastructure",
    text: "High-quality civil engineering and infrastructure solutions for industrial, commercial and public-sector developments.",
    image: s1
  },
  {
    icon: Factory,
    title: "Industrial Construction",
    text: "End-to-end construction services covering industrial buildings, plants, warehouses and supporting infrastructure.",
    image: s2
  },
  {
    icon: Landmark,
    title: "Government & Private Projects",
    text: "Professional execution of projects for government and private-sector organizations.",
    image: s3
  },
  {
    icon: ClipboardList,
    title: "Project Planning & Management",
    text: "Efficient planning, execution and management focused on cost, quality, safety and timelines.",
    image: s4
  },
  {
    icon: Truck,
    title: "Equipment & Machinery Leasing",
    text: "Construction equipment and machinery solutions for demanding infrastructure projects.",
    image: s5
  },
  {
    icon: ShieldCheck,
    title: "Safety & Quality Assurance",
    text: "Strong safety systems and quality-control practices throughout project execution.",
    image: s6
  }
];

function Services() {
  return (
    <section className="services section" id="services">
      <div className="container">

        <div className="services-heading">
          <div>
            <div className="section-label">OUR SERVICES</div>

            <h2>
              Engineering Solutions
              <br />
              <span>Built to Last</span>
            </h2>
          </div>

          <p>
            We provide complete construction and engineering
            solutions with a strong focus on quality,
            efficiency and customer satisfaction.
          </p>
        </div>

        <div className="services-grid">

          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <article className="service-card" key={service.title}>

                <div className="service-image">

                  <img
                    src={service.image}
                    alt={service.title}
                  />

                  <div className="service-number">
                    0{index + 1}
                  </div>

                </div>

                <div className="service-body">

                  <div className="service-icon">
                    <Icon size={25} />
                  </div>

                  <h3>{service.title}</h3>

                  <p>{service.text}</p>

                  <Link
                    to="/contact"
                    className="service-link"
                  >
                    Learn More
                    <ArrowUpRight size={17} />
                  </Link>

                </div>

              </article>
            );
          })}

        </div>

      </div>
    </section>
  );
}

export default Services;