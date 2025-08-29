import React from "react";
import "./Policy.css";
// Functional component for the Privacy Policy page
export default function Policy() {
  return (
        // Main container for the Policy page content
    <div className="policy-container">
            {/* Main heading/title of the page */}
      <h1>Privacy Policy</h1>
      {/* Section: Introduction */}
      <section>
        <h2>Introduction</h2>
        <p>
          Welcome to SQT Bio Microneedling Canada. This privacy policy explains how we collect, use, disclose, and safeguard your information when you visit our website <a href="https://www.sqtcanada.ca">https://www.sqtcanada.ca</a>.
        </p>
        <p>Please read this privacy policy carefully. If you do not agree with the terms, please do not access the site.</p>
      </section>
      {/* Section: Collection of Information */}
      <section>
        <h2>Collection of Your Information</h2>
        <p>We may collect information about you in a variety of ways. The information we may collect includes:</p>
        <ul>
          <li><strong>Personal Data:</strong> Your name, address, email, phone number, etc.</li>
          <li><strong>Derivative Data:</strong> Automatically collected info like IP address, browser type, OS, and pages viewed.</li>
        </ul>
      </section>
      {/* Section: Use of Information */}
      <section>
        <h2>Use of Your Information</h2>
        <p>We use information collected to provide a smooth, efficient, and customized experience. This may include:</p>
        <ul>
          <li>Managing orders, payments, and transactions.</li>
          <li>Delivering targeted advertising, newsletters, and promotional content.</li>
        </ul>
      </section>
      {/* Section: Disclosure of Information */}
      <section>
        <h2>Disclosure of Your Information</h2>
        <p>We may share information in certain situations:</p>
        <ul>
          <li><strong>By Law or to Protect Rights:</strong> Respond to legal requests or protect rights and safety.</li>
          <li><strong>Business Transfers:</strong> In connection with mergers, acquisitions, or sales of company assets.</li>
        </ul>
      </section>
      {/* Section: Security of Information */}
      <section>
        <h2>Security of Your Information</h2>
        <p>We use administrative, technical, and physical measures to protect your personal information. No method of transmission or storage is completely secure.</p>
      </section>
      {/* Section: Contact Information */}
      <section>
        <h2>Contact Us</h2>
        <p>If you have questions, please contact us at: <a href="mailto:info@sqtcanada.ca">info@sqtcanada.ca</a></p>
      </section>
    </div>
  );
}
