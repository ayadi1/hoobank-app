import React from "react";

export default function Img({ img, alt }) {
  return (
    <>
      <img  alt={alt} src={img} />
    </>
  );
}
