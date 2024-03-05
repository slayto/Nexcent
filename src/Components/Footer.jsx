import imgFooter from '../assets/logo/next-logo.png'

export const Footer = () => {
  return (
    <div className="container">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div>
          <a href="/">
            <img
              src={imgFooter}
              alt="Your Logo"
              width="120"
              className="d-inline-block"
            />
          </a>
        </div>

        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          <span className="text-muted mt-1">&copy; 2021</span>

          {/* <li className="ms-3">
            <a className="text-muted" href="#">
              <svg className="bi" width="24" height="24">
                <use xlink:href="#twitter" />
              </svg>
            </a>
          </li>
          <li className="ms-3">
            <a className="text-muted" href="#">
              <svg className="bi" width="24" height="24">
                <use xlink:href="#instagram" />
              </svg>
            </a>
          </li>
          <li className="ms-3">
            <a className="text-muted" href="#">
              <svg className="bi" width="24" height="24">
                <use xlink:href="#facebook" />
              </svg>
            </a>
          </li> */}
        </ul>
      </footer>
      
    </div>

    
  );
};
