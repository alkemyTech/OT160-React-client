import React from "react";
import Title from "../../Title/Title";
import "./detail.css";

export default function DetailCard({title,description}) {
  return (
    <div className="detail-container">
      <div className="card">
        <Title title={title} img="" />
        <p>
          {description}
        </p>
      </div>
    </div>
  );
}
