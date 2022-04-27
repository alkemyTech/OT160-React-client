import React from 'react';
import { DEFAULT_IMAGE_FOR_TITLE } from '../../utility/imagesUtility';
import '../Title/title.scss';

export default function Title({ title, image = DEFAULT_IMAGE_FOR_TITLE }) {
  return (
    <div
      style={{
        borderRadius: '10px',
        boxShadow: '1px 1px 20px black',
        backgroundImage: `url(${image})`,
      }}
    >
      <h1 className="align-text-center p-2"> {title} </h1>
    </div>
  );
}
