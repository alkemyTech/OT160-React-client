import React from 'react'

const  img = process.env.PUBLIC_URL + '/images/title.png';

export default function Title({title,image=img}) {

  return (
    <div style={{backgroundImage:`url(${image})` }}>hola</div>
  )
}
