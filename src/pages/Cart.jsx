// Import necessary modules
import { use } from "react";  // React hook for context consumption
import { CartContext } from "../contents/Cart"; // Import the Cart context
import "./Cart.css"; // Import CSS styles for the cart
import { useNavigate } from "react-router-dom";

// Main Cart component
export default function Cart() {
    const navigate = useNavigate();
  // Destructure cart state and actions from CartContext
  const { cart, removeFromCart, clearCart, updateQuantity } = use(CartContext);
  // Calculate total price of all items in the cart
  const total = cart.reduce((sum, item) => {
    const price = Number(item.price) || 0; // Ensure price is a number
    const quantity = item.quantity ?? 1;  // Default quantity to 1 if undefined
    return sum + price * quantity;   // Add subtotal to total
  }, 0);
  // Handlers to increase or decrease quantity of a product
  const handleIncrease = (id) => updateQuantity(id, 1); // Add 1 to quantity
  const handleDecrease = (id) => updateQuantity(id, -1); // Subtract 1 from quantity

  return (
    <div className="cart-container">
       {/* Cart title */}
      <h1 className="cart-title">Shopping Cart</h1>
{/* Conditional rendering: empty cart message or cart items */}
      {cart.length === 0 ? (
        <p className="cart-empty">Your cart is empty</p>
      ) : (
        <div className="cart-items">
          <table className="cart-table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Subtotal</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
               {/* Map through cart items and display each row */}
              {cart.map((item) => (
                <tr key={item.id}>
                   {/* Product cell with image and name */}
                  <td className="product-cell">
                    <img src={item.image} alt={item.name} className="cart-product-image" />
                    <span>{item.name}</span>
                  </td>
                  {/* Price per unit */}
                  <td>${Number(item.price).toFixed(2)}</td>
                   {/* Quantity controls */}
                  <td>
                    <div className="quantity-controls">
                       {/* Decrease quantity button */}
                      <button
                        onClick={() => handleDecrease(item.id)}
                        disabled={(item.quantity ?? 1) <= 1}
                      >
                        -
                      </button>
                      {/* Display current quantity */}
                      <span>{item.quantity ?? 1}</span>
                      {/* Increase quantity button */}
                      <button onClick={() => handleIncrease(item.id)}>+</button>
                    </div>
                  </td>
                   {/* Subtotal for the item */}
                  <td>${(Number(item.price) * (item.quantity ?? 1)).toFixed(2)}</td>
                  {/* Remove item button */}
                  <td>
                    <button
                      className="remove-button"
                      onClick={() => removeFromCart(item.id)}
                    >
                      ✕
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Fixed summary box at bottom-right if cart has items */}
      {cart.length > 0 && (
        <div className="cart-summary">
          <h2>Order Summary</h2>
          {/* Display total amount */}
          <div className="summary-row">
            <span>Total:</span>
            <span className="total-amount">${total.toFixed(2)}</span>
          </div>
          {/* Buttons for clearing cart and checking out */}
          <div className="summary-buttons">
            <button onClick={clearCart} className="clear-button">
              Clear Cart
            </button>
<button className="checkout-button" onClick={() => navigate("/checkout")}>
      Checkout </button>          </div>
        </div>
      )}
      
    </div>
  );
}
