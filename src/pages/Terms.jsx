import React from "react";
import "./Terms.css";
// Functional component to display Terms and Conditions
export default function Terms() {
  return (
        // Main container for the Terms page
    <div className="terms-container">
      {/* Main heading */}
      <h1>Terms and Conditions</h1>
      {/* Introduction section */}
      <p>
        Welcome to SQT Bio Microneedling CANADA. These Terms and Conditions govern your use of our website located at <a href="https://sqtcanada.ca">https://sqtcanada.ca</a> and constitute a legal agreement between you and us. By accessing or using our website, you agree to be bound by these Terms.
      </p>
 {/* Intellectual Property Rights Section */}
      <section>
        <h2>Intellectual Property Rights</h2>
        <p>Except for the content you own, under these Terms, SQT Bio Microneedling CANADA and/or its licensors own all the intellectual property rights and materials contained on this website.</p>
      </section>
   {/* Restrictions Section */}
      <section>
        <h2>Restrictions</h2>
        <p>You are specifically restricted from publishing any website material in any other media, selling, sublicensing, or otherwise commercializing any website material...</p>
      </section>
      {/* Your Content Section */}
      <section>
        <h2>Your Content</h2>
        <p>In these Terms and Conditions, “Your Content” shall mean any audio, video, text, images, or other material you choose to display on this Website...</p>
      </section>
      {/* No Warranties Section */}
      <section>
        <h2>No Warranties</h2>
        <p>This Website is provided “as is,” with all faults, and SQT Bio Microneedling Canada expresses no representations or warranties, of any kind...</p>
      </section>
      {/* Limitation of Liability Section */}
      <section>
        <h2>Limitation of Liability</h2>
        <p>In no event shall SQT Bio Microneedling Canada, nor any of its officers, directors, and employees, be held liable for anything arising out of your use of this Website...</p>
      </section>
      {/* Indemnification Section */}
      <section>
        <h2>Indemnification</h2>
        <p>You hereby indemnify to the fullest extent SQT Bio Microneedling Canada from and against any liabilities, costs, demands, causes of action, damages, and expenses arising in any way related to your breach...</p>
      </section>
      {/* Other Provisions Section */}
      <section>
        <h2>Other Provisions</h2>
        <ul>
          <li>Severability: If any provision of these Terms is found to be invalid, it shall be deleted without affecting the remaining provisions.</li>
          <li>Variation of Terms: SQT Bio Microneedling Canada may revise these Terms at any time.</li>
          <li>Assignment: SQT Bio Microneedling Canada may assign its rights or obligations under these Terms without notification.</li>
          <li>Entire Agreement: These Terms constitute the entire agreement between SQT Bio Microneedling Canada and you.</li>
        </ul>
      </section>
    </div>
  );
}
