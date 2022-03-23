import React from 'react'

export default function Titulo({titulo, Imagen="imagen.png"}) {
  return (
    <div style={{backgroundImage:Imagen }}>{titulo}</div>
  )
}
