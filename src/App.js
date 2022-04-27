import React,{ Suspense, useState, useContext } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import { spring, AnimatedSwitch } from 'react-router-transition';
import { ReactReduxContext } from 'react-redux'
import PrivateRoute from './routes/PrivateRoute';
import ActivitiesForm from './Components/Activities/ActivitiesForm';
import ActivityDetails from './Components/Activities/ActivityDetails/ActivityDetails';
import Register from './Components/Auth/RegisterForm';
import CategoriesForm from './Components/Categories/CategoriesForm';
import NewsForm from './Components/News/NewsForm';
import News from "./Components/News/NewsList";
import Slides from './Components/Slides/Slides';
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
import HomeEditForm from './Components/Home/HomeEditForm';
import Organization from './Components/Organization/Organization';
import UsersList from './Components/Users/UsersList';
import Home from './Components/Home';
import ActivitiesList from './Components/Activities/ActivitiesList';
import TestimonialsDisplay from './Components/Testimonials/TestimonialsDisplay';
import ContactForm from './Components/Contact/ContactForm';

function App() {
  const [isUserAuthenticated, setIsUserAuthenticated] = useState(false);
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false);

  const {store} = useContext(ReactReduxContext);

  store.subscribe(() => {
    const stores = store.getState();
    if(stores.user.userData.role_id === 1){
      setIsAdminAuthenticated(true);
    } else if (stores.user.userData.role_id === 2){
      setIsUserAuthenticated(true)
    }
  });

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
        <Suspense fallback={<div>Loading</div>}>
          <AnimatedSwitch
            atEnter={bounceTransition.atEnter}
            atLeave={bounceTransition.atLeave}
            atActive={bounceTransition.atActive}
            mapStyles={mapStyles}
          >
            <Route path="/" exact component={Home} />
            <Route path="/register" exact component={Register} />
            <Route path="/about" exact component={About} />
            <Route path="/activities" component={ActivityDetails} />
            <Route
              path="/donate"
              component={
              () => {
                const welcomeText = "Bienvenido a la seccion de donaciones.";
                return <Donation text={welcomeText} />;
              }}
            />
            <Route path="/testimonials" component={TestimonialsDisplay} />
            <Route path="/news" component={News} />
            <Route path="/contact-us" component={ContactForm} />
            <Route path="/organization" component={Organization}/>
            <Route path="/create-user" component={UserForm} />
            <Route path="/thanks" component={Thanks} />
            <Route path="/school-campaign" component={SchoolCampaign} />
            <Route path="/toys-campaign" component={ToysCampaign} />
            <Route path="/login" component={Login} />
            <PrivateRoute path="/create-activity" isAuthenticated={isAdminAuthenticated} redirect="/">
              <ActivitiesForm />
            </PrivateRoute>
            <PrivateRoute path="/home-edition" isAuthenticated={isAdminAuthenticated} redirect="/">
              <HomeEditForm />
            </PrivateRoute>
            <PrivateRoute path="/create-category" isAuthenticated={isAdminAuthenticated} redirect="/">
              <CategoriesForm />
            </PrivateRoute>
            <PrivateRoute path="/backoffice/organization/edit" isAuthenticated={isAdminAuthenticated} redirect="/">
              <EditOrganization />
            </PrivateRoute>
            <PrivateRoute path="/create-news" isAuthenticated={isAdminAuthenticated} redirect="/">
              <NewsForm />
            </PrivateRoute>
            <PrivateRoute path="/create-testimonials" isAuthenticated={isUserAuthenticated} redirect="/login">
              <TestimonialForm />
            </PrivateRoute>
            <PrivateRoute path="/create-member" isAuthenticated={isAdminAuthenticated} redirect="/">
              <MembersForm />
            </PrivateRoute>
            <PrivateRoute path="/create-project" isAuthenticated={isAdminAuthenticated} redirect="/">
              <ProjectsForm />
            </PrivateRoute>
            <PrivateRoute path="/backoffice" isAuthenticated={isAdminAuthenticated} redirect="/">
              <Backoffice />
            </PrivateRoute>
            <PrivateRoute path="/backoffice/slides" isAuthenticated={isAdminAuthenticated} redirect="/">
              <SlidesForm />
            </PrivateRoute>
            <PrivateRoute path="/backoffice/activities" isAuthenticated={isAdminAuthenticated} redirect="/">
              <ActivitiesList />
            </PrivateRoute>
            <PrivateRoute path="/backoffice/users" isAuthenticated={isAdminAuthenticated} redirect="/">
              <UsersList />
            </PrivateRoute>
          </AnimatedSwitch>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
