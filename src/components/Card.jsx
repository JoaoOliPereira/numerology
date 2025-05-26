import React from "react";
import "./Card.css"; // vamos criar este CSS depois

export default function Card({ title, description, children }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="card-content">{children}</div>
    </div>
  );
}