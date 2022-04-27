import { useEffect, useState } from 'react';
import ActivityContent from './ActivityContent';
import PublicHeader from '../Header/PublicHeader';
import { getActivities } from '../../Services/activitiesService';
import './activityContent.css';

function ActivitiesDisplay() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    getAllActivities();
  }, []);

  async function getAllActivities() {
    const { data } = await getActivities();
    const content = data.filter((activity) => activity.group_id !== null);
    setActivities(content);
  }

  return (
    <>
      <PublicHeader />
      <div className="activities-display">
        {activities?.map((act) => (
          <ActivityContent activity={act} />
        ))}
      </div>
    </>
  );
}

export default ActivitiesDisplay;
