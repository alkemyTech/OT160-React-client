import React from 'react'
import Stack from 'react-bootstrap/Stack'

function AboutUs(props) {
  const content = props?.content || ''

  return (
    <Stack className='align-items-center'>    
      <h4>Sobre nosotros</h4>
      <p className='text-left w-75'>{content}</p>
    </Stack>
  )
}

export default AboutUs