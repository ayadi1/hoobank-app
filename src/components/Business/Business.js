import React from "react";
import "./Business.css";
import Feature from "./Feature";
import { features } from "../../constants";

export default function Business() {
  return (
    <div className="app__Business">
      <div className="app__Business-content">
        <h2>You do the business, we’ll handle the money.</h2>
        <p>
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>
        <button>Get Started</button>
      </div>
      <div className="app__Business-cords">
        {features.map((feature) => (
          <Feature
            key={feature.id}
            content={feature.content}
            title={feature.title}
            icon={feature.icon}
          />
        ))}
      </div>
    </div>
  );
}
