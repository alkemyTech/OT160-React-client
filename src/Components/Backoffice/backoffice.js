import React,{Fragment} from 'react';
import "./backoffice.scss";
import BackofficeNavBar from '../Navbar/backofficeNavbar';
import news from "../../icons/backoffice/001-newspaper.png";
import activities from "../../icons/backoffice/002-activities.png";
import list from "../../icons/backoffice/003-list.png";
import comment from "../../icons/backoffice/004-comment.png";
import org from "../../icons/backoffice/005-organization-chart.png";
import slides from "../../icons/backoffice/006-slides.png";
import users from "../../icons/backoffice/007-user.png";
import members from "../../icons/backoffice/008-teamwork.png";

const Backoffice = () => {

    return (
        <Fragment>
            <BackofficeNavBar />
            <div className='center-wrapper'>
                <div className='container'>
                    <div className='box-1'>
                        <h4>Novedades</h4>
                        <img src={news} alt="News"></img>
                        <button class="btn btn-primary">Ir</button>
                    </div>

                    <div className='box-2'>
                        <h4>Actividades</h4>
                        <img src={activities} alt="Activities"></img>
                        <button class="btn btn-primary">Ir</button>

                    </div>

                    <div className='box-3'>
                        <h4>Categorias</h4>
                        <img src={list} alt="Categories"></img>
                        <button class="btn btn-primary">Ir</button>

                    </div>

                    <div className='box-4'>
                        <h4>Testimonios</h4>
                        <img src={comment} alt="Testimonies"></img>
                        <button class="btn btn-primary">Ir</button>

                    </div>

                    <div className='box-5'>
                        <h4>Organización</h4>
                        <img src={org} alt="Organization"></img>
                        <button class="btn btn-primary">Ir</button>

                    </div>

                    <div className='box-6'>
                        <h4>Slides</h4>
                        <img src={slides} alt="Slides"></img>
                        <button class="btn btn-primary">Ir</button>

                    </div>

                    <div className='box-7'>
                        <h4>Usuarios</h4>
                        <img src={users} alt="Users"></img>
                        <button class="btn btn-primary">Ir</button>

                    </div>

                    <div className='box-8'>
                        <h4>Miembros</h4>
                        <img src={members} alt="Members"></img>
                        <button class="btn btn-primary">Ir</button>

                    </div>
                </div>
            </div>
        </Fragment>
    );
}
 
export default Backoffice;