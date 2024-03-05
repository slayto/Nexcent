import clientA from '../assets/clients/a.png'
import clientB from '../assets/clients/b.png'
import clientC from '../assets/clients/c.png'
import clientD from '../assets/clients/d.png'
import clientE from '../assets/clients/e.png'
import clientF from '../assets/clients/f.png'

export const Clients = () => {
  return (
    <section id="ourClients" className="py-5">
      <div className="container">
        <h2 className="text-center mb-4 fw-bold">Our Clients</h2>
        <p className="text-center">
          We have been working with some Fortune 500+ clients
        </p>
        <div className="row text-center justify-content-center align-items-center">
          <div className="col-6 col-md-2">
            <img
              src={clientA}
              alt="Client 1"
              width="100"
              className="img-fluid"
            />
          </div>
          <div className="col-6 col-md-2">
            <img
              src={clientB}
              alt="Client 2"
              width="100"
              className="img-fluid"
            />
          </div>
          <div className="col-6 col-md-2">
            <img
              src={clientC}
              alt="Client 3"
              width="100"
              className="img-fluid"
            />
          </div>
          <div className="col-6 col-md-2">
            <img
              src={clientD}
              alt="Client 4"
              width="100"
              className="img-fluid"
            />
          </div>
          <div className="col-6 col-md-2">
            <img
              src={clientE}
              alt="Client 1"
              width="100"
              className="img-fluid"
            />
          </div>
          <div className="col-6 col-md-2">
            <img
              src={clientF}
              alt="Client 2"
              width="100"
              className="img-fluid"
            />
          </div>

          {/* <!-- Add more client logos as needed --> */}
        </div>
      </div>
    </section>
  );
};
