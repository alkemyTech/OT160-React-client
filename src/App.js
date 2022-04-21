import React,{ Suspense, useState, useContext } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import { spring, AnimatedSwitch } from 'react-router-transition';
import { ReactReduxContext } from 'react-redux'
import UserRoute from './routes/UserRoute'; 
import PrivateRoute from './routes/PrivateRoute';
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

function App() {
  const [isUsertAuthenticated, setIsUsertAuthenticated] = useState(false);
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(true);

  const {store} = useContext(ReactReduxContext);

  store.subscribe(() => {
    const stores = store.getState();
    if(stores.user.userData.role_id === 1){
      setIsAdminAuthenticated(true);
    } else if (stores.user.userData.role_id === 2){
      setIsUsertAuthenticated(true)
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
            <Route path="/register" component={Register} />
            <Route path="/about" component={About} />
            <Route path="/activities/:id" component={ActivityDetails} />
            <Route
              path="/donate"
              component={
              () => {
                const welcomeText = "Bienvenido a la seccion de donacines.";
                return <Donation text={welcomeText} />;
              }}
            />
            <Route path="/create-user" component={UserForm} />
            <Route path="/thanks" component={Thanks} />
            <Route path="/school-campaign" component={SchoolCampaign} />
            <Route path="/toys-campaign" component={ToysCampaign} />
            <Route path="/login" component={Login} />
            <PrivateRoute path="/create-activity" isAuthenticated={isAdminAuthenticated}>
              <ActivitiesForm />
            </PrivateRoute>
            <PrivateRoute path="/home-edition" isAuthenticated={isAdminAuthenticated}>
              <HomeEditForm />
            </PrivateRoute>
            <PrivateRoute path="/create-category" isAuthenticated={isAdminAuthenticated}>
              <CategoriesForm />
            </PrivateRoute>
            <PrivateRoute path="/backoffice/organization/edit" isAuthenticated={isAdminAuthenticated}>
              <EditOrganization />
            </PrivateRoute>
            <PrivateRoute path="/create-news" isAuthenticated={isAdminAuthenticated}>
              <NewsForm />
            </PrivateRoute>
            <UserRoute path="/create-testimonials" isAuthenticated={isUsertAuthenticated}>
              <TestimonialForm />
            </UserRoute>
            <PrivateRoute path="/create-member" isAuthenticated={isAdminAuthenticated}>
              <MembersForm />
            </PrivateRoute>
            <PrivateRoute path="/create-project" isAuthenticated={isAdminAuthenticated}>
              <ProjectsForm />
            </PrivateRoute>
            <PrivateRoute path="/backoffice" isAuthenticated={isAdminAuthenticated}>
              <Backoffice />
            </PrivateRoute>
            <PrivateRoute path="/backoffice/slides" isAuthenticated={isAdminAuthenticated}>
              <SlidesForm />
            </PrivateRoute>
            <PrivateRoute path="/backoffice/activities" isAuthenticated={isAdminAuthenticated}>
              <ActivitiesList />
            </PrivateRoute>
            <PrivateRoute path="/backoffice/users" isAuthenticated={isAdminAuthenticated}>
              <UsersList />
            </PrivateRoute>
          </AnimatedSwitch>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
