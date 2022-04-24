import React from 'react';
import Title from '../Title/Title';
import ActivitiesList from './ActivitiesList';

export default function ActivitiesHome() {
  return (
    <>
      <div className='my-2'>
        <Title title={"Actividades"} />
      </div>
      <div className='mt-4'>
        <ActivitiesList />
      </div>
    </>
  )
}
