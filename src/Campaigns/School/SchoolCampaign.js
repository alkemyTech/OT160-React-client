import React from 'react';
import PublicHeader from "../../Components/Header/PublicHeader";
import Header from './Header/Header';
import Slider from './Slider';
import Content from './Content';
import Footer from './Footer';

const SchoolCampaign = () => {
  return (
    <>
      <PublicHeader />
      <Header />
      <Slider />
      <Content />
      <Footer />
    </>
  );
}
 
export default SchoolCampaign;