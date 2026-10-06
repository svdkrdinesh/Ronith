import {
  Award,
  Users,
  ShieldCheck
} from "lucide-react";

function WhyUs() {
  return (
    <section className="why-us section">

      <div className="container why-grid">

        <div className="why-content">

          <div className="section-label">
            WHY CHOOSE US
          </div>

          <h2>
            Exceptional Quality
            <br />
            <span>That Can't Be Beaten.</span>
          </h2>

          <p>
            Our commitment to excellence is woven into
            every stage of our work. From planning and
            engineering to construction and handover,
            we focus on delivering dependable results.
          </p>


          <div className="why-item">

            <div className="why-icon">
              <Award />
            </div>

            <div>
              <h3>Quality Assurance</h3>

              <p>
                We prioritize quality in every aspect
                of our projects.
              </p>
            </div>

          </div>


          <div className="why-item">

            <div className="why-icon">
              <Users />
            </div>

            <div>
              <h3>Experienced Professionals</h3>

              <p>
                Skilled professionals with practical
                construction experience.
              </p>
            </div>

          </div>


          <div className="why-item">

            <div className="why-icon">
              <ShieldCheck />
            </div>

            <div>
              <h3>Safety First</h3>

              <p>
                Strong safety practices throughout
                project execution.
              </p>
            </div>

          </div>

        </div>


        <div className="stats-panel">

          <div className="stat-box">
            <strong>30+</strong>
            <span>
              Years of
              <br />
              Experience
            </span>
          </div>

          <div className="stat-box">
            <strong>500+</strong>
            <span>
              Successfully
              <br />
              Completed Projects
            </span>
          </div>

          <div className="stat-box">
            <strong>10K+</strong>
            <span>
              Skilled
              <br />
              Professional Hours
            </span>
          </div>

          <div className="stat-box">
            <strong>1M+</strong>
            <span>
              Tons of
              <br />
              Quality Materials
            </span>
          </div>

        </div>

      </div>

    </section>
  );
}

export default WhyUs;