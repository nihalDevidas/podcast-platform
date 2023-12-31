import React from 'react';
import {Navigate, Outlet} from "react-router-dom"

import {useAuthState} from "react-firebase-hooks/auth";
import {auth} from "../../firebase"


const PrivateRoutes = () => {

    const [user, loading, error] = useAuthState(auth);

    if(loading){
        return <div>Loading...</div>
    }
    else if(!user || error){
        return <Navigate to ="/" replace/>
    }
    else{
        return <Outlet/>
    }
  
}

export default PrivateRoutes