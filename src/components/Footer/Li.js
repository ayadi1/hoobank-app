import React from "react";

export default function Li({ link, name }) {
  return (
    <li>
      <a href={link}>{name}</a>
    </li>
  );
}
