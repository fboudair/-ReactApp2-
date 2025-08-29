import React from "react";
import "./SpongeSpicules.css";
// Functional component to display information about Sponge Spicules treatment
export default function SpongeSpicules() {
  return (
        // Main container for the Sponge Spicules page
    <div className="sponges-page">
            {/* Card container to wrap the content with styling */}
      <div className="sponges-card">
                {/* Main title for the page */}
        <h1 className="sponges-title">Welcome To The World Of Sponge Spicules</h1>
        {/* Paragraphs describing the treatment */}
        <p className="sponges-text">
          Experience the next-level skin rejuvenation with SQT Bio Microneedling, an advanced, non-invasive treatment designed to transform your skin naturally.
        </p>
        <p className="sponges-text">
          Unlike traditional microneedling, our innovative technique uses microscopic silicious biological “needles” to create thousands of micro-channels, stimulating deep cellular regeneration and boosting collagen production within just 7 days.
        </p>
      </div>
    </div>
  );
}
