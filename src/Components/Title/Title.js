import React from 'react';
import '../Title/title.scss';

export default function Title({ title }) {
  return (
    <div
      style={{
        borderRadius: '5px',
        backgroundColor: `#9AC9DA`,
      }}
    >
      <h1 className="align-text-center"> {title} </h1>
    </div>
  );
}
