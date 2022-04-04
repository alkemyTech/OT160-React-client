import React from 'react'
import { DEFAULT_IMAGE_FOR_TITLE } from '../../utility/imagesUtility'
import '../Title/title.scss'

export default function Title({ title, image = DEFAULT_IMAGE_FOR_TITLE }) {

  return (
    <div style = {{ backgroundImage:`url(${image})` }}>

      <h1 className="align-text-center"> {title} </h1>
      
    </div>
  )
}
