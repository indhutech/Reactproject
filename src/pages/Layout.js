
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Outlet,Link } from "react-router-dom";

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
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">

            <ul className="navbar-nav ms-auto">

              <li className="nav-item">
                <Link className="nav-link" to="/">
                <img src={q1}width="25" height="25" alt="" /><a href="#"class="text-primary text-decoration-none me-3"></a>
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/Login">
                <img src={q2}width="25" height="25" alt="" /><a href="#"class="text-primary text-decoration-none me-3"></a>
                  Login
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/Register">
                <img src={q3}width="25" height="25" alt="" /><a href="#"class="text-primary text-decoration-none me-3"></a>
                  Register
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Products">
                <img src={q4}width="25" height="25" alt="" /><a href="#"class="text-primary text-decoration-none me-3"></a>
                  Products
                </Link>
              </li>

            </ul>

          </div>

        </div>
      </nav>



      <div className="container mt-4">
        <Outlet />
      </div>

<br></br><h2><center>For more details</center></h2>


  <footer class="bg-dark text-white text-center w-100 py-1 mt-3">

   <br></br> <h5>MY GROCERY Website</h5>
  <div class="container">
    <div class="row">
    
      <div class="col-md-4">
        <h4 class="text-warning mb-3">Branch Districts</h4>

        <ul class="list-unstyled">
          <li class="mb-2">Chennai</li>
          <li class="mb-2">Madurai</li>
           <li class="mb-2">Namakkal</li>
        </ul>
      </div>

      
      <div class="col-md-4">
        <h4 class="text-warning mb-3">Quick Links</h4>

        <ul class="list-unstyled">
          <li><a href="#" class="text-white text-decoration-none">special products</a></li>
          <li><a href="#" class="text-white text-decoration-none">Offers</a></li>
              <li><a href="#" class="text-white text-decoration-none">Privacy Policy</a></li>
          <li><a href="#" class="text-white text-decoration-none">Terms and Conditions</a></li>
        </ul>
      </div>

      
      <div class="col-md-4">
        <h4 class="text-warning mb-3">Contact Us</h4>
        <p>Email: mygrocery@gmail.com</p>
        <p>Phone: +91 9876543210</p>
        <p>Location: Tamil Nadu, India</p>
      </div>

    </div>

    <hr class="border-light"/>
    <p class="text-center mb-0">
      © 2026 MY GROCERY-NKL***All Rights Reserved.
    </p><br></br>

        <img src={v3}width="25" height="25" alt="" /><a href="#"class="text-primary text-decoration-none me-3"> Wattsapp</a>
        <img src={v4}width="35" height="25" alt="" /><a href="#"class="text-primary text-decoration-none me-3">   Instagram</a>
            <img src={v5}width="30" height="25" alt="" /><a href="#"class="text-primary text-decoration-none me-3">   Facebook</a>
                <img src={v6}width="25" height="25" alt="" /><a href="#"class="text-primary text-decoration-none me-3">   Twitter</a>
                  </div>
        

  </footer>




    </>

  )
}
export default Layout;