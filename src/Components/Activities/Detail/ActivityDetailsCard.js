import React from "react";
import Title from "../../Title/Title";
import "./activitydetails.scss";

export default function ActivityDetailsCard({title,description}) {
  return (
    <div className="detail-container">
      <div className="detail-card">
        <Title title={title} img="" />
        <p>
          {description}
        </p>
      </div>
    </div>
  );
}
