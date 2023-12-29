import React from 'react'
import "./styles.css"

const Para = ({text,clickHandler}) => {
  return (
    <p className='para-tag' onClick = {clickHandler}>
        {text}
    </p>
  )
}

export default Para