import React from 'react';
import Title from '../../Title/Title';
import './activitydetails.scss';

export default function ActivityDetailsCard({ title, description, image }) {
  return (
    <div className="detail-container">
      <div className="detail-card">
        <Title title={title} />
        <div
          className="activity-description"
          dangerouslySetInnerHTML={{ __html: description }}
        ></div>
      </div>
      <img className="activity-image" alt="activity" src={image} />
    </div>
  );
}
