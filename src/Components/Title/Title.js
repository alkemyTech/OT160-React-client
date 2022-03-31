import React from 'react'
import '../Title/title.css'
import { imagen_title_default } from '../../utility/constUtility'


export default function Title({title,image=imagen_title_default}) {

  return (
    <div style={{backgroundImage:`url(${image})` }}>

      <h1 className="title">{title}</h1>
      
    </div>
  )
}
