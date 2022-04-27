import { Link } from 'react-router-dom';
import SomosMasLogoImg from '../../icons/somos-mas-logotype.png';
import './footer.css';

function Footer() {
  return (
    <div className="footer">
      <Link className="link" to="/">
        Inicio
      </Link>
      <Link className="link" to="/activities">
        Actividades
      </Link>
      <img alt="logo" src={SomosMasLogoImg} />
      <Link className="link" to="/about">
        Nosotros
      </Link>
      <Link className="link" to="/contact">
        Contacto
      </Link>
    </div>
  );
}

export default Footer;
