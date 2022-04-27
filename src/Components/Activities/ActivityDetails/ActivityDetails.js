import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ActivityDetailsCard from './ActivityDetailsCard';
import { getActivity } from '../../../Services/activitiesService';
import { errorAlert } from '../../../Services/alertsService';
import './activitydetails.scss';

export default function ActivityDetails() {
  const { id } = useParams();
  const [activity, setActivity] = useState();

  useEffect(() => {
    getDetails();
  }, [id]);

  async function getDetails() {
    const { data, error } = await getActivity(id);

    if (error) {
      errorAlert('Error', 'No se pudo obtener el detalle de esa actividad.');
    } else {
      setActivity(data);
    }
  }

  return (
    <div>
      <h4>Detalle de la actividad</h4>
      <ActivityDetailsCard
        title={activity?.name}
        description={activity?.description}
        image={activity?.image}
      />
    </div>
  );
}
