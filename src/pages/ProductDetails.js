import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ProductDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Get product from Home page
  const product = location.state;

  // If product data is not available
  if (!product) {
    return (
      <div className="container mt-5 text-center">
        <h3>Product not found</h3>

        <button
          className="btn btn-primary mt-3"
          onClick={() => navigate("/")}
        >
          ← Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="container mt-5">

      <div className="row align-items-center">

        {/* Image LEFT */}
        <div className="col-md-6 text-center mb-4">

          <img
            src={product.img}
            className="img-fluid rounded shadow w-75"
            alt={product.name}
          />

        </div>


        {/* Product Details RIGHT */}
        <div className="col-md-6">

          {/* Category */}
          <span className="badge bg-primary mb-3">
            {product.category || "Grocery"}
          </span>

          {/* Product Name */}
          <h2 className="text-success">
            {product.name}
          </h2>

          {/* Price */}
          <h4 className="text-dark">
            Price: {product.price}
          </h4>

          {/* Offer */}
          <span className="badge bg-danger mb-3">
            {product.offer}
          </span>

          {/* Description */}
          <p className="mt-3">
            {product.description || "Fresh and high quality product."}
          </p>

          {/* Product Benefits */}
          <h5 className="mt-4">
            Product Benefits
          </h5>

          <ul>
            <li>Fresh and high quality</li>
            <li>Good for everyday use</li>
            <li>Carefully selected</li>
            <li>Great taste and freshness</li>
          </ul>

          {/* Add Basket Button */}
          <button
            className="btn btn-success me-2"
            onClick={() =>
              alert(`${product.name} added to basket`)
            }
          >
            🛒 Add to Basket
          </button>

          {/* Back Button */}
          <button
            className="btn btn-secondary"
            onClick={() => navigate(-1)}
          >
            ← Back
          </button>

        </div>

      </div>

    </div>
  );
};

export default ProductDetails;