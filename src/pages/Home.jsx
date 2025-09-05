import React from "react";
import "./Home.css";
import SQT11 from "../assets/SQT11.jpeg";
import SQT12 from "../assets/SQT12.jpeg";
import SQT3 from "../assets/SQT3.jpeg";
import SQT4 from "../assets/SQT4.jpeg";
// Functional component for the Home page
export default function Home() {
  return (
        // Main container for the Home page content
    <div className="home-container">
            {/* Card-like container for the content */}
      <div className="home-card">
                {/* Main heading/title of the page */}
        <h1 className="home-title">SQT Bio Microneedling Canada</h1>
                {/* Subtitle or tagline */}
        <h2 className="home-subtitle">Revolutionizing Skin Care With SQT Bio Microneedling</h2>
                {/* Paragraphs describing the company and treatment */}
        <p>
          Welcome to SQT Beauty, your destination for advanced skincare solutions that rejuvenate and enhance your natural beauty.
        </p>
        <p>
          Our innovative Bio-Microneedling treatment is at the forefront of skincare, offering a minimally invasive procedure that stimulates natural healing within 7 days, boosting collagen and refining skin texture.
        </p>
        <p>
          Using microscopic silicious biological “needles” to create micro-channels, SQT Bio-Microneedling triggers a cell rejuvenation process for firmer, more youthful, and healthier skin.
        </p>
        <p>
          Safe for all skin types and clinically proven, this cutting-edge treatment delivers visible, long-lasting results, making it the top choice for skincare professionals and clients seeking extraordinary transformations.
        </p>
    
      </div>
      
       <div className="home-gallery">
  <img src={SQT11} alt="Treatment 1" className="gallery-img" />
  <img src={SQT12} alt="Treatment 2" className="gallery-img" />
  <img src={SQT3} alt="Treatment 3" className="gallery-img" />
</div>
    </div>
  );
}
