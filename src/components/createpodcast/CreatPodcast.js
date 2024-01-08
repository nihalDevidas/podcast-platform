import React,{useState} from 'react';
import InputComponent from "../../components/Input/index"
import FileInput from "../Input/FileInput"
import Button from "../../components/button/index";

import {db, storage, auth} from "../../firebase"
import {getDownloadURL, ref, uploadBytes} from "firebase/storage"
import { addDoc, collection } from 'firebase/firestore';

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


   async function handlePodcastRgistration(){
      
        setupLoading(true);

        if(title && Discript && displayImage && bannerImage){
            try{
              const bannerImgRef = ref(storage, 
                `podcasts/${auth.currentUser.uid}/${Date.now()}`);

              await uploadBytes(bannerImgRef, bannerImage);

              const getBannerImgURL = await getDownloadURL(bannerImgRef);


              const displayImgRef = ref(storage, 
                `podcasts/${auth.currentUser.uid}/${Date.now()}`);

              await uploadBytes(displayImgRef, displayImage);

              const getDisplayImgURL = await getDownloadURL(displayImgRef);

              const podcastData = {       // add all the data as cuurent users podcast
                title: title,
                discription: Discript,
                bannerImage: getBannerImgURL,
                displayImage: getDisplayImgURL,
                createdBy: auth.currentUser.uid
              }

              const docRef = await addDoc(collection(db, "podcasts"),podcastData)

              // once podcast is saved to database reset all input feilds
               toast.success("Podcast created");
               setTitle("");
               setDiscript("");
               setDisplayImage(null);
               setBannerImage(null);
               setupLoading(false)

            }
            catch(e){
              toast.error(e)
              setupLoading(false)
            }

        }
        else{
           toast.error("please Fill All feilds")
           setupLoading(false)
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