import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import ActivitiesForm from './Components/Activities/ActivitiesForm';
import ActivityDetails from './Components/Activities/ActivityDetails/ActivityDetails';
import Register from './Components/Auth/RegisterForm';
import CategoriesForm from './Components/Categories/CategoriesForm';
import NewsForm from './Components/News/NewsForm';
import SlidesForm from './Components/Slides/SlidesForm';
import TestimonialForm from './Components/Testimonials/TestimonialsForm';
import UserForm from './Components/Users/UsersForm';
import SchoolCampaign from './Campaigns/School/SchoolCampaign';
import ToysCampaign from './Campaigns/Toys/ToysCampaign';
import MembersForm from './Components/Members/MembersForm';
import Donation from './Components/Donations/Donation';
import Thanks from './Components/Donations/Thanks';
import ProjectsForm from './Components/Projects/ProjectsForm';
import About from './Components/About/About';
import Backoffice from './Components/Backoffice/backoffice';
import EditOrganization from './Components/Organization/EditOrganization';
import Login from './Components/Login/Login';
import UsersList from './Components/Users/UsersList';
import HomeEditForm from './Components/Home/HomeEditForm';
import Home from './Components/Home';
import ActivitiesList from './Components/Activities/ActivitiesList';
<<<<<<< HEAD
=======
import { spring, AnimatedSwitch } from 'react-router-transition';
>>>>>>> b13b5076960d9f01ec9e24cec6d1f25be921d1e9

function App() {
  
  function mapStyles(styles) {
    return {
      opacity: styles.opacity,
      transform: `scale(${styles.scale})`,
    };
  }

  function bounce(val) {
    return spring(val, {
      stiffness: 330,
      damping: 22,
    });
  }

  const bounceTransition = {
    atEnter: {
      opacity: 0.5,
      scale: bounce(10),
    },
    atLeave: {
      opacity: bounce(0),
      scale: bounce(0.8),
    },
    atActive: {
      opacity: bounce(1),

      scale: bounce(1),
    },
  };

  return (
    <>
      <BrowserRouter>

        <AnimatedSwitch
          atEnter={bounceTransition.atEnter}
          atLeave={bounceTransition.atLeave}
          atActive={bounceTransition.atActive}
          mapStyles={mapStyles}
        >
          <Route path="/" exact component={Home} />
          <Route path="/register" component={Register} />
          <Route path="/about" component={About} />
          <Route path="/create-activity" component={ActivitiesForm} />
          <Route path="/activities/:id" component={ActivityDetails} />
          <Route path="/create-category" component={CategoriesForm} />
          <Route path="/create-news" component={NewsForm} />
          <Route exact path="/backoffice" component={Backoffice} />
          <Route path="/backoffice/organization" component={HomeEditForm} />
          <Route path="/backoffice/activities" component={ActivitiesList} />
          <Route path="/backoffice/Slides" component={SlidesForm} />
          <Route
            path="/backoffice/organization/edit"
            component={EditOrganization}
          />
          <Route exact path="/backoffice/users" component={UsersList} />
          <Route exact path="/backoffice" component={Backoffice} />
          <Route path="/create-testimonials" component={TestimonialForm} />
          <Route path="/create-user" component={UserForm} />
          <Route
            path="/donate"
            component={
            () => {
              const welcomeText = "Bienvenido a la seccion de donacines.";
              return <Donation text={welcomeText} />;
            }}
          />
          <Route path="/thanks" component={Thanks} />
          <Route path="/create-member" component={MembersForm} />
          <Route path="/create-project" component={ProjectsForm} />
          <Route path="/school-campaign" component={SchoolCampaign} />
          <Route path="/toys-campaign" component={ToysCampaign} />
          <Route path="/login" component={Login} />
        </AnimatedSwitch>
      </BrowserRouter>
    </>
  );
}

export default App;
