import React from 'react';
import SomosMasLogoImg from "../../icons/somos-mas-logotype.png";
import './header.css';

const PublicHeader = () => {
  return (
    <div className="header-public">
        <div>
          <img src={SomosMasLogoImg} alt="logo"/>
          <button className="navbar-toggler shadow-none mt-2 " type="button">
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        <div>
          <nav className="header-items-public">
            <a className='header-item' href='/'>Inicio</a>
            <a className='header-item' href='/about'>Nosotros</a>
            <a className='header-item' href='/activities'>Actividades</a>
            <a className='header-item' href='/#news'>Novedades</a>
            <a className='header-item' href='/#testimonials'>Testimonios</a>
            <a className='header-item' href='/contact-us'>Contacto</a>
            <a className='header-item' href='/donate'>Contribuye</a>
          </nav>
        </div>
        <div className='buttons'>
        <a className='btn btn-light' href='/login'>Login</a>
        <a className='btn btn-primary' href='/create-user'>Registrarse</a>
        </div>
    </div>
  );
};

export default PublicHeader;
