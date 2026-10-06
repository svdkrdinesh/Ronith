const process = [
  {
    number: "01",
    title: "Planning & Design",
    text: "Project requirements, goals, engineering drawings and specifications are defined."
  },
  {
    number: "02",
    title: "Permitting & Approvals",
    text: "Required approvals and permits are obtained while ensuring regulatory compliance."
  },
  {
    number: "03",
    title: "Site Preparation",
    text: "The construction site is prepared and cleared for safe project execution."
  },
  {
    number: "04",
    title: "Foundation & Excavation",
    text: "Foundation and excavation work creates a strong base for the structure."
  }
];

function Process() {
  return (
    <section className="process section" id="process">

      <div className="container">

        <div className="process-heading">

          <div className="section-label">
            HOW WE WORK
          </div>

          <h2>
            The Journey of
            <br />
            <span>Your Project</span>
          </h2>

        </div>


        <div className="process-list">

          {process.map((item, index) => (

            <div className="process-item" key={index}>

              <div className="process-number">
                {item.number}
              </div>

              <div className="process-content">

                <h3>
                  {item.title}
                </h3>

                <p>
                  {item.text}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Process;