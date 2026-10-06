const testimonials = [
  {
    text: "The quality of construction and timely delivery truly stood out. Their team was professional and transparent throughout the project.",
    name: "Rajesh Mehta"
  },
  {
    text: "From planning to execution, every detail was handled with care. Their project management approach was excellent.",
    name: "Arvind Kumar"
  },
  {
    text: "What impressed me most was their commitment to timelines and safety. The final result was exactly what we expected.",
    name: "Meenal Deshmukh"
  }
];

function Testimonials() {
  return (
    <section className="testimonials section">

      <div className="container">

        <div className="testimonial-heading">

          <div className="section-label">
            TESTIMONIALS
          </div>

          <h2>
            What Our Clients
            <br />
            <span>Say About Us</span>
          </h2>

        </div>


        <div className="testimonial-grid">

          {testimonials.map((item, index) => (

            <div className="testimonial-card" key={index}>

              <div className="stars">
                ★ ★ ★ ★ ★
              </div>

              <p>
                "{item.text}"
              </p>

              <div className="testimonial-author">

                <div className="author-circle">
                  {item.name.charAt(0)}
                </div>

                <strong>
                  {item.name}
                </strong>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Testimonials;