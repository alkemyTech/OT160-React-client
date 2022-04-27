import React, { useState, useContext } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { ReactReduxContext } from 'react-redux';
import ActivitiesForm from './Components/Activities/ActivitiesForm';
import ActivityDetails from './Components/Activities/ActivityDetails/ActivityDetails';
import Register from './Components/Auth/RegisterForm';
import CategoriesForm from './Components/Categories/CategoriesForm';
import NewsForm from './Components/News/NewsForm';
import News from './Components/News/NewsList';
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

  const { store } = useContext(ReactReduxContext);

  store.subscribe(() => {
    const stores = store.getState();
    if (stores.user.userData.role_id === 1) {
      setIsAdminAuthenticated(true);
    } else if (stores.user.userData.role_id === 2) {
      setIsUserAuthenticated(true);
    }
  });

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/activities/:id" element={<ActivityDetails />} />
        <Route
          path="/donate"
          element={() => {
            const welcomeText = 'Bienvenido a la seccion de donacines.';
            return <Donation text={welcomeText} />;
          }}
        />
        <Route path="/testimonials" element={<TestimonialsDisplay />} />
        <Route path="/news" element={<News />} />
        <Route path="/contact-us" element={<ContactForm />} />
        <Route path="/organization" element={<Organization />} />
        <Route path="/create-user" element={<UserForm />} />
        <Route path="/thanks" element={<Thanks />} />
        <Route path="/school-campaign" element={<SchoolCampaign />} />
        <Route path="/toys-campaign" element={<ToysCampaign />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/create-activity"
          element={
            isAdminAuthenticated ? <ActivitiesForm /> : <Navigate to="/" />
          }
        />
        <Route
          path="/home-edition"
          element={
            isAdminAuthenticated ? <HomeEditForm /> : <Navigate to="/" />
          }
        />
        <Route
          path="/create-category"
          element={
            isAdminAuthenticated ? <CategoriesForm /> : <Navigate to="/" />
          }
        />
        <Route
          path="/backoffice/organization/edit"
          element={
            isAdminAuthenticated ? <EditOrganization /> : <Navigate to="/" />
          }
        />
        <Route
          path="/create-news"
          element={isAdminAuthenticated ? <NewsForm /> : <Navigate to="/" />}
        />
        <Route
          path="/create-testimonials"
          element={
            isUserAuthenticated ? <TestimonialForm /> : <Navigate to="/login" />
          }
        />
        <Route
          path="/create-member"
          element={isAdminAuthenticated ? <MembersForm /> : <Navigate to="/" />}
        />
        <Route
          path="/create-project"
          element={
            isAdminAuthenticated ? <ProjectsForm /> : <Navigate to="/" />
          }
        />
        <Route
          path="/backoffice"
          element={isAdminAuthenticated ? <Backoffice /> : <Navigate to="/" />}
        />
        <Route
          path="/backoffice/slides"
          element={isAdminAuthenticated ? <SlidesForm /> : <Navigate to="/" />}
        />
        <Route
          path="/backoffice/activities"
          element={
            isAdminAuthenticated ? <ActivitiesList /> : <Navigate to="/" />
          }
        />
        <Route
          path="/backoffice/users"
          element={isAdminAuthenticated ? <UsersList /> : <Navigate to="/" />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
