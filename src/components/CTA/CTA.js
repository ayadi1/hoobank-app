import React from "react";
import "./CTA.css";

export default function CTA() {
  return (
    <div className="app__CTA">
      <div className="app__CTA-headlines">
        <h2>Let’s try our service now!</h2>
        <p>
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>
      <div className="app__CTA-buttons">
        <button>Get Started</button>
      </div>
    </div>
  );
}
