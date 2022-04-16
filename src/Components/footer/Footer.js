import React from 'react';
import logo from "../../icons/user/LOGO-SOMOS MAS.png";
import Icon from './Icon';
import "./footer.scss";
import Links from './Links';
export default function Footer() {
  const instagram = "INSTAGRAM"
  return (
    <>
      <div className='footer'>
        <div className='row bg-black'>
          <div className='col-lg-2'><Links/></div>
          <div className='col-lg-2'><Links/></div>
          <div className='col-lg-4'>
            <div className='d-flex justify-content-center flex-md-column align-items-md-center'>
              <img src={logo} className="img position-absolute" style={{ top: -10 }} alt="logo"></img>
              <p className='text-white d-none d-md-block mb-0 mt-5'>SOMOS MAS SITE</p>
            </div>
          </div>
          <div className='col-lg-2'><Links/></div>
          <div className='col-lg-2'><Links/></div>
          <hr className='hr d-none d-xl-block'/>
          <div className='icon d-flex justify-content-around mt-5 mt-md-2 mb-1 mb-md-3'>
            <Icon name={"instagram"} />
            <Icon name={"facebook"} />
            <Icon name={"twitter"} />
            <Icon name={"linkedin"} />
          </div>
        </div>
      </div>
    </>
  )
}
