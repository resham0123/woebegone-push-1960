import React from 'react'
import {useState,useEffect} from "react";
import { useParams } from 'react-router-dom';
import {Link,Navigate} from "react-router-dom";

function getData(teacher_id){
    return fetch(`https://anxious-gold-duckling.cyclic.app/users/${teacher_id}`)
    .then((res)=>res.json());
}

export default function SingleTeacher() {
    const {teacher_id}=useParams();
    
    const[loading,setLoading]=useState(false);
    const[data,setData]=useState({});
    const fetchAndupdate=async()=>{
        try {
            setLoading(true)
            let res=await getData(teacher_id);
            console.log("res",res)
            setData(res); 
            setLoading(false)
        } catch (error) {
           console.log(error); 
        }
    }
    useEffect(()=>{
    fetchAndupdate(teacher_id)
    
    },[teacher_id])
    
    if(loading){
        return <h1>Loading...</h1>
    }
      return (
        <div style={{border:"1px solid grey",padding:"10px",margin:"10px",
        backgroundColor:"#CFD8DC",boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"}} >
            <img src={data?.avatar}/>
            <h1>Contact Details</h1>
            <hr/>
            <p>Username:{data?.username}</p>
            <p>Name:{data?.firstname}</p>
            <p>Email:{data?.email}</p>
            <p>Password:{data?.password}</p>
        </div>
      )
 
}
