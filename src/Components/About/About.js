import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Stack from 'react-bootstrap/Stack'
import Container from 'react-bootstrap/Container'
import Title from './Title'
import AboutUs from './AboutUs'

function About() {
  const aboutUsContent = 'temporary filler' // to be retrieved later from the API service

  return (
    <Container as='section'>
      <Stack className='align-items-center'>
        <Title content='Nosotros'/>
        <AboutUs content={aboutUsContent}/>
      </Stack>
    </Container>
  )
}

export default About