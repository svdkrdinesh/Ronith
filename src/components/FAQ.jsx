import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What is the typical timeline for a construction project?",
    answer:
      "Timelines depend on the size and scope of the project. Smaller projects may take weeks, while larger industrial and infrastructure projects can take several months or longer."
  },
  {
    question: "How do I choose the right contractor?",
    answer:
      "Consider experience, completed projects, safety practices, quality standards, references and the contractor's ability to manage your project requirements."
  },
  {
    question: "How much does construction cost?",
    answer:
      "Construction costs depend on project size, materials, labor, location, engineering requirements and project complexity. A detailed estimate should be prepared for every project."
  },
  {
    question: "What is a contingency budget?",
    answer:
      "A contingency budget is a reserve kept for unexpected expenses or changes that may occur during project execution."
  },
  {
    question: "Can I make changes during construction?",
    answer:
      "Changes may be possible depending on the project stage, but they can affect the cost and timeline. Major changes should ideally be finalized before construction begins."
  }
];

function FAQ() {

  const [active, setActive] = useState(null);

  return (
    <section className="faq section">

      <div className="container faq-grid">

        <div className="faq-heading">

          <div className="section-label">
            FAQ
          </div>

          <h2>
            Answers to Your
            <br />
            <span>Questions</span>
          </h2>

          <p>
            Have another question?
            Our team is ready to help.
          </p>

          <a href="/contact" className="btn-primary">
            Contact Us
          </a>

        </div>


        <div className="faq-list">

          {faqs.map((faq, index) => {

            const isOpen = active === index;

            return (

              <div
                className={`faq-item ${isOpen ? "open" : ""}`}
                key={index}
              >

                <button
                  onClick={() =>
                    setActive(
                      isOpen ? null : index
                    )
                  }
                >

                  <span>
                    {faq.question}
                  </span>

                  {isOpen
                    ? <Minus size={20} />
                    : <Plus size={20} />
                  }

                </button>


                {isOpen && (

                  <div className="faq-answer">

                    <p>
                      {faq.answer}
                    </p>

                  </div>

                )}

              </div>

            );

          })}

        </div>

      </div>

    </section>
  );
}

export default FAQ;