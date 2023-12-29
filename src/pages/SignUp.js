import React,{useState} from 'react';
import SinUpForm from '../components/sinUpComponents/SinUpForm/index';
import LoginForm from "../components/sinUpComponents/LoginForm/index";
import Para from "../components/paragraph/index"

const SignUp = () => {

  const[registered, setRegIndicator] = useState(false);

  function sineUpFlagSetter(){
    setRegIndicator(!registered);
  }


  return (
    <div>
        <div className='input-wrapper'>

          {!registered ? <h1>Sign Up</h1> : <h1>Login</h1>}

          {!registered ? <SinUpForm/> : <LoginForm/>}

          {!registered ? <Para text={"Already Registered. click to Login."} clickHandler = {sineUpFlagSetter}/> :
                          <Para text = {"Don't have an Account. click to Sign Up"} clickHandler = {sineUpFlagSetter}/>}

        </div>
    </div>
  )
}

export default SignUp