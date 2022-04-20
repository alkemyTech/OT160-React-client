import React from "react";
import "../Card/card.scss";

const Card = ({title, img, description}) => {
    return ( 
        <div className="card-box">
            <div className="image-container">
                <img src={img} alt="description"/>
            </div>
            <h3>{title}</h3>
            <hr></hr>
            <p>{description}</p>
        </div>
    )
};
export default Card;