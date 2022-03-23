import React from 'react';
import { useParams } from "react-router-dom";

import DetailCard from './DetailCard';
export default function Detail()
{
    // get id from the url's parameter
    const { id } = useParams();
    return(
        <div>
            <h3 style={{textAlign:"center"}}>Detail Section</h3>
            <DetailCard id={id}/>
        </div>
    );
}