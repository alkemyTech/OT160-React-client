import React from "react";
import './title.css';
export default function Title({title, img}) {
  return (
    <div className="container">
      <img className="background-img" src={img || 'https://images.pexels.com/photos/531756/pexels-photo-531756.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'} alt="background"/>
      <h3 className="title">{title}</h3>
    </div>
  );
}
