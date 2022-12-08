import React from "react";
import "./Billing.css";
import { apple, google , bill } from "../../assets";
export default function Billing() {
  return (
    <div className="app__Billing">
      <div className="app__Billing-image">
        <img src={bill} alt="" />
      </div>
      <div className="app__Billing-content">
        <h2>Easily control your billing & invoicing.</h2>
        <p>
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
          aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
          placerat.
        </p>
        <div className="app__Billing-content-download">
          <img src={apple} alt="apple" />
          <img src={google} alt="google" />
        </div>
      </div>
    </div>
  );
}
