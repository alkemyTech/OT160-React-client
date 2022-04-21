import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ActivityDetailsCard from './ActivityDetailsCard';
import './activitydetails.scss';
import {showActivityByid} from '../../../Services/activitiesService';
export default function ActivityDetails() {
  const { id } = useParams();
  const [response, setResponse] = useState();

  useEffect(() => {
    getActivityDetailContent();
  }, [id]);

  async function getActivityDetailContent() {
    const { data, error } = await showActivityByid(id); // @todo: implement service to request content
    if (error) {
      console.log(error); // @todo: error handling
    } else {
      setResponse(data);
    }
  }

  /** here we will get the activity by the id and after that we
   * will sent the title and the description of the activity to the ActivityDetailsCard */
  return (
    <div>
      <h3>Detail Section</h3>
      <ActivityDetailsCard
        title={response.title}
        description={response.description}
      />
    </div>
  );
}
