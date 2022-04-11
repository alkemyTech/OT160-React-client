import React, {useState} from "react";
import { Link } from "react-router-dom";
import "./backofficeNavbar.scss";

const BackofficeNavBar = () => {   
  const [sidebar, setSidebar] = useState(false);
  
  const showSidebar = () => setSidebar(!sidebar);
    return(
        <nav class="navbar-light bg-light d-flex justify-content-around align-items-start">
          <div className={sidebar ? "container__open" : ""}>
            <div class="container-fluid">
              <button class="navbar-toggler shadow-none mt-2 " type="button" onClick={showSidebar}>
                <span class="navbar-toggler-icon"></span>
              </button>
            </div>
            <div className={sidebar ? "list list__open" : "list list__close"}>
              <div class="items">
                <Link to="/backoffice" onClick={showSidebar} class="brand">
                Some item
                </Link>
              </div>
            </div>
          </div>
        </nav>
    )
};

export default BackofficeNavBar;