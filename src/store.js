import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../src/slices/userSlice";
import podcastReducer from "../src/slices/podcastSlice"



const store = configureStore({
    reducer:{
        user : userReducer,
        podcasts : podcastReducer 
    },

})

export default store;