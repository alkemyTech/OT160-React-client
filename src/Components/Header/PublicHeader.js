import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const PublicHeader = () => {
  return (
    <div className="header-public">
      <div>
        <div className="container-fluid">
          <button className="navbar-toggler shadow-none mt-2 " type="button">
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        <div>
          <nav className="header-items-public">
            <Link to="/">Inicio</Link>
            <Link to="/contact">Contacto</Link>
            <Link to="/about">Nosotros</Link>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default PublicHeader;
