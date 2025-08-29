import React, { useState, useEffect, useContext } from "react";
import { CartContext } from "../contents/Cart";
import "./Products.css"; 
// Functional component for displaying products
export default function Products() {
  const [products, setProducts] = useState([]);   // State to hold fetched products
  const [loading, setLoading] = useState(true);   // State to track loading status while fetching data
  const [error, setError] = useState(null);   // State to track errors during fetch
  // Access `addToCart` function from CartContext
  const { addToCart } = useContext(CartContext);
  // useEffect hook to fetch products from backend API when component mounts
  useEffect(() => {
    const fetchProducts = async () => {
      try {
                // Fetch products from local backend API
        const res = await fetch("http://localhost:5001/products");
                // Throw an error if response is not OK
        if (!res.ok) throw new Error("Failed to fetch products");
                // Parse JSON response
        const data = await res.json();
                // Store products in state
        setProducts(data);
      } catch (err) {
                // Store error message if fetch fails
        setError(err.message);
      } finally {
                // Set loading to false after fetch is complete
        setLoading(false);
      }
    };
        // Call the fetch function
    fetchProducts();
  }, []);  // Empty dependency array ensures this runs only once on mount
  // Render loading message if still fetching products
  if (loading) return <p className="p-8 text-center">Loading products...</p>;
    // Render error message if fetch failed
  if (error) return <p className="p-8 text-center text-red-500">Error: {error}</p>;
  // Main render for the products grid
  return (
    <div className="products-container">
      <h1 className="products-title">Our Products</h1>
      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <div className="product-image-container">
              <img src={product.image} alt={product.name} className="product-image" />
            </div>
            <h3 className="product-name">{product.name}</h3>
            <p className="product-desc">{product.description}</p>
            <p className="product-price">${product.price}</p>
            <button className="add-btn" onClick={() => addToCart(product)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
