import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../src/slices/userSlice"



const store = configureStore({
    reducer:{
        user : userReducer
    },

})

export default store;