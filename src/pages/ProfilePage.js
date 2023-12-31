import React from 'react';
import Header from '../components/Header';
import Button from "../components/button/index";
import { useSelector } from 'react-redux';
import {signOut } from "firebase/auth";
import { auth } from '../firebase';
import { toast } from 'react-toastify';



const ProfilePage = () => {

    const user = useSelector(state=>state.user.user);

    function handleLogOut()
    {
        signOut(auth).then(() => {

          // Sign-out successful.
          toast.success("Logout Sucessfull")
        }).catch((error) => {

          // An error happened.
          toast.error(error.message)
        });

    }


   if(!user){
    return <div>Loading....</div>
   } 

  return (
    <div>
        <Header/>
         <div>{user.name}</div>
         <div>{user.email}</div>
         <div>{user.uid}</div>
         <Button text = {"LogOut"} onClick = {handleLogOut} disabled = {false}/>
    </div>
  )
}

export default ProfilePage;