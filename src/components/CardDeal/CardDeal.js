import React from "react";
import "./CardDeal.css";
import { card } from "../../assets";
export default function CardDeal() {
  return (
    <div className="app__CardDeal">
      <div className="app__CardDeal-content">
        <h2>Find a better card deal in few easy steps.</h2>
        <p>
          Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
          aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
        </p>
        <button>Get Started</button>
      </div>
      <div className="app__CardDeal-image">
        <img src={card} alt="" />
      </div>
    </div>
  );
}
