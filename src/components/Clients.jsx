import tataLogo from "../assets/clients/tata.png";
import ongcLogo from "../assets/clients/ongc.png";
import bhelLogo from "../assets/clients/bhel.png";
import ntpcLogo from "../assets/clients/ntpc.png";
import railwaysLogo from "../assets/clients/rrb.png";
import gailLogo from "../assets/clients/gail.png";
import cciLogo from "../assets/clients/cci.png";
import coromandelLogo from "../assets/clients/coromandel.png";

function Clients() {
  const clients = [
    {
      name: "TATA",
      logo: tataLogo,
    },
    {
      name: "ONGC",
      logo: ongcLogo,
    },
    {
      name: "BHEL",
      logo: bhelLogo,
    },
    {
      name: "NTPC",
      logo: ntpcLogo,
    },
    {
      name: "Indian Railways",
      logo: railwaysLogo,
    },
    {
      name: "GAIL",
      logo: gailLogo,
    },
    {
      name: "CCI",
      logo: cciLogo,
    },
    {
      name: "Coromandel",
      logo: coromandelLogo,
    },
  ];

  return (
    <section className="clients" id="clients">
      <div className="container">

        <div className="clients-header">
          <div className="section-label">
            OUR CLIENTS
          </div>

          <h2>
            Trusted by <span>Leading Organizations</span>
          </h2>

          <p>
            Building strong relationships with organizations
            across infrastructure, engineering and industrial sectors.
          </p>
        </div>

        <div className="clients-grid">
          {clients.map((client) => (
            <div className="client-card" key={client.name}>

              <div className="client-logo-wrapper">
                <img
                  src={client.logo}
                  alt={`${client.name} logo`}
                  className="client-logo-image"
                />
              </div>

              <div className="client-name">
                {client.name}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Clients;