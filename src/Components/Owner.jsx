import ownerImg from "../assets/images/a.jpg";
import clientA from "../assets/clients/a.png";
import clientB from "../assets/clients/b.png";
import clientC from "../assets/clients/c.png";
import clientD from "../assets/clients/d.png";
import clientE from "../assets/clients/e.png";
import clientF from "../assets/clients/f.png";

export const Owner = () => {
  return (
    <div className="container px-4 py-5">
      <div className="container px-4 py-5">
        <div className="row align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-5">
            <img
              src={ownerImg}
              className="d-block mx-lg-auto img-fluid rounded left-ani"
              alt="Bootstrap Themes"
              width="700"
              height="500"
              loading="lazy"
            />
          </div>
          <div className="col-lg-7">
            <p className="lead">
              Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
              lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu
              enim metus. Vivamus sed libero ornare, tristique quam in, gravida
              enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet
              elit at ligula molestie, nec molestie mi blandit. Suspendisse
              cursus tellus sed augue ultrices, quis tristique nulla sodales.
              Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse
              potenti. Quisque malesuada enim sapien, vitae placerat ante
              feugiat eget. Quisque vulputate odio neque, eget efficitur libero
              condimentum id. Curabitur id nibh id sem dignissim finibus ac sit
              amet magna.
            </p>

            <h5 className="my-3">Tim Smith</h5>
            <p>British Dragon Boat Racing Association</p>

            {/* <div className="row mt-5 text-center">
              <div className="col-12 col-md mb-3">
                <img
                  src={clientA}
                  alt="Client 1"
                  width="50"
                  className="img-fluid"
                />
              </div>
              <div className="col-12 col-md mb-3">
                <img
                  src={clientB}
                  alt="Client 1"
                  width="50"
                  className="img-fluid"
                />
              </div>
              <div className="col-12 col-md mb-3">
                <img
                  src={clientC}
                  alt="Client 1"
                  width="100"
                  className="img-fluid"
                />
              </div>
              <div className="col-12 col-md mb-3">
                <img
                  src={clientD}
                  alt="Client 1"
                  width="100"
                  className="img-fluid"
                />
              </div>
              <div className="col-12 col-md mb-3">
                <img
                  src={clientE}
                  alt="Client 1"
                  width="100"
                  className="img-fluid"
                />
              </div>
              <div className="col-12 col-md mb-3">
                <img
                  src={clientF}
                  alt="Client 1"
                  width="100"
                  className="img-fluid"
                />
              </div>
              <div className="col-12 col-md-4">
                <a className="btn text-success fs-5" href="#" role="button">
                  Meet all customers <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};
