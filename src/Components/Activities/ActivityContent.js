import React from 'react';
import { Link } from 'react-router-dom';
import './activityContent.css';

export default function ActivityContent({ activity }) {
  const { image, name, id } = activity;
  return (
    <Link to={`/activities/${id}`}>
      <div className="activity-content">
        <img className="activity-image" alt="activity" src={image} />
        <div
          className="activity-name"
          dangerouslySetInnerHTML={{ __html: name }}
        />
      </div>
    </Link>
  );
}
