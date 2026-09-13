import React from "react";
import { useNavigate } from "react-router-dom";

import c1 from "../images/c1.jpeg";
import c2 from "../images/c2.jpeg";
import c3 from "../images/c3.jpeg";
import b1 from '../images/11.jpeg';
import b2 from "../images/12.jpeg";
import b3 from "../images/13.jpeg";
import b4 from "../images/14.jpeg";
import b5 from "../images/dry1.jpeg";
import b6 from "../images/dry2.jpeg";
import b7 from "../images/dry3.jpeg";
import b8 from "../images/dry4.jpeg";
//import v2 from "../images/17.jpeg";
//import v3 from "../images/wattsapp.jpeg";



import "./Index.css";

const Home=()=>{
  const navigate = useNavigate();
    return(
        <div>

            <h1 className="text-success text-center fw-bold fs-3 mt-5">
    🛒 Welcome to MYGROCERY 🥦
</h1>
<div className="container mt-4">

  <div id="demo" class="carousel slide" data-bs-ride="carousel">

   
    <div class="carousel-indicators">

      <button type="button" data-bs-target="#demo"
        data-bs-slide-to="0" class="active">
      </button>

      <button type="button" data-bs-target="#demo"
        data-bs-slide-to="1">
      </button>

      <button type="button" data-bs-target="#demo"
        data-bs-slide-to="2">
      </button>

    </div>


    <div class="carousel-inner">

      <div class="carousel-item active">
        <img src={c1}
             class="d-block w-100" alt="Slide1"/>
      </div>

      <div class="carousel-item">
        <img src={c2}
             class="d-block w-100" alt="Slide2"/>
      </div>

      <div class="carousel-item">
        <img src={c3}
             class="d-block w-100" alt="Slide3"/>
      </div>

    </div>

    <button class="carousel-control-prev"
      type="button"
      data-bs-target="#demo"
      data-bs-slide="prev">

      <span class="carousel-control-prev-icon"></span>

    </button>

   
    <button class="carousel-control-next"
      type="button"
      data-bs-target="#demo"
      data-bs-slide="next">

      <span class="carousel-control-next-icon"></span>

    </button>

  </div>

</div>

<br></br><br></br>
<h2 class="text-center text-success fw-bold mt-4">
    🛒 My Shopping
</h2><br></br>

  {/* Two Rows with 4 Cards */}
<div className="container mt-4">

<div className="container mt-4">
  <div className="row text-center">

    {[
      {
        img: b5,
        name: "Dry Almonds",
        price: "$199",
        offer: "20% OFF"
      },
      {
        img: b6,
        name: "Royal Cashew",
        price: "$185",
        offer: "Buy 1 Get 1"
      },
      {
        img: b7,
        name: "Popular Figs",
        price: "$78",
        offer: "15% OFF"
      },
      {
        img: b8,
        name: "Pumpkin Seeds",
        price: "$175",
        offer: "Special Offer"
      }
    ].map((item, index) => (

      <div className="col-md-3 mb-4" key={index}>

        <div className="card h-100 p-2 shadow">

          {/* Offer Tag */}
          <span className="badge bg-success position-absolute m-2">
            {item.offer}
          </span>

          {/* Product Image */}
          <img
            src={item.img}
            className="card-img-top p-2 mt-2"
            alt={item.name}
          />

          <div className="card-body">

            <h5 className="card-title">
              {item.name}
            </h5>

            <h6 className="text-success fw-bold">
              Price: {item.price}
            </h6>

            <p className="card-text">
              Fresh and high quality.
            </p>

          </div>

          <div className="d-grid gap-2 d-md-block mb-3">

            <button
        className="btn btn-primary me-2"
        type="button"
        onClick={() => navigate("/products1")}
      >
              🛒 Add-Basket
            </button>
            <button
                className="btn btn-success"
                onClick={() =>alert(`Added in Favourite list !!`)} >
              ❤️ Wishlist
            </button>

          </div>

        </div>

      </div>

    ))}

  </div>
</div>

<br></br>

<div className="row text-center">

  {[
    {
      img: b1,
      name: "Red Label Natural care",
      price: "$100",
      offer: "10% OFF"
    },
    {
      img: b2,
      name: "Gold",
      price: "$85",
      offer: "Buy 1 Get 1"
    },
    {
      img: b3,
      name: "3 Roses",
      price: "$59",
      offer: "15% OFF"
    },
    {
      img: b4,
      name: "Kanan Devan",
      price: "$60",
      offer: "Special Offer"
    }
  ].map((item, index) => (

    <div className="col-md-3 mb-4" key={index}>

      <div className="card h-100 p-2 shadow position-relative">

        {/* Offer Tag */}
        <span className="badge bg-danger position-absolute top-0 start-0 m-2">
          {item.offer}
        </span>

        {/* Product Image */}
        <img
          src={item.img}
          className="card-img-top p-2 mt-2"
          alt={item.name}
        />

        <div className="card-body">

          <h5 className="card-title">
            {item.name}
          </h5>

          <h6 className="text-success fw-bold">
            Price: {item.price}
          </h6>

          <p className="card-text">
            Fresh and New.
          </p>

        </div>



        <div className="d-grid gap-2 d-md-block mb-3">

      <button
        className="btn btn-primary me-2"
        type="button"
        onClick={() => navigate("/products1")}
      >
         🛒 Add-Basket
      </button>

            <button
                className="btn btn-success"
                onClick={() =>alert(`Added in Favourite list !!`)} >
              ❤️ Wishlist
            </button>

        </div>

      </div>

    </div>

  ))}

</div>
</div>
<br></br><br></br>


 </div>




    )
}
export default Home;
