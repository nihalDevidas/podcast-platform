import React,{useState} from 'react';
import InputComponent from "../../components/Input/index"
import FileInput from "../Input/FileInput"
import Button from "../../components/button/index"

import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {toast} from "react-toastify"


const CreatPodcast = () => {

    const[title, setTitle] = useState("");
    const[Discript, setDiscript] = useState("");
    const[displayImage, setDisplayImage] = useState(null);
    const[bannerImage, setBannerImage] = useState(null);
    const[uploading, setupLoading] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();


    function handlePodcastRgistration(){

        if(title && Discript && displayImage && bannerImage){

        }
        else{
           toast.error("please Fill All feilds")
        }
    
    }

    function handleBannerImage(file){
        setBannerImage(file);
    }

    function handleDisplayImage(file){
        setDisplayImage(file);
    }

  return (
    <>
         <InputComponent
           state = {title} setState = {setTitle} 
           placeholder={"Podcast Title"} type={"text"} required = {true}
          />

          <InputComponent
           state = {Discript} setState = {setDiscript} 
           placeholder={"Podcast Description"} type={"text"} required = {true}
          /> 

          <FileInput accept = {"image/*"}  id={"display-image-input"}
           fileHandleFunc = {handleDisplayImage} 
           text = {"Display image"}/>

          <FileInput accept = {"image/*"}  id={"banner-image-input"} 
           fileHandleFunc = {handleBannerImage}
           text = {"Banner image"}/>

          <Button text ={uploading ?"Uploading..": "Creat Now"} onClick = {handlePodcastRgistration} disabled = {uploading}/>
      
    </>
  )
}

export default CreatPodcast;