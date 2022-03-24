import React from 'react'

function AboutUs(props) {
  const content = props?.content || ''

  return (
    <p>{content}</p>
  )
}

export default AboutUs