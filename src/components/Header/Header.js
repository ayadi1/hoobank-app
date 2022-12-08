import React from "react";
import "./Header.css";
import { robot, discount, arrowUp } from "../../assets";
export default function Header() {
  return (
    <div className="app__Header bg-gray-gradient">
      <div className="app__Header-container">
        <div className="app__Header-container-content">
          <div className="app__Header-container-content-discount bg-discount-gradient">
            <img src={discount} alt="discount" />
            <p>
              <span>20%</span> DISCOUNT FOR <span>1 MONTH</span> ACCOUNT
            </p>
          </div>
          <div className="app__Header-container-content__title">
            <div className="app__Header-container-content__title-head">
              <h2>
                the Next <span className="bg-blue-gradient">Generation</span>
              </h2>
              <div className="app__Header-container-content__title-head__get bg-blue-gradient">
                <div>
                  Get <img src={arrowUp} alt="" />
                </div>
                <div>Started</div>
              </div>
            </div>
            <div className="app__Header-container-content__title-foot">
              Payment Method.
            </div>
          </div>
          <p>
            Our team of experts uses a methodology to identify the credit cards
            most likely to fit your needs. We examine annual percentage rates,
            annual fees.
          </p>
        </div>
        <div className="app__Header-container-image ">
          <img src={robot} alt="robot" />
        </div>
      </div>
    </div>
  );
}
