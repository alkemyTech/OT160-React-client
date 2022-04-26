import React, { useEffect, useState } from 'react';
import logo from "../../icons/user/LOGO-SOMOS MAS.png";
import Icon from './Icon';
import Links from './Links';
import "./footer.scss";
import axios from 'axios';

export default function Footer() {  

  const [news, setnews] = useState([]);

  useEffect(() => {
    //deberia hacer consulta con el services public
   axios.get('https://ongapi.alkemy.org/public/api/news').then(e=>setnews(e.data.data))
  }, []);
  
  return (
    <>
      <div className='footer'>
        <div className='row bg-black'>
          <div className='col-2'><Icon name={"instagram"} /></div>
          <div className='col-2'><Icon name={"facebook"} /></div>
          <div className='col-4'>
            <div className='d-flex justify-content-center flex-md-column align-items-md-center'>
              <img src={logo} className="img position-absolute" style={{ top: -10 }} alt="logo"></img>
              <p className='text-white d-none d-md-block mb-0 mt-5'>SOMOS MAS SITE</p>
            </div>
          </div>
          <div className='col-2'><Icon name={"twitter"} /></div>
          <div className='col-2'><Icon name={"linkedin"} /></div>
          <hr className='hr d-none d-xl-block'/>
          <div className='d-flex justify-content-around mt-2'>
          {news.map(news=><Links link={news.name}/>)} 
          </div>
        </div>
      </div>
    </>
  )
}
