import React,{useState} from 'react'
import InputComponent from '../../Input/index';
import { useDispatch } from 'react-redux';
import {setUser} from "../../../slices/userSlice";
import { useNavigate } from 'react-router-dom';

import Button from "../../button/index";
import { toast } from 'react-toastify';

import {db, storage, auth} from "../../../../src/firebase";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import {doc, getDoc, setDoc} from "firebase/firestore"


const SinUpForm = () => {

    const[fullName, setFullName] = useState("");
    const[Email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const[confirmPassword, setConfirmPassword] = useState("");
    const[loading, setLoading] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();


    const handleSignUp = async()=>
     {
       console.log("handle singup");
       setLoading(true);

       if((fullName && Email) && (password === confirmPassword) && password.length > 6){    
            try                                                       // create a user for authentication
              {
                  const userCredential = await createUserWithEmailAndPassword(   
                    auth,
                    Email,
                    password
                  );                                                   
                  const user = userCredential.user;
                  console.log("user: ", user);

                  // saving users details in firestore database
                  await setDoc(doc(db,"users", user.uid),{

                    name: fullName,
                    email: user.email,
                    uid : user.uid
                  })
                  // store user in redux state
                    dispatch(setUser({             
                      name: user.name,
                      email: user.email,
                      uid : user.uid
                    }))
                  // sign up sucess tost a message
                  toast.success("signUp success!")
                  setLoading(false);
                  navigate("/profile");
              }
              catch(e){
                toast.error(e.message);
                setLoading(false);
              }
       }
       else{
        // error validation using tostify
          if(!fullName){
            toast.error("enter a valid Name")
          }
          if(!Email){
            toast.error("Enter valid email/gmail")
          }
          if(password !== confirmPassword){
            toast.error("password and confirm password should match");
          }
          if(password.length <=6){
            toast.error("Expected password lenth > 6");
          }
          setLoading(false);
       }

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

          <Button text ={loading ?"Loading..": "Signup Now"} onClick = {handleSignUp} disabled = {loading}/>
      
    </>
  )
}

export default SinUpForm