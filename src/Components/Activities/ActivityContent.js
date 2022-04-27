import React from 'react';
import { Link } from 'react-router-dom';
import './activityContent.css';

export default function ActivityContent({ activity }) {
  const { image, name, id } = activity;
  return (
    <div className="activity-content">
      <Link to={`/activities/${id}`}>
        <img className="activity-image" alt="activity" src={image} />
      </Link>

      <div
        className="activity-name"
        dangerouslySetInnerHTML={{ __html: name }}
      />
    </div>
  );
}
