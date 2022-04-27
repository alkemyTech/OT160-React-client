import React from 'react';
import Header from './Header';
import Slider from './Slider';
import Content from './Content';
import Footer from './Footer';
import PublicHeader from "../../Components/Header/PublicHeader";

const ToysCampaign = () => {
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
 
export default ToysCampaign;