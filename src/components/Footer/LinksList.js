import React from "react";
import "./LinksList.css";
import Li from "./Li";
export default function LinksList({ title, links }) {
  return (
    <div className="app__LinksList">
      <h3>{title}</h3>
      <ul>
        {links.map((link, i) => (
          <Li key={link.name} link={link.link} name={link.name} />
        ))}
      </ul>
    </div>
  );
}
