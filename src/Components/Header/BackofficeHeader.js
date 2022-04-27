import React  from "react";
import { Link } from "react-router-dom";

const BackofficeHeader = () => {   
    return(
        <nav class="navbar-light bg-light d-flex justify-content-around align-items-start">
          <div>
            <div class="container-fluid">
              <button class="navbar-toggler shadow-none mt-2 " type="button">
                <span class="navbar-toggler-icon"></span>
              </button>
            </div>
            <div>
              <div class="items">
                <Link to="/backoffice">Home</Link>
                <Link to="/create-news">Crear novedad</Link>
                <Link to="/create-activity">Crear actividad</Link>
                <Link to="/create-member">Crear admin</Link>
                <Link to="/backoffice/organization/edit">Organización</Link>
              </div>
            </div>
          </div>
        </nav>
    )
};

export default BackofficeHeader;