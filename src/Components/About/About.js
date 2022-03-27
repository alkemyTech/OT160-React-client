import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Stack from 'react-bootstrap/Stack'
import Container from 'react-bootstrap/Container'

function About() {
  const [aboutUs, setAboutUs] = useState('')

  useEffect(() => {
    setAboutUs(`Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Morbi nunc tellus, condimentum pellentesque nunc in, volutpat
                laoreet dui. Aliquam metus ipsum, iaculis in imperdiet eu,
                consequat ac purus. Nam sed placerat nibh.`)
  },[])
  
  return (
    <Container as='section' className='mt-3'>
      <Stack className='align-items-center' gap='4'>
        <h1>Nosotros</h1> {/** This title is gonna be a component made in another ticket**/}
        <Stack className='align-items-center'>    
          <h4>Sobre nosotros</h4>
          <p className='text-left w-75'>{aboutUs}</p>
        </Stack>
      </Stack>
    </Container>
  )
}

export default About