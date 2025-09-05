import React, { useState } from "react";
import "./Contact.css"; // Importing the CSS file to style the contact page

export default function Contact() { // Defining the Contact component as the default export
  // Declaring a state variable 'status' to show messages to the user
  const [status, setStatus] = useState("");
// Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the default form submission behavior (page reload)
    const form = e.target;
    // Get the form element from the event
    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;
    // Construct a mailto link with the form data
    // - encodeURIComponent ensures special characters are properly encoded in URL
    const mailtoLink = `mailto:info@sqtcanada.ca?subject=${encodeURIComponent(
      `Message from ${name}`
    )}&body=${encodeURIComponent(`${message}\n\nFrom: ${name} <${email}>`)}`;
// Redirect the browser to the mailto link to open the user's email client
    window.location.href = mailtoLink;
 // Update status to inform the user that the email client should open
    setStatus("Your email client should open. If it doesn't, please check your email settings.");
    // Reset the form fields after submission
    form.reset();
  };

  return (
    <div className="contact-container">
      {/* Main heading for the contact page */}
      <h1>Contact Us</h1>
      {/* Contact information */}
      <p>Email: <a href="mailto:info@sqtcanada.ca">info@sqtcanada.ca</a></p>
      <p>Phone: +1 (416) 333-5555</p>
      <p>Address: 555 Toronto Street, Toronto, Canada</p>
      <p>Website: <a href="https://www.sqtcanada.ca" target="_blank" rel="noopener noreferrer">www.sqtcanada.ca</a></p>
{/* Form heading */}
      <h2>Send us a message</h2>
       {/* Contact form */}
      <form onSubmit={handleSubmit} className="contact-form">
          {/* Input field for user's name */}
        <input 
          type="text" 
          name="name" 
          placeholder="Your Name" 
          required 
        />
          {/* Input field for user's email */}
        <input 
          type="email" 
          name="email" 
          placeholder="Your Email" 
          required 
        />
        {/* Textarea for user's message */}
        <textarea 
          name="message" 
          placeholder="Your Message" 
          required 
        />
        {/* Submit button */}
        <button type="submit">Send</button>
      </form>
{/* Display the status message if it exists */}
      {status && <p className="form-status">{status}</p>}
    </div>
  );
}
