import React from "react";

export default function A({ link }) {
  return (
    <a href={"#" + link.title} key={link.id}>
      {link.title}
    </a>
  );
}
