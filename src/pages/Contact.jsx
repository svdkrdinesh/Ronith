
import { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  Building2,
} from "lucide-react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Contact Form Data:", formData);

    alert("Thank you! Your enquiry has been submitted.");

    setFormData({
      name: "",
      company: "",
      email: "",
      phone: "",
      projectType: "",
      message: "",
    });
  };

  return (
    <div className="contact-page">

      {/* HERO */}
      
<section className="contact-hero">
  <div className="contact-hero-overlay">
    <div className="contact-hero-content container">
      <div className="section-label">
        GET IN TOUCH
      </div>

      <h1>
        Let's Build Something <span>Great Together</span>
      </h1>

      <p>
        Have a project in mind? Talk to our experienced engineering team
        and let us help bring your vision to reality.
      </p>
    </div>
  </div>
</section>


      {/* CONTACT SECTION */}
      <section className="contact-section">
        <div className="container contact-grid">

          {/* LEFT SIDE */}
          <div className="contact-info">

            <div className="section-label">
              CONTACT INFORMATION
            </div>

            <h2>
              Let's Build Something
              <span> Great Together</span>
            </h2>

            <p className="contact-description">
              Whether you are planning a new construction project,
              infrastructure development, or industrial facility,
              our experienced engineering team is ready to help.
            </p>

            {/* Address */}
            <div className="contact-info-item">
              <div className="contact-icon">
                <MapPin size={22} />
              </div>

              <div>
                <h4>Our Office</h4>
                <p>
                  Ronith Infra project private limited
                  <br />
                  Bangalore, India
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="contact-info-item">
              <div className="contact-icon">
                <Phone size={22} />
              </div>

              <div>
                <h4>Phone</h4>
                <p>
                  +91 XXXXX XXXXX
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="contact-info-item">
              <div className="contact-icon">
                <Mail size={22} />
              </div>

              <div>
                <h4>Email</h4>
                <p>
                  info@buildwellengineers.in
                </p>
              </div>
            </div>

            {/* Working Hours */}
            <div className="contact-info-item">
              <div className="contact-icon">
                <Clock size={22} />
              </div>

              <div>
                <h4>Working Hours</h4>
                <p>
                  Monday - Saturday
                  <br />
                  9:00 AM - 6:00 PM
                </p>
              </div>
            </div>

          </div>

          {/* FORM */}
          <div className="contact-form-wrapper">

            <div className="form-header">
              <Building2 size={26} />

              <div>
                <h3>Project Enquiry</h3>
                <p>
                  Tell us about your project requirements.
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit}>

              <div className="form-row">

                <div className="form-group">
                  <label htmlFor="name">
                    Full Name *
                  </label>

                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="company">
                    Company Name
                  </label>

                  <input
                    type="text"
                    id="company"
                    name="company"
                    placeholder="Enter company name"
                    value={formData.company}
                    onChange={handleChange}
                  />
                </div>

              </div>

              <div className="form-row">

                <div className="form-group">
                  <label htmlFor="email">
                    Email Address *
                  </label>

                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="example@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">
                    Phone Number *
                  </label>

                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="+91 XXXXX XXXXX"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>

              </div>

              <div className="form-group">
                <label htmlFor="projectType">
                  Project Type *
                </label>

                <select
                  id="projectType"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  required
                >
                  <option value="">
                    Select project type
                  </option>

                  <option value="industrial">
                    Industrial Construction
                  </option>

                  <option value="commercial">
                    Commercial Construction
                  </option>

                  <option value="infrastructure">
                    Infrastructure
                  </option>

                  <option value="residential">
                    Residential Construction
                  </option>

                  <option value="civil">
                    Civil Engineering
                  </option>

                  <option value="other">
                    Other
                  </option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">
                  Project Details *
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  placeholder="Tell us about your project, requirements, location, estimated timeline, etc."
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="contact-submit-btn"
              >
                Send Enquiry
                <Send size={18} />
              </button>

            </form>

          </div>

        </div>
      </section>

    </div>
  );
}

export default Contact;
