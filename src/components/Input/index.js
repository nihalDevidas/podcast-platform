import React from 'react'
import "./styles.css"

const InputComponent = ({state,setState, placeholder,type, required}) => {
  return (

    <input
     value = {state}
     onChange = {(e)=>setState(e.target.value)}
     placeholder= {placeholder}
     type={type}
     required = {required}
     className='custom-input'
    />

  )
}

export default InputComponent