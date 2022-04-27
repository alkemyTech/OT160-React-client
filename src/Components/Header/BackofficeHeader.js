import React  from "react";
import { Link } from "react-router-dom";

const BackofficeHeader = () => {   
    return(
        <nav class="navbar-light bg-light d-flex justify-content-around align-items-start position-absolute top-0 start-0 h-100">
          <div>
            <div>
              <div class="items">
                <Link class="nav-link link-danger border-bottom" to="/backoffice">Home</Link>
                <Link class="nav-link link-danger border-bottom" to="/create-news"> Crear novedad</Link>
                <Link class="nav-link link-danger border-bottom" to="/create-activity">Crear actividad</Link>
                <Link class="nav-link link-danger border-bottom" to="/create-member">Crear admin</Link>
                <Link class="nav-link link-danger border-bottom" to="/backoffice/organization/edit">Organización</Link>
              </div>
            </div>
          </div>
        </nav>
    )
};

export default BackofficeHeader;