import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Stack from 'react-bootstrap/Stack'
import Container from 'react-bootstrap/Container'
import AboutUs from './AboutUs'

function About() {
  let aboutUsContent = `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Morbi nunc tellus, condimentum pellentesque nunc in, volutpat
                        laoreet dui. Aliquam metus ipsum, iaculis in imperdiet eu,
                        consequat ac purus. Nam sed placerat nibh. Donec aliquet est vel
                        ipsum interdum, ultricies pretium risus semper. Lorem ipsum dolor
                        sit amet, consectetur adipiscing elit. Proin id nibh ac mi ullamcorper
                        maximus in vitae leo. Aenean ac ultrices quam. Nullam vel sagittis magna.
                        Phasellus tristique libero vitae molestie consequat. In quis magna at velit
                        commodo commodo in quis orci. Vivamus facilisis varius est sed dictum.
                        Sed massa est, luctus a pretium molestie, lacinia ac justo. Donec aliquam
                        ante nec tempor vehicula. Donec in leo mi. `
                        // Hardcoded for presentation but it's gonna be retrieved later from an API service
  
  return (
    <Container as='section' className='mt-3'>
      <Stack className='align-items-center' gap='4'>
        <h1>Nosotros</h1> {/** This title is gonna be a component made in another ticket**/}
        <AboutUs content={aboutUsContent}/>
      </Stack>
    </Container>
  )
}

export default About