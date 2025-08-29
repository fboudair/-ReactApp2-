import React from "react";
import "./Contact.css";
// Functional component for Contact page
export default function Contact() {
  return (
        // Main container for the contact information
    <div className="contact-container">
      <h1>Contact Us</h1>
            {/* Contact email with a mailto link */}
      <p>Email: <a href="mailto:info@sqtcanada.ca">info@sqtcanada.ca</a></p>
            {/* Contact phone number */}
      <p>Phone: +1 (416) 333-5555</p>
      {/* Physical address */}
      <p>Address: 555 Toronto Street, Toronto, Canada</p>
      {/* Website link opens in a new tab safely */}
      <p>Website: <a href="https://www.sqtcanada.ca" target="_blank" rel="noopener noreferrer">www.sqtcanada.ca</a></p>
    </div>
  );
}
