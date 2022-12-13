import React from "react";
import { quotes } from "../../assets";
import "./Feedback.css";
export default function Feedback({ content, name, title, img }) {
  return (
    <div className="app__Feedback feature-card">
      <img className="app__Feedback-quotes-img" src={quotes} alt="quotes" />
      <p>{content}</p>
      <div className="app__Feedback-title">
        <img src={img} alt={title} />
        <div className="app__Feedback-title_name">
          <h3>{name}</h3>
          <h4>{title}</h4>
        </div>
      </div>
    </div>
  );
}
