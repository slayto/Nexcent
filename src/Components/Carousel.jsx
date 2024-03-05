import carImg1 from '../assets/images/hero.png'

export const Carousel = () => {
  return (
    <div id="heroCarousel" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="container px-4 py-5">
            <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
              <div className="col-10 col-sm-8 col-lg-6">
                <img
                  src={carImg1}
                  className="d-block mx-lg-auto img-fluid rounded"
                  alt="Bootstrap Themes"
                  width="700"
                  height="500"
                  loading="lazy"
                />
              </div>
              <div className="col-lg-6">
                <h1 className="display-5 fw-bold lh-1 mb-3">
                  Lessons and insights <br />{" "}
                  <span className="text-success">from 8 years</span>
                </h1>
                <p className="lead">
                  Quickly design and customize responsive mobile-first sites
                  with Bootstrap, the world’s most popular front-end open source
                  toolkit, featuring Sass variables and mixins, responsive grid
                  system, extensive prebuilt components, and powerful JavaScript
                  plugins.
                </p>
                <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                  <button
                    type="button"
                    className="btn btn-success btn-lg px-4 me-md-2"
                  >
                    Register
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="carousel-item">
          <div className="container px-4 py-5">
            <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
              <div className="col-10 col-sm-8 col-lg-6">
                <img
                  src={carImg1}
                  className="d-block mx-lg-auto img-fluid rounded"
                  alt="Bootstrap Themes"
                  width="700"
                  height="500"
                  loading="lazy"
                />
              </div>
              <div className="col-lg-6">
                <h1 className="display-5 fw-bold lh-1 mb-3">
                  Responsive left-aligned hero with image
                </h1>
                <p className="lead">
                  Quickly design and customize responsive mobile-first sites
                  with Bootstrap, the world’s most popular front-end open source
                  toolkit, featuring Sass variables and mixins, responsive grid
                  system, extensive prebuilt components, and powerful JavaScript
                  plugins.
                </p>
                <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                  <button
                    type="button"
                    className="btn btn-success btn-lg px-4 me-md-2"
                  >
                    Register
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="carousel-item">
          <div className="container px-4 py-5">
            <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
              <div className="col-10 col-sm-8 col-lg-6">
                <img
                  src={carImg1}
                  className="d-block mx-lg-auto img-fluid rounded"
                  alt="Bootstrap Themes"
                  width="700"
                  height="500"
                  loading="lazy"
                />
              </div>
              <div className="col-lg-6">
                <h1 className="display-5 fw-bold lh-1 mb-3">
                  Responsive left-aligned hero with image
                </h1>
                <p className="lead">
                  Quickly design and customize responsive mobile-first sites
                  with Bootstrap, the world’s most popular front-end open source
                  toolkit, featuring Sass variables and mixins, responsive grid
                  system, extensive prebuilt components, and powerful JavaScript
                  plugins.
                </p>
                <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                  <button
                    type="button"
                    className="btn btn-success btn-lg px-4 me-md-2"
                  >
                    Register
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Add more carousel items as needed --> */}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#heroCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#heroCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};
