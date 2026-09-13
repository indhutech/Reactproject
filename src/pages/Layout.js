import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import { Outlet, Link } from "react-router-dom";

import v3 from "../images/wattsapp.jpeg";
import v4 from "../images/insta2.jpg";
import v5 from "../images/facebook1.jpg";
import v6 from "../images/twitter1.jpeg";

import q1 from "../images/ghome1.png";
import q2 from "../images/glogin1.png";
import q3 from "../images/gregister1.png";
import q4 from "../images/gproduct1.png";

import "./Index.css";

const Layout = () => {
  return (
    <>
      {/* NAVBAR */}

      <nav className="navbar navbar-expand-lg navbar-dark bg-success">

        <div className="container-fluid">

          <Link className="navbar-brand" to="/">
            MYGROSERY
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse"
            id="navbarNav"
          >

            <ul className="navbar-nav ms-auto">

              {/* HOME */}
              <li className="nav-item">

                <Link
                  className="nav-link"
                  to="/"
                >
                  <img
                    src={q1}
                    width="25"
                    height="25"
                    alt="Home"
                  />
                  {" "}Home
                </Link>

              </li>

              {/* LOGIN */}
              <li className="nav-item">

                <Link
                  className="nav-link"
                  to="/Login"
                >
                  <img
                    src={q2}
                    width="25"
                    height="25"
                    alt="Login"
                  />
                  {" "}Login
                </Link>

              </li>

              {/* REGISTER */}
              <li className="nav-item">

                <Link
                  className="nav-link"
                  to="/Register"
                >
                  <img
                    src={q3}
                    width="25"
                    height="25"
                    alt="Register"
                  />
                  {" "}Register
                </Link>

              </li>

              {/* PRODUCTS */}
              <li className="nav-item">

                <Link
                  className="nav-link"
                  to="/Products"
                >
                  <img
                    src={q4}
                    width="25"
                    height="25"
                    alt="Products"
                  />
                  {" "}Products
                </Link>

              </li>

            </ul>

          </div>

        </div>

      </nav>


      {/* PAGE CONTENT */}

      <div className="container mt-4">
        <Outlet />
      </div>


      {/* FOOTER TITLE */}

      <h2 className="text-center mt-4">
        For more details
      </h2>


      {/* FOOTER */}

      <footer className="bg-dark text-white text-center w-100 py-3 mt-3">

        <h5>MY GROCERY Website</h5>

        <div className="container">

          <div className="row">

            {/* BRANCHES */}

            <div className="col-md-4">

              <h4 className="text-warning mb-3">
                Branch Districts
              </h4>

              <ul className="list-unstyled">

                <li className="mb-2">
                  Chennai
                </li>

                <li className="mb-2">
                  Madurai
                </li>

                <li className="mb-2">
                  Namakkal
                </li>

              </ul>

            </div>


            {/* QUICK LINKS */}

            <div className="col-md-4">

              <h4 className="text-warning mb-3">
                Quick Links
              </h4>

              <ul className="list-unstyled">

                <li>
                  <Link
                    to="/Products"
                    className="text-white text-decoration-none"
                  >
                    Special Products
                  </Link>
                </li>

                <li>
                  <Link
                    to="/Products"
                    className="text-white text-decoration-none"
                  >
                    Offers
                  </Link>
                </li>

                <li>
                  <Link
                    to="/"
                    className="text-white text-decoration-none"
                  >
                    Privacy Policy
                  </Link>
                </li>

                <li>
                  <Link
                    to="/"
                    className="text-white text-decoration-none"
                  >
                    Terms and Conditions
                  </Link>
                </li>

              </ul>

            </div>


            {/* CONTACT */}

            <div className="col-md-4">

              <h4 className="text-warning mb-3">
                Contact Us
              </h4>

              <p>Email: mygrocery@gmail.com</p>

              <p>Phone: +91 9876543210</p>

              <p>Location: Tamil Nadu, India</p>

            </div>

          </div>


          <hr className="border-light" />

          <p className="text-center mb-3">
            © 2026 MY GROCERY-NKL***All Rights Reserved.
          </p>


          {/* SOCIAL LINKS */}

          <div className="text-center">

            <a
              href="https://www.whatsapp.com/"
              target="_blank"
              rel="noreferrer"
              className="text-white text-decoration-none me-3"
            >
              <img
                src={v3}
                width="25"
                height="25"
                alt="WhatsApp"
              />
              {" "}WhatsApp
            </a>


            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              className="text-white text-decoration-none me-3"
            >
              <img
                src={v4}
                width="35"
                height="25"
                alt="Instagram"
              />
              {" "}Instagram
            </a>


            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
              className="text-white text-decoration-none me-3"
            >
              <img
                src={v5}
                width="30"
                height="25"
                alt="Facebook"
              />
              {" "}Facebook
            </a>


            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noreferrer"
              className="text-white text-decoration-none"
            >
              <img
                src={v6}
                width="25"
                height="25"
                alt="Twitter"
              />
              {" "}Twitter
            </a>

          </div>

        </div>

      </footer>

    </>
  );
};

export default Layout;