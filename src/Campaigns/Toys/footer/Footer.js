import React, { useEffect, useState } from 'react';
import logo from "../../../assets/logo.png";
import Icon from './Icon';
import Links from './Links';
import "./footer.scss";
import axios from 'axios';
import { get } from '../../../Services/publicApiService';

export default function Footer() {  

  const [news, setnews] = useState([]);

  useEffect(() => {
    //deberia hacer consulta con el services public
  
   axios.get('https://ongapi.alkemy.org/public/api/news').then(e=>setnews(e.data.data))
  }, []);
  console.log(news)
  return (
    <>
      <div className='footer'>
        <div className='row bg-black'>
       wenmmmmmmmmmmmmmmmmmmmmmmmmmmm
          </div>
        </div>
      
    </>
  )
}
