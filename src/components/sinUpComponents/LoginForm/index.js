import React,{useState} from 'react'
import InputComponent from '../../Input/index'
import Button from "../../button/index"
import {toast} from "react-toastify"

import {db, storage, auth} from "../../../../src/firebase";
import { signInWithEmailAndPassword } from 'firebase/auth';
import {doc, getDoc} from "firebase/firestore"



const LoginForm = () => {

    const[Email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const[loading, setLoading] = useState(false);


    const handleLogin = async()=>
     {
       console.log("handle Login");
       setLoading(true);

       if(Email && password){
          try                                                     
          {
              const userCredential = await signInWithEmailAndPassword(   
                auth,
                Email,
                password
              );                                                   
              const user = userCredential.user;
              
              //get user data from firestore
              const userDoc =  await getDoc(doc(db,"users", user.uid))
              const userData = userDoc.data();
              console.log("user-data", userData);

              // store gotten user data in redux state
              toast.success("Login successfull")
              setLoading(false)
          }
          catch(e){
            console.log("error"+e);
            toast.error(e.message);
            setLoading(false);
          }
       }
       else{
          if(!Email){
            toast.error("empty email field")
          }
          if(!password){
            toast.error("empty password field")
          }
          setLoading(false);
       }
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
           <Button text ={loading ? "Loading...":"Login"} onClick = {handleLogin} disabled = {loading}/>
    </>
  )
}

export default LoginForm