import React, { useContext } from "react";
import { CartContext } from "../contents/Cart";
import SQT30 from "../assets/sqt30.jpeg";
import SQT31 from "../assets/sqt31.jpeg";
import SQT32 from "../assets/sqt32.jpeg";
import SQT33 from "../assets/sqt33.jpeg";
import "./Store.css";

// Functional component for the store page
export default function Store() {
  // Access `addToCart` function from CartContext
  const { addToCart } = useContext(CartContext);

  // Static array of products with local images
  const products = [
    { id: 1, name: "SQT Product 1", description: "Professional-grade product 1", price: 100, image: SQT30 },
    { id: 2, name: "SQT Product 2", description: "Professional-grade product 2", price: 120, image: SQT31 },
    { id: 3, name: "SQT Product 3", description: "Professional-grade product 3", price: 90, image: SQT32 },
    { id: 4, name: "SQT Product 4", description: "Professional-grade product 4", price: 110, image: SQT33 },
  ];

  // Main render for the store page
  return (
    // Main container with padding, max-width, and spacing
    <div className="store-container">
      {/* Header section describing the store */}
<div className="store-header-card">
  <h1>PRODUCTS DETAILS</h1>
  <h2>SQT Professional Products</h2>
  <p>
    SQT Canada provides exclusive, professional-grade Bio-Microneedling products available only to licensed skincare professionals.
  </p>
  <p>
    Our advanced treatment sets and recovery solutions are designed to deliver superior results, enhance skin renewal, and support professional practices.
  </p>
  <p>
    Join the SQT network and elevate your skincare business with trusted, high-performance products.
  </p>
</div>


      {/* Products grid */}
      <div className="store-grid">
        {products.map((product) => (
          <div key={product.id} className="store-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
       
          </div>
        ))}
      </div>
    </div>
  );
}
