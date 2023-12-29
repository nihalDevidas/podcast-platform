import React,{useState} from 'react'
import InputComponent from '../../Input/index'
import Button from "../../button/index"

const SinUpForm = () => {

    const[fullName, setFullName] = useState("");
    const[Email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const[confirmPassword, setConfirmPassword] = useState("");

    const handleSignUp = ()=>
     {
       console.log("handle singup");
     }

  return (
    <>
    
          <InputComponent
           state = {fullName} setState = {setFullName} 
           placeholder={"Full Name"} type={"text"} required = {true}
          />

          <InputComponent
           state = {Email} setState = {setEmail} 
           placeholder={"Email"} type={"text"} required = {true}
          />
           
          <InputComponent
           state = {password} setState = {setPassword} 
           placeholder={"Password"} type={"password"} required = {true}
          />

           <InputComponent
           state = {confirmPassword} setState = {setConfirmPassword} 
           placeholder={"Confirm Password"} type={"password"} required = {true}
          />

          <Button text ={"SignUp"} onClick = {handleSignUp}/>
      
    </>
  )
}

export default SinUpForm