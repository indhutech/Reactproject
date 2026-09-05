import React from "react";
import { useNavigate } from "react-router-dom";

import b1 from "../images/11.jpeg";
import b2 from "../images/12.jpeg";
import b3 from "../images/13.jpeg";
import b4 from "../images/14.jpeg";
import b5 from "../images/dry1.jpeg";
import b6 from "../images/dry2.jpeg";
import b7 from "../images/dry3.jpeg";
import b8 from "../images/dry4.jpeg";

const Products1 = () => {
  //const navigate = useNavigate();

  const products = [
    {
      img: b5,
      name: "Pure Almonds",
      category: "Dry Fruits",
      price: "$199",
      offer: "20% OFF",
      description:
        "Fresh and nutritious almonds, perfect for your daily diet.",
      button: "Buy Almonds",
    },
    {
      img: b6,
      name: "Fresh Cashews",
      category: "Dry Fruits",
      price: "$249",
      offer: "15% OFF",
      description:
        "Crunchy and delicious cashews with a rich natural taste.",
      button: "Buy Cashews",
    },
    {
      img: b7,
      name: "Premium Pistachios",
      category: "Dry Fruits",
      price: "$299",
      offer: "10% OFF",
      description:
        "Premium quality pistachios with a delicious crunchy texture.",
      button: "Buy Pistachios",
    },
    {
      img: b8,
      name: "Dry Fruit Mix",
      category: "Dry Fruits",
      price: "$349",
      offer: "25% OFF",
      description:
        "A healthy combination of almonds, cashews and other dry fruits.",
      button: "Buy Dry Fruits",
    },
    {
      img: b1,
      name: "Fresh Tomatoes",
      category: "Vegetables",
      price: "$100",
      offer: "10% OFF",
      description:
        "Fresh and juicy tomatoes, perfect for cooking and salads.",
      button: "Buy Vegetables",
    },
    {
      img: b2,
      name: "Fresh Milk",
      category: "Dairy",
      price: "$85",
      offer: "Buy 1 Get 1",
      description:
        "Fresh and creamy milk suitable for everyday use.",
      button: "Buy Dairy",
    },
    {
      img: b3,
      name: "Fresh Bread",
      category: "Bakery",
      price: "$59",
      offer: "15% OFF",
      description:
        "Soft and fresh bread, perfect for breakfast and snacks.",
      button: "Buy Bakery",
    },
    {
      img: b4,
      name: "Fresh Fruit Basket",
      category: "Fruits",
      price: "$160",
      offer: "Special Offer",
      description:
        "A delicious selection of fresh and healthy fruits.",
      button: "Buy Fruits",
    },
  ];

  return (
    <div className="container mt-5">

      <h2 className="text-center mb-5">
        🛒 MyGrocery Products
      </h2>

      {products.map((product, index) => (

        <div key={index} className="mb-5">

          {/* PRODUCT DETAILS */}
          <div className="row align-items-center">

            {/* IMAGE LEFT */}
            <div className="col-md-6 text-center">

              <img
                src={product.img}
                className="img-fluid rounded shadow w-75"
                alt={product.name}
              />

            </div>


            {/* DETAILS RIGHT */}
            <div className="col-md-6">

              {/* Category */}
              <span className="badge bg-primary mb-2">
                {product.category}
              </span>

              {/* Product Name */}
              <h2 className="text-success">
                {product.name}
              </h2>

              {/* Price */}
              <h4>
                Price: {product.price}
              </h4>

              {/* Offer */}
              <span className="badge bg-danger mb-3">
                {product.offer}
              </span>

              {/* Description */}
              <p className="mt-3">
                {product.description}
              </p>

              {/* Product Benefits */}
              <h5>
                Product Benefits
              </h5>

              <ul>
                <li>Fresh and high quality</li>
                <li>Good for everyday use</li>
                <li>Carefully selected</li>
                <li>Great taste and freshness</li>
              </ul>

              {/* Category Button */}
              <button
                className="btn btn-primary me-2"
                onClick={() =>alert(`${product.name} added to your cart!`)}
              >
                🛒 {product.button}
              </button>

              {/* Save Button */}
              <button
                className="btn btn-success"
                onClick={() => alert(`${product.name} saved!`)}
              >
                ❤️ Save For Later
              </button>

            </div>

          </div>

          <hr className="mt-5" />

        </div>

      ))}

    </div>
  );
};

export default Products1;