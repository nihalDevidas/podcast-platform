import React from "react"
import SignUp from "./pages/SignUp";
import './App.css';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <ToastContainer/>
      <SignUp/>
    </div>
  );
}

export default App;
