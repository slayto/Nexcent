import logo from '../assets/logo/next-logo.png'
export const Navbar = () => {
  return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light" id="menu">
        <div className="container">

            {/* <!-- Left Column with Logo --> */}
            <div className="navbar-brand">
                <img src={logo} alt="Your Logo" width="200" className="d-inline-block align-top" />
            </div>

            {/* <!-- Mobile Toggle Button --> */}
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            {/* <!-- Right Column with Navigation Links and Register Now button --> */}
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item ms-4">
                        <a className="nav-link" href="#menu">Home</a>
                    </li>
                    <li className="nav-item ms-4">
                        <a className="nav-link" href="#ourClients">Features</a>
                    </li>
                    <li className="nav-item ms-4">
                        <a className="nav-link" href="#helpingLocal">Community</a>
                    </li>
                    <li className="nav-item ms-4">
                        <a className="nav-link" href="#blog">Blog</a>
                    </li>
                    <li className="nav-item ms-4">
                        <a className="nav-link" href="#">Pricing</a>
                    </li>
                    <li className="nav-item ms-4">
                        <a className="btn btn-success" href="#" role="button">Register Now <i
                                className="bi bi-arrow-right"></i></a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  );
};
