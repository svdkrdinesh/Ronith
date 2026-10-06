import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/logo.jpeg";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [projectOpen, setProjectOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const closeMenu = () => {
    setOpen(false);
    setProjectOpen(false);
  };

  const goToSection = (section) => {
    closeMenu();

    if (location.pathname === "/") {
      const element = document.getElementById(section);

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }

      return;
    }

    navigate("/");

    setTimeout(() => {
      const element = document.getElementById(section);

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 300);
  };

  return (
    <header className="navbar">
      <div className="container nav-inner">

        {/* LOGO */}
        <Link
          to="/"
          className="logo"
          onClick={closeMenu}
        >
          <img
            src={logo}
            alt="Ronith Infra Project Private Limited"
          />
        </Link>


        {/* NAVIGATION */}
        <nav className={`nav-menu ${open ? "active" : ""}`}>

          {/* HOME */}
          <button
            className={
              location.pathname === "/"
                ? "active-link"
                : ""
            }
            onClick={() => goToSection("home")}
          >
            Home
          </button>


          {/* ABOUT */}
          <button
            onClick={() => goToSection("about")}
          >
            About
          </button>


          {/* SERVICES */}
          <button
            onClick={() => goToSection("services")}
          >
            Services
          </button>


          {/* PROJECTS DROPDOWN */}
          <div
            className={`nav-dropdown ${
              projectOpen ? "open" : ""
            }`}
          >

            <button
              className={
                location.pathname.startsWith("/projects")
                  ? "dropdown-button active-link"
                  : "dropdown-button"
              }
              onClick={() =>
                setProjectOpen(!projectOpen)
              }
            >
              Projects
              <ChevronDown size={16} />
            </button>


            <div className="dropdown-menu">

              {/* ALL PROJECTS */}
              <Link
                to="/projects"
                onClick={closeMenu}
              >
                All Projects
              </Link>


              {/* COMPLETED */}
              <Link
                to="/projects/completed"
                onClick={closeMenu}
              >
                Completed Projects
              </Link>


              {/* ONGOING */}
              <Link
                to="/projects/ongoing"
                onClick={closeMenu}
              >
                Ongoing Projects
              </Link>

            </div>

          </div>


          {/* HOW WE WORK */}
          <button
            onClick={() => goToSection("process")}
          >
            How We Work
          </button>


          {/* CONTACT */}
          <Link
            to="/contact"
            className={
              location.pathname === "/contact"
                ? "active-link"
                : ""
            }
            onClick={closeMenu}
          >
            Contact
          </Link>

        </nav>


        {/* GET IN TOUCH */}
        <Link
          to="/contact"
          className="nav-cta"
          onClick={closeMenu}
        >
          <Phone size={16} />
          Get In Touch
        </Link>


        {/* MOBILE MENU */}
        <button
          className="mobile-button"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
        >
          {open ? (
            <X size={25} />
          ) : (
            <Menu size={25} />
          )}
        </button>

      </div>
    </header>
  );
}

export default Navbar;