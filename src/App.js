import React,{ Suspense } from 'react';
import {BrowserRouter, Switch} from 'react-router-dom';
import PublicRoute from './routes/PublicRoute'; 
import PrivateRoute from './routes/PrivateRoute';
import ActivitiesForm from './Components/Activities/ActivitiesForm';
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
import Login from './Components/Login/Login';
import UsersList from './Components/Users/UsersList';

function App() {
  const isAuthenticated = false;

  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<div>Loading</div>}>
          <Switch>
            <PublicRoute path="/register" isAuthenticated={isAuthenticated}>
              <Register />
            </PublicRoute>
            <PublicRoute path="/about" isAuthenticated={isAuthenticated}>
              <About />
            </PublicRoute>
            <PublicRoute path="/create-activity" isAuthenticated={isAuthenticated}>
              <ActivitiesForm />
            </PublicRoute>
            <PublicRoute path="/create-category" isAuthenticated={isAuthenticated}>
              <CategoriesForm />
            </PublicRoute>
            <PublicRoute path="/create-news" isAuthenticated={isAuthenticated}>
              <NewsForm />
            </PublicRoute>
            <PublicRoute path="/create-testimonials" isAuthenticated={isAuthenticated}>
              <TestimonialForm />
            </PublicRoute>
            <PublicRoute path="/create-user" isAuthenticated={isAuthenticated}>
              <UserForm />
            </PublicRoute>
            <PublicRoute path="/create-member" isAuthenticated={isAuthenticated}>
              <MembersForm />
            </PublicRoute>
            <PublicRoute path="/school-campaign" isAuthenticated={isAuthenticated}>
              <SchoolCampaign />
            </PublicRoute>
            <PublicRoute path="/toys-campaign" isAuthenticated={isAuthenticated}>
              <ToysCampaign />
            </PublicRoute>
            <PublicRoute path="/login" isAuthenticated={isAuthenticated}>
              <Login />
            </PublicRoute>
            <PrivateRoute path="/backoffice" isAuthenticated={isAuthenticated}>
              <Backoffice />
            </PrivateRoute>
            <PrivateRoute path="/backoffice/slides" isAuthenticated={isAuthenticated}>
              <SlidesForm />
            </PrivateRoute>
            <PrivateRoute path="/backoffice/users" isAuthenticated={isAuthenticated}>
              <UsersList />
            </PrivateRoute>
          {/* <Route path="/" exact component={} />           Esta ruta debe ser para el Home */}
          {/* <Route path="/register" component={Register} />
          <Route path="/about" component={About}/>
          <Route path="/create-activity" component={ActivitiesForm} />
          <Route path="/create-category" component={CategoriesForm} />
          <Route path="/create-news" component={NewsForm} />
          <Route path="/backoffice" component={Backoffice} />
          <Route path="/backoffice/Slides" component={SlidesForm} />
          <Route exact path="/backoffice/users" component={UsersList}/>
          <Route path="/create-testimonials" component={TestimonialForm} />
          <Route path="/create-user" component={UserForm} />
          <Route path="/create-member" component={MembersForm} />
          <Route path="/create-project" component={ProjectsForm} />
          <Route path="/school-campaign" component={SchoolCampaign} />
          <Route path="/toys-campaign" component={ToysCampaign} />
          <Route path="/login" component={Login} /> */}
          </Switch>
        </Suspense>
      </BrowserRouter>
    
    </>
  );
}

export default App;
