import React  from 'react'
import "./styles.css"

const Button = ({text, onClick}) => {

  return (
    <button className='custom-btn' onClick = {onClick}>
        {text}
    </button>
  )
}
  export default Button