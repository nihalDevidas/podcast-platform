import React from "react"
import SignUp from "./pages/SignUp";
import ProfilePage from "./pages/ProfilePage"
import './App.css';
import {Routes, Route} from "react-router-dom"

import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {
  return (
    <div className="App">
      <ToastContainer/>

      <Routes>
        <Route path = "/"  element = {<SignUp/>}/>
        <Route path = "/profile"  element = {<ProfilePage/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
