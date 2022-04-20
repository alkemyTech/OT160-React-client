import React from 'react';
import "./header.scss";
import ongLogoImg from "../../../icons/somos-mas-logotype.png";

const toysLogoImg = "/images/campaigns/toys/toys-logotype.png";
const toysSlogan = "/images/campaigns/toys/toys-slogan.png";

const Header = () => {
  return (
    <div className='header border-bottom'>
      <img src={toysSlogan} alt="campaign slogan" className='header__slogan'/>
      <img className="header__campaign-logo" alt='campaign logo' src={toysLogoImg} />
      <img src={ongLogoImg} alt="somos más logo" className='header__ong-logo'/>
    </div>
  );
}

export default Header;