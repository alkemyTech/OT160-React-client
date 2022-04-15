import React from 'react';
import "./header.scss";

const toysLogoImg = "/images/campaigns/toys/toys-logotype.png";

const Header = () => {
  return (
    <div className='header border-bottom'>
      <img className="header__logo" alt='logo' src={toysLogoImg} />
    </div>
  );
}

export default Header;