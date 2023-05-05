import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { Navigate } from 'react-router-dom';
const initState={
    email:"",
    password:""
}

export default function Login() {
    const [formState,setFormState]=useState(initState);
    const {isAuth,token,setToken,setIsAuth}=useContext(AuthContext)
    const handleChange=(e)=>{
        setFormState({
            ...formState,
            [e.target.name]:e.target.value
        })
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
return fetch(`https://reqres.in/api/login`,{
  method:"POST",
  body:JSON.stringify(formState),
  headers:{
    "Content-Type":"application/json"
  },
})
.then((res)=>res.json())
.then((data)=>setToken(data.token))
//console.log("token",token)

    }
   // console.log("tokens",token)
   if(token){
    setIsAuth(true);
}
if(isAuth){
    return <Navigate to="/"/>
}

  return (
    <>
    <form onSubmit={handleSubmit} >
        <input  value={formState.email} name="email"
         type='text' placeholder='email' onChange={handleChange} />
        <input value={formState.password} name="password" 
        type='password' placeholder='password' onChange={handleChange} />
        <input type='submit' />
    </form>
    </>
  )
}
