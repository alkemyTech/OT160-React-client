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
          <a className="header-item" href="/#news">
            Novedades
          </a>
          <a className="header-item" href="/#testimonials">
            Testimonios
          </a>
          <Link className="header-item" to="/contact-us">
            Contacto
          </Link>
          <Link className="header-item" to="/donate">
            Contribuye
          </Link>
        </nav>
      </div>
      <div className="buttons">
        <Link to="/login" className="btn btn-light">Log in</Link>
        <Link to="/create-user" className="btn btn-primary">Registrate</Link>
      </div>
    </div>
  );
};

export default PublicHeader;
