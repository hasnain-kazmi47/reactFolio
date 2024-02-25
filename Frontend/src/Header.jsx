import { HashLink } from "react-router-hash-link";

const Header = () => {
  return (
    <>
      {/* <!-- ======= Header ======= --> */}
      <header id="header" className="fixed-top">
        <div className="container d-flex align-items-center justify-content-between">
          <h1 className="logo">
            <a href="index.html">DevFolio</a>
          </h1>
          {/* <!-- Uncomment below if you prefer to use an image logo --> */}
          {/* <a href="index.html" className="logo"><img src="assets/img/logo.png" alt="" className="img-fluid"></a> */}

          <nav id="navbar" className="navbar">
            <ul>
              <li>
                <HashLink smooth to = "/#"   activeClassName="nav-link scrollto active" >
                  Home
                </HashLink>
              </li>
              <li>
                <HashLink smooth to = "/#about"  activeClassName="nav-link scrollto">
                  About
                </HashLink>
              </li>
              <li>
                <HashLink smooth to = "/#services" className="nav-link scrollto" >
                  Services
                </HashLink>
              </li>
              <li>
                <HashLink smooth to = "/#testimonials" className="nav-link scrollto" >
                Testimonials
                </HashLink >
              </li>
              <li>
                <HashLink smooth to = "/#blog"  className="nav-link scrollto">
                  Blog
                </HashLink>
              </li>
              <li className="dropdown">
                <a href="#">
                  <span>Drop Down</span> <i className="bi bi-chevron-down"></i>
                </a>
                <ul>
                  <li>
                    <a href="#">Drop Down 1</a>
                  </li>
                  <li className="dropdown">
                    <a href="#">
                      <span>Deep Drop Down</span>{" "}
                      <i className="bi bi-chevron-right"></i>
                    </a>
                    <ul>
                      <li>
                        <a href="#">Deep Drop Down 1</a>
                      </li>
                      <li>
                        <a href="#">Deep Drop Down 2</a>
                      </li>
                      <li>
                        <a href="#">Deep Drop Down 3</a>
                      </li>
                      <li>
                        <a href="#">Deep Drop Down 4</a>
                      </li>
                      <li>
                        <a href="#">Deep Drop Down 5</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Drop Down 2</a>
                  </li>
                  <li>
                    <a href="#">Drop Down 3</a>
                  </li>
                  <li>
                    <a href="#">Drop Down 4</a>
                  </li>
                </ul>
              </li>
              <li>
                <HashLink className="nav-link scrollto" smooth to="#contact">
                  Contact
                </HashLink>
              </li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>
          {/* <!-- .navbar --> */}
        </div>
      </header>
      {/* <!-- End Header --> */}
    </>
  );
};

export default Header;
