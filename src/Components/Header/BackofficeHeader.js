import React from "react";
import { useNavigate  } from "react-router-dom";
import { Link } from "react-router-dom";
import {logout} from "../../features/users/authReducer"
import { useDispatch } from "react-redux";

const BackofficeHeader = () => { 
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = () => {
    dispatch(logout);
    navigate("/")
  }
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
                <button className="btn btn-danger mt-1 ms-1" onClick={logoutHandler}>Log out</button>
              </div>
            </div>
          </div>
        </nav>
    )
};

export default BackofficeHeader;