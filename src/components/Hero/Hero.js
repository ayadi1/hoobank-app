import React from "react";
import "./Hero.css";
import { clients } from "../../constants";
import Img from "./Img";
export default function Hero() {
  return (
    <div className="app__Hero">
      {clients.map((client) => (
        <Img key={client.id} alt={client.id} img={client.logo} />
      ))}
    </div>
  );
}
