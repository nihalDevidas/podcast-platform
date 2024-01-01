import React,{useEffect} from "react"
import SignUp from "./pages/SignUp";
import ProfilePage from "./pages/ProfilePage";
import CreatePodcast from "./pages/CreatePodcast";

import PrivateRoutes from "./components/privateRoutes/PrivateRoutes";
import './App.css';
import {Routes, Route} from "react-router-dom"

import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { onAuthStateChanged } from "firebase/auth";
import {auth, db} from "../src/firebase";
import { onSnapshot, doc} from "firebase/firestore";

import { useDispatch } from "react-redux";
import {setUser} from "./slices/userSlice";



function App() {
  const dispatch = useDispatch();

  useEffect(()=>{

    const unsubscribeAuth = onAuthStateChanged(auth, (user)=>{

      if(user){
        const unsubscribeSnapshot = onSnapshot(
            doc(db, "users",user.uid),
            (userDoc)=>{
              if(userDoc.exists()){
                const userData = userDoc.data();

                dispatch(setUser({                // store data to redux
                  name: userData.name,
                  email: userData.email,
                  uid : user.uid
                }))

              }
            },
            (error)=>{
              console.log("error fetching user data", error);
            }
        );

        return ()=> {
          unsubscribeSnapshot();
        }
      }

    }); 

    return ()=>{
      unsubscribeAuth();
    }

  },[])



  return (
    <div className="App">
      <ToastContainer/>

      <Routes>
        <Route path = "/"  element = {<SignUp/>}/>

        <Route element = {<PrivateRoutes/>}>
          <Route path = "/profile"  element = {<ProfilePage/>}/>
          <Route path = "/create-podcast"  element = {<CreatePodcast/>}/>
        </Route>
        
      </Routes>
      
    </div>
  );
}

export default App;
