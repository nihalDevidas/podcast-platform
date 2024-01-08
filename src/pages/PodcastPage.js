import React,{useEffect,useState} from 'react'
import Header from "../components/Header/index";
import InputComponent from "../components/Input/index"
import PodcastCard from "../components/podcastCard/index"

import { collection, query,onSnapshot } from "firebase/firestore";
import {db} from "../firebase";
import { useDispatch, useSelector } from 'react-redux';
import {setPodcast} from "../slices/podcastSlice"
import {toast} from "react-toastify"


const PodcastPage = () => {

    const dispatch = useDispatch();
    const podcasts = useSelector((state)=>state.podcasts.podcasts);
    const[search, setSearch] = useState("");

    useEffect(()=>{
        const unSubscribe = onSnapshot(
            query(collection(db, "podcasts")),
            (querySnapshot) => {
                const podcastData = [];
                querySnapshot.forEach((doc) => {
                    podcastData.push({id: doc.id, ...doc.data()})
                })
             
                dispatch(setPodcast(podcastData))
            },
            (error) => {
              toast.error(error.message)
            }
        );

        return ()=>{
         unSubscribe();
        }

    },[dispatch])


    let filteredPodcast = podcasts.filter((item)=>
         item.title.trim().toLowerCase().includes(search.trim().toLowerCase()))

  return (
    <div>
        <Header/>
        <div className='input-wrapper-podcast-page' style={{marginTop: "1.5rem"}}>
            <h1 className='podcast-page-h1'>Discover A  Podcasts</h1>

            <div className='search-by-title-input-con'>
                <InputComponent
                 state = {search} setState = {setSearch} 
                 placeholder={"Search By Title"} type={"text"} 
                />
            </div>

            {podcasts.length > 0 ?
             <div className='podcast-flex'>
                {
                    filteredPodcast.map((item)=>{
                    return( 
                    <PodcastCard 
                      key = {item.id} 
                      id = {item.id} title = {item.title} 
                      displayImage = {item.displayImage}
                    />
                    )
                    })
                }
             </div>
             :
             <p>no podcast</p>
             }
        </div>

    </div>
  )
}

export default PodcastPage