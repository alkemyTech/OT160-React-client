import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ActivitiesForm from "./Components/Activities/ActivitiesForm";
import Register from "./Components/Auth/RegisterForm";
import CategoriesForm from "./Components/Categories/CategoriesForm";
import NewsForm from "./Components/News/NewsForm";
import SlidesForm from "./Components/Slides/SlidesForm";
import TestimonialForm from "./Components/Testimonials/TestimonialsForm";
import UserForm from "./Components/Users/UsersForm";
import SchoolCampaign from "./Campaigns/School/SchoolCampaign";
import ToysCampaign from "./Campaigns/Toys/ToysCampaign";
import MembersForm from "./Components/Members/MembersForm";
import ProjectsForm from "./Components/Projects/ProjectsForm";
import About from "./Components/About/About";
import Backoffice from "./Components/Backoffice/backoffice";
import EditOrganization from "./Components/Organization/EditOrganization";
import Login from "./Components/Login/Login";
import UsersList from "./Components/Users/UsersList";
import ActivitiesList from "./Components/Activities/ActivitiesList";
import { spring, AnimatedSwitch } from "react-router-transition";
function App() {
  // we need to map the `scale` prop we define below
  // to the transform style property
  function mapStyles(styles) {
    return {
      opacity: styles.opacity,
      transform: `scale(${styles.scale})`,
    };
  }

  // wrap the `spring` helper to use a bouncy config
  function bounce(val) {
    return spring(val, {
      stiffness: 330,
      damping: 22,
    });
  }

  // child matches will...
  const bounceTransition = {
    // start in a transparent, upscaled state
    atEnter: {
      opacity: 0.5,
      scale: bounce(0.8),
    },
    // leave in a transparent, downscaled state
    atLeave: {
      opacity: bounce(0),
      scale: bounce(0.8),
    },
    // and rest at an opaque, normally-scaled state
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
          {/* <Route path="/" exact component={} />           Esta ruta debe ser para el Home */}
          <Route path="/register" component={Register} />
          <Route path="/about" component={About} />
          <Route path="/create-activity" component={ActivitiesForm} />
          <Route path="/create-category" component={CategoriesForm} />
          <Route path="/create-news" component={NewsForm} />
          <Route path="/backoffice/activities" component={ActivitiesList} />
          <Route path="/backoffice/Slides" component={SlidesForm} />
          <Route
            path="/backoffice/organization/edit"
            component={EditOrganization}
          />
          <Route exact path="/backoffice/users" component={UsersList} />
          <Route
            path="/backoffice/organization/edit"
            component={EditOrganization}
          />
          <Route exact path="/backoffice/users" component={UsersList} />
          <Route exact path="/backoffice" component={Backoffice} />
          <Route path="/create-testimonials" component={TestimonialForm} />
          <Route path="/create-user" component={UserForm} />
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
