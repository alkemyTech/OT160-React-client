import React,{Fragment} from 'react';
import "./backoffice.scss";
import BackofficeNavBar from '../Navbar/backofficeNavbar';
import newsImg from "../../icons/backoffice/001-newspaper.png";
import activitiesImg from "../../icons/backoffice/002-activities.png";
import listImg from "../../icons/backoffice/003-list.png";
import commentImg from "../../icons/backoffice/004-comment.png";
import orgImg from "../../icons/backoffice/005-organization-chart.png";
import slidesImg from "../../icons/backoffice/006-slides.png";
import usersImg from "../../icons/backoffice/007-user.png";
import membersImg from "../../icons/backoffice/008-teamwork.png";

const Backoffice = () => {

    return (
        <div className='main-container'>
            <BackofficeNavBar />
            <div className='center-wrapper'>
                <div className='container'>
                    <div className='box-1'>
                        <h4>Novedades</h4>
                        <img src={newsImg} alt="News"></img>
                        <button class="btn btn-primary">Ir</button>
                    </div>

                    <div className='box-2'>
                        <h4>Actividades</h4>
                        <img src={activitiesImg} alt="Activities"></img>
                        <button class="btn btn-primary">Ir</button>
                    </div>

                    <div className='box-3'>
                        <h4>Categorias</h4>
                        <img src={listImg} alt="Categories"></img>
                        <button class="btn btn-primary">Ir</button>
                    </div>

                    <div className='box-4'>
                        <h4>Testimonios</h4>
                        <img src={commentImg} alt="Testimonies"></img>
                        <button class="btn btn-primary">Ir</button>
                    </div>

                    <div className='box-5'>
                        <h4>Organización</h4>
                        <img src={orgImg} alt="Organization"></img>
                        <button class="btn btn-primary">Ir</button>
                    </div>

                    <div className='box-6'>
                        <h4>Slides</h4>
                        <img src={slidesImg} alt="Slides"></img>
                        <button class="btn btn-primary">Ir</button>
                    </div>

                    <div className='box-7'>
                        <h4>Usuarios</h4>
                        <img src={usersImg} alt="Users"></img>
                        <button class="btn btn-primary">Ir</button>
                    </div>

                    <div className='box-8'>
                        <h4>Miembros</h4>
                        <img src={membersImg} alt="Members"></img>
                        <button class="btn btn-primary">Ir</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Backoffice;