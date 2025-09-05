import { useContext } from "react";
import { CartContext } from "../contents/Cart"; // Importing CartContext to access cart data and actions
import "./Checkout.css";  // Importing the CSS file to style this component
// Defining the Checkout component as the default export
export default function Checkout() {
    // Destructuring 'cart' and 'clearCart' function from the CartContext
  const { cart, clearCart } = useContext(CartContext);
    // Calculating the total price of all items in the cart
  // - Uses reduce to sum up (price * quantity) for each item
  // - 'Number(item.price) || 0' ensures a numeric price (defaults to 0 if not a number)
  // - 'item.quantity ?? 1' defaults to 1 if quantity is undefined or null
  const total = cart.reduce(
    (sum, item) => sum + (Number(item.price) || 0) * (item.quantity ?? 1),
    0
  );
  // Function to handle the payment form submission
  const handlePayment = (e) => {
    e.preventDefault();  // Prevents the default form submission behavior
    alert("Payment processed successfully!"); // Simulates payment confirmation
    clearCart();  // Simulates payment confirmation
  };

  return (
    <div className="checkout-container">
      {/* Main heading for the checkout page */}
      <h1>Checkout</h1>
 {/* Section for order summary */}
      <div className="checkout-summary">
        <h2>Order Summary</h2>
        {/* Loop through each item in the cart and display its details */}
        {cart.map((item) => (
          <p key={item.id}>
            {item.name} x {item.quantity ?? 1} — $
            {(Number(item.price) * (item.quantity ?? 1)).toFixed(2)}
          </p>
        ))}
         {/* Display the total price of all items */}
        <h3>Total: ${total.toFixed(2)}</h3>
      </div>
 {/* Payment form section */}
      <form className="checkout-form" onSubmit={handlePayment}>
        <h2>Payment Details</h2>
        {/* Input fields for card information */}
        <input type="text" placeholder="Card Number" required />
        <input type="text" placeholder="MM/YY" required />
        <input type="text" placeholder="CVC" required />
        {/* Submit button showing the total amount */}
        <button type="submit" className="pay-button">
          Pay ${total.toFixed(2)}
        </button>
      </form>
    </div>
  );
}
