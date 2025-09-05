import React, { useState } from "react";
import { Link } from "react-router-dom";
import { use } from "react"; // Experimental React hook for async data
import { CartContext } from "./contents/Cart"; // Cart context
import { AuthContext } from "./contents/Auth"; // Authentication context
import logo from "./assets/logo.jpg";  //Logo image
import "./Navbar.css";  // Navbar-specific styles

function Navbar() {
  // Access cart state from context
  const { cart } = use(CartContext);
    // Access authentication functions and user data from context
  const { user, login, signup, logout } = use(AuthContext);
  // Local state for modal visibility and form data
  const [showModal, setShowModal] = useState(false);
  const [isSignup, setIsSignup] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");
  // Handles login or signup when the form is submitted
  const handleSubmit = () => {
    if (isSignup) {
      const success = signup(form.name, form.email, form.password);
      if (!success) {
        setError("User already exists!");
        return;
      }
    } else {
      const success = login(form.email, form.password);
      if (!success) {
        setError("Invalid email or password!");
        return;
      }
    }
        // Clear errors and form after successful auth
    setError("");
    setShowModal(false);
    setForm({ name: "", email: "", password: "" });
  };

  return (
    <header className="navbar">
      <div className="navbar-top">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo-image" />
        </div>

        <div className="navbar-right">
          <Link to="/cart" className="cart-icon">
            🛒
            {cart.length > 0 && <span className="cart-badge">{cart.length}</span>}
          </Link>
          {/* Conditional rendering: show user info if logged in, else login/signup button */}
          {user ? (
            <>
              <span className="user-name">Hello, {user.name}</span>
              <button onClick={logout} className="auth-button">
                Logout
              </button>
            </>
          ) : (
            <button onClick={() => setShowModal(true)} className="auth-button">
              Login / Signup
            </button>
          )}
        </div>
      </div>
      {/* Main navigation links */}
      <nav className="navbar-links">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/sponges">Sponge Spicules</Link></li>
          <li><Link to="/store">Products</Link></li>
          <li><Link to="/products">Store</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/terms">Terms</Link></li>
          <li><Link to="/policy">Policy</Link></li>
        </ul>
      </nav>
      {/* Login / Signup modal */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <button className="modal-close" onClick={() => setShowModal(false)}>✕</button>
            {/* Modal title */}
            <h2 className="modal-title">{isSignup ? "Sign Up" : "Login"}</h2>
            {/* Form fields */}
            <div className="modal-form">
              {isSignup && (
                <input
                  type="text"
                  placeholder="Name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
              )}
              <input
                type="email"
                placeholder="Email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
              <input
                type="password"
                placeholder="Password"
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
              />
                            {/* Error message display */}
              {error && <p className="modal-error">{error}</p>}
               {/* Submit button */}
              <button onClick={handleSubmit} className="modal-submit">
                {isSignup ? "Sign Up" : "Login"}
              </button>
            </div>
                        {/* Toggle between login and signup */}
            <p className="modal-toggle">
              {isSignup ? "Already have an account?" : "No account yet?"}{" "}
              <span onClick={() => { setIsSignup(!isSignup); setError(""); }}>
                {isSignup ? "Login" : "Sign Up"}
              </span>
            </p>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
