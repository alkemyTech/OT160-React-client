import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ActivityDetailsCard from './ActivityDetailsCard';
import './activitydetails.scss';
import PublicHeader from "../../Header/PublicHeader";

export default function ActivityDetails() {
  const { id } = useParams();
  const [response, setResponse] = useState();
  const Mock = {
    data: {
      id: id,
      title: "my journey",
      description:
        "Qui laboris tempor nostrud commodo Lorem commodo duis Lorem pariatur. Duis duis officia est sint incididunt sint anim. Voluptate labore ullamco sit est.Eu mollit ipsum aliqua et culpa veniam veniam est enim voluptate ut. Mollit Lorem nisi aute magna tempor et tempor commodo ex voluptate ullamco ullamco id. Esse est laboris consectetur et in ipsum officia consequat enim mollit sunt mollit quis. Occaecat ex est eiusmod Lorem fugiat id ipsum labore amet pariatur. Duis ullamco amet proident velit aliquip pariatur ex sit enim ex anim laborum veniam. Esse duis cillum ipsum dolor sint cupidatat sint eiusmod reprehenderit. Esse ea minim ex consequat velit aute eiusmod cupidatat.",
    },
    error: {
      
    }
  };
  useEffect(() => {
    getActivityDetailContent();
  }, []);

  async function getActivityDetailContent() {
    const { data, error } = Mock; // @todo: implement service to request content
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
      <PublicHeader />
      <h3>Detail Section</h3>
      <ActivityDetailsCard
        title={response.data.title}
        description={response.data.description}
      />
    </div>
  );
}
