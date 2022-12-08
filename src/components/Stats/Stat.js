import React from "react";
import { stats } from "../../constants";

export default function Stat({ title, value }) {
  return (
    <div className="app__Stats-stat">
      <h2>{value}</h2>
      <p className="bg-blue-gradient">{title}</p>
    </div>
  );
}
