import React,{useState} from 'react'
import InputComponent from '../../Input/index'
import Button from "../../button/index"


const LoginForm = () => {

    const[Email, setEmail] = useState("");
    const[password, setPassword] = useState("");

    const handleLogin = ()=>
     {
       console.log("handle Login");
     }

  return (
    <> 
         <InputComponent
           state = {Email} setState = {setEmail} 
           placeholder={"Email"} type={"text"} required = {true}
          />
           
          <InputComponent
           state = {password} setState = {setPassword} 
           placeholder={"Password"} type={"password"} required = {true}
          />
           <Button text ={"Login"} onClick = {handleLogin}/>
    </>
  )
}

export default LoginForm