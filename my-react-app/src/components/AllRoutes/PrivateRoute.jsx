import React from 'react'
import { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { Navigate } from 'react-router-dom';
//import PrivateRoute from "../AllRoutes/PrivateRoute"
export default function PrivateRoute({children}) {

  const {isAuth,setIsAuth}=useContext(AuthContext);  

  if(!isAuth){
     <Navigate to="/login"/>   
  }
  return (
   
    <>
    {children}
    </>

    
  )
}
