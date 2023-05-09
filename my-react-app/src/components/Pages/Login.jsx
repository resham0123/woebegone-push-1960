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
    <div  style={{backgroundColor:"darkgrey",height:"100vh",display:"flex",alignItems:"center"}}>
    <div style={{backgroundColor:"#90A4AE",width:"40%",margin:"auto",borderRadius:"10px 20px 10px 30px",
    boxShadow: "rgba(50,50,93,0.25) 0px 30px 60px -12px inset,rgba(0,0,0,0.3)0px 18px 36px -18px inset"}}>
      <h1 style={{color:"grey"}} >Please Login here</h1>
    <form onSubmit={handleSubmit} style={{marginTop:"50px"}} >
        <input style={{width:"80%", height:"30px",backgroundColor:"#f5f5f5",fontSize:"30px",
        margin:"20px",padding:"10px"}}  value={formState.email} name="email"
         type='text' placeholder='email' onChange={handleChange} /><br/><br/>
        <input style={{width:"80%", height:"30px",margin:"20px",backgroundColor:"#f5f5f5",fontSize:"30px",
        padding:"10px"}} value={formState.password} name="password" 
        type='password' placeholder='password' onChange={handleChange} /><br/><br/>
        <input style={{width:"80%", height:"70px",margin:"20px",padding:"20px",
        backgroundColor:"grey",color:"white",fontSize:"25px",borderRadius:"10px 20px 10px 30px"}} type='submit' />
    </form>
    </div>
    </div>
  )
}
