import React from 'react'

function Title(props) {
  const content = props?.content || ''

  return (
    <h1>{content}</h1>
  )
}

export default Title