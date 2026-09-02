import React from "react";

import f1 from "../images/f1.jpeg";
import vv2 from "../images/vv2.jpeg";
import vv3 from "../images/vv3.jpeg";
import vv4 from "../images/vv4.jpeg";
import vv5 from "../images/vv5.jpeg";
import vv6 from "../images/vv6.jpeg";
import vv7 from "../images/vv7.jpeg";
import vv8 from "../images/vv8.jpg";
import vv9 from "../images/vv9.jpg";
import veg5 from "../images/veg5.jpeg";

import f5 from "../images/f5.jpg";
import f6 from "../images/f6.jpg";
import f7 from "../images/f7.jpg";
import f8 from "../images/f8.jpg";
import f15 from "../images/f15.jpg";
import f10 from "../images/f10.jpg";
import f11 from "../images/f11.jpg";
import f12 from "../images/f12.jpg";
import f13 from "../images/f13.jpg";
import f14 from "../images/f14.jpg";

import fl1 from "../images/fl1.jpg";
import fl2 from "../images/fl2.jpg";
import fl3 from "../images/fl3.jpg";
import fl4 from "../images/fl4.jpg";
import fl5 from "../images/fl5.jpg";
import fl6 from "../images/fl6.jpg";
import fl7 from "../images/fl7.jpg";
import fl8 from "../images/fl8.jpg";

import bb1 from "../images/bb1.jpg";
import bb2 from "../images/bb2.jpg";
import bb3 from "../images/bb3.jpg";
import bb4 from "../images/bb4.jpg";
import bb5 from "../images/bb5.jpg";
import bb6 from "../images/bb6.jpg";
import bb7 from "../images/bb7.jpg";

const categories = [
  {
    category: "Vegetables",
    products: [
      { name: "Carrot", image: f1 },
      { name: "Potato", image: vv2 },
      { name: "Brinjal", image: vv3 },
      { name: "Cauliflower", image: vv4 },
      { name: "Big Onion", image: vv5 },
      { name: "Special Potato", image: vv6 },
      { name: "Tomato", image: vv7 },
      { name: "Ladies Finger", image: vv8 },
      { name: "Sweet Corn", image: vv9 },
      { name: "Spinach", image: veg5 },
    ],
  },

  {
    category: "Fruits",
    products: [
      { name: "Apple", image: f5 },
      { name: "Banana", image: f6 },
      { name: "Orange", image: f7 },
      { name: "Grapes", image: f8 },
      { name: "Mango", image: f15 },
      { name: "Pineapple", image: f10 },
      { name: "Watermelon", image: f11 },
      { name: "Papaya", image: f12 },
      { name: "Guava", image: f13 },
      { name: "Pomegranate", image: f14 },
    ],
  },

  {
    category: "Flowers",
    products: [
      { name: "Rose", image: fl1 },
      { name: "Jasmine", image: fl2 },
      { name: "Lotus", image: fl3 },
      { name: "Lily", image: fl4 },
      { name: "Sunflower", image: fl5 },
      { name: "Hibiscus", image: fl6 },
      { name: "Marigold", image: fl7 },
      { name: "Orchid", image: fl8 },
    ],
  },

  {
    category: "Biscuits",
    products: [
      { name: "Oreo", image: bb1 },
      { name: "Good Day", image: bb2 },
      { name: "Bourbon", image: bb3 },
      { name: "Marie Gold", image: bb4 },
      { name: "Hide & Seek", image: bb5 },
      { name: "Milk Bikis", image: bb6 },
      { name: "Parle-G", image: bb7 },
    ],
  },
];

const Products = () => {
  return (
    <div className="container my-5">
      <h1 className="text-center text-success mb-5">
        MYGROCERY PRODUCTS
      </h1>

      {categories.map((category, index) => (
        <div key={index} className="mb-5">
          <h2 className="bg-success text-white text-center p-2 rounded mb-4">
            {category.category}
          </h2>

          <div className="row g-4">
            {category.products.map((product, i) => (
              <div className="col-lg-3 col-md-4 col-sm-6" key={i}>
                <div className="card h-100 shadow text-center p-3">
  <img
    src={product.image}
    alt={product.name}
    className="mx-auto d-block mt-3 rounded"
    style={{
      width: "150px",
      height: "120px",
      objectFit: "cover",
      borderRadius: "15px",
    }}
  />

  <div className="card-body">
    <h5 className="card-title">{product.name}</h5>

    <button className="btn btn-success btn-sm">
      Buy Now
    </button>
  </div>
</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;