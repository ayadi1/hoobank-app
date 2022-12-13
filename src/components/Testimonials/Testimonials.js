import React from "react";
import "./Testimonials.css";
import Feedback from "./Feedback";
import { feedback } from "../../constants";
export default function Testimonials() {
  return (
    <div className="app_Testimonials">
      <div className="app_Testimonials-headlines">
        <h2>What people are saying about us</h2>
        <p>
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>
      <div className="app_Testimonials-feedback-cards">
        {feedback.map((f) => (
          <Feedback
            key={f.id}
            name={f.name}
            content={f.content}
            img={f.img}
            title={f.title}
          />
        ))}
      </div>
    </div>
  );
}
