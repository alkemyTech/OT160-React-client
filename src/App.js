import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import ActivitiesForm from './Components/Activities/ActivitiesForm';
import ActivityDetails from './Components/Activities/ActivityDetails/ActivityDetails';
import Register from './Components/Auth/RegisterForm';
import CategoriesForm from './Components/Categories/CategoriesForm';
import NewsForm from './Components/News/NewsForm';
import Slides from "./Components/Slides/Slides";
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
import Organization from './Components/Organization/Organization'
import UsersList from './Components/Users/UsersList';
import Home from './Components/Home';
import ActivitiesList from './Components/Activities/ActivitiesList';
import { spring, AnimatedSwitch } from 'react-router-transition';
import ActivitiesHome from './Components/Activities/ActivitiesHome';


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
          <Route path="/activities" component={ActivitiesHome} />
          <Route path="/create-activity" component={ActivitiesForm} />
          <Route path="/activities/:id" component={ActivityDetails} />
          <Route path="/create-category" component={CategoriesForm} />
          <Route path="/create-news" component={NewsForm} />
          <Route path="/backoffice/members/edit" component={MembersForm} />
          <Route path="/backoffice/organization" component={Organization} />
          <Route path="/backoffice/activities" component={ActivitiesList} />
          <Route path="/backoffice/Slides" component={Slides} />
          <Route path="/backoffice/Slides/create" component={SlidesForm} />
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
            component={() => {
              const welcomeText = 'Bienvenido a la seccion de donacines.';
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
