import React from "react";
import "./Services.css";
// Functional component to display list of services
export default function Services() {
  return (
        // Main container for the services section
    <div className="services-container">
      <h1>Our Services</h1>
      {/* List of services offered */}
      <ul>
        <li>Biomicroneedling treatments</li>
        <li>Skin recovery programs</li>
        <li>Professional consultation</li>
      </ul>
    </div>
  );
}
