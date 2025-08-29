import { use } from "react";
import { CartContext } from "../contents/Cart";
// Async function to fetch products from the backend API
const fetchStoreProducts = async () => { 
  const res = await fetch("http://localhost:5001/products"); // Fetch products from local server
  if (!res.ok) throw new Error("Failed to fetch products");// Handle errors if response not OK
  return res.json(); // Return the parsed JSON data
};
// Functional component for the store page
export default function Store() {
  // Fetch products using `use` hook (suspense-style)
  const products = use(fetchStoreProducts());
  // Access `addToCart` function from CartContext
  const { addToCart } = use(CartContext);

  return (
     // Main container with padding, max-width, and spacing
    <div className="p-8 max-w-5xl mx-auto space-y-6">
      {/* Header section describing the store */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">PRODUCTS DETAILS</h1>
        <h2 className="text-xl font-semibold">SQT Professional Products</h2>
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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
        {products.map((product) => (
          <div key={product.id} className="border rounded p-4 shadow hover:shadow-lg transition">
             {/* Product image */}
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover rounded mb-4"
            />
            {/* Product name */}
            <h3 className="text-xl font-semibold">{product.name}</h3>
            {/* Product description */}
            <p className="text-gray-700 mb-2">{product.description}</p>
            {/* Product price */}
            <p className="font-bold mb-2">${product.price}</p>
            <button
              onClick={() => addToCart(product)}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Add to Cart
              {/* Add to Cart button */}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
