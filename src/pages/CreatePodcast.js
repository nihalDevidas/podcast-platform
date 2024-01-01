import React from 'react'
import Header from "../components/Header/index";
import CreatPodcast from '../components/createpodcast/CreatPodcast';


const CreatePodcast = () => {
  return (
    <div>
      <Header/>
      <div className='input-wrapper'>
        
        <h1>Creat A Podcast</h1>
         <CreatPodcast/>
      </div>
        
    </div>
  )
}

export default CreatePodcast;