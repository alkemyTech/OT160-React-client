import React,{ Suspense, useState, useEffect } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {get} from "./Services/privateApiService";
import UserRoute from './routes/UserRoute'; 
import PrivateRoute from './routes/PrivateRoute';
import ActivitiesForm from './Components/Activities/ActivitiesForm';
import ActivityDetails from './Components/Activities/Detail/ActivityDetails';
import Register from './Components/Auth/RegisterForm';
import CategoriesForm from './Components/Categories/CategoriesForm';
import NewsForm from './Components/News/NewsForm';
import SlidesForm from './Components/Slides/SlidesForm';
import TestimonialForm from './Components/Testimonials/TestimonialsForm';
import UserForm from './Components/Users/UsersForm';
import SchoolCampaign from './Campaigns/School/SchoolCampaign';
import ToysCampaign from './Campaigns/Toys/ToysCampaign';
import MembersForm from './Components/Members/MembersForm';
import ProjectsForm from './Components/Projects/ProjectsForm';
import About from './Components/About/About'
import Backoffice from "./Components/Backoffice/backoffice";
import EditOrganization from './Components/Organization/EditOrganization';
import Login from './Components/Login/Login';
import UsersList from './Components/Users/UsersList';


function App() {

  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false);
  const [isUsertAuthenticated, setIsUsertAuthenticated] = useState(false);

  useEffect(() => {
    
  });

  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<div>Loading</div>}>
          <Switch>
            <Route path="/register" component={Register} />
            <Route path="/about" component={About}/>
            <Route path="/login" component={Login} />
            <Route path="/create-user" component={UserForm} />
            <Route path="/school-campaign" component={SchoolCampaign} />
            <Route path="/toys-campaign" component={ToysCampaign} />
            <Route path="/activity-details" component={ActivityDetails} />            
            <PrivateRoute path="/create-activity" isAuthenticated={isAdminAuthenticated}>
              <ActivitiesForm />
            </PrivateRoute>
            <PrivateRoute path="/create-category" isAuthenticated={isAdminAuthenticated}>
              <CategoriesForm />
            </PrivateRoute>
            <PrivateRoute path="/edit-organization" isAuthenticated={isAdminAuthenticated}>
              <EditOrganization />
            </PrivateRoute>
            <PrivateRoute path="/create-news" isAuthenticated={isAdminAuthenticated}>
              <NewsForm />
            </PrivateRoute>
            <PrivateRoute path="/create-testimonials" isAuthenticated={isAdminAuthenticated}>
              <TestimonialForm />
            </PrivateRoute>
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
            <PrivateRoute path="/backoffice/users" isAuthenticated={isAdminAuthenticated}>
              <UsersList />
            </PrivateRoute>
          </Switch>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
