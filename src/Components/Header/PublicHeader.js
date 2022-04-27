import React from 'react';
import { Link } from 'react-router-dom';
import SomosMasLogoImg from '../../icons/somos-mas-logotype.png';
import './header.css';

const PublicHeader = () => {
  return (
    <div className="header-public">
      <div>
        <img src={SomosMasLogoImg} alt="logo" />
        <button className="navbar-toggler shadow-none mt-2 " type="button">
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
      <div>
        <nav className="header-items-public">
          <Link className="header-item" to="/">
            Inicio
          </Link>
          <Link className="header-item" to="/about">
            Nosotros
          </Link>
          <Link className="header-item" to="/activities">
            Actividades
          </Link>
          <Link className="header-item" to="/news">
            Novedades
          </Link>
          <Link className="header-item" to="/testimonials">
            Testimonios
          </Link>
          <Link className="header-item" to="/contact-us">
            Contacto
          </Link>
          <Link className="header-item" to="/donate">
            Contribuye
          </Link>
        </nav>
      </div>
      <div className="buttons">
        <button className="btn btn-light">Log in</button>
        <button className="btn btn-primary">Registate</button>
      </div>
    </div>
  );
};

export default PublicHeader;
