import React from 'react';
import {useState,useEffect} from "react";
import { useParams } from 'react-router-dom';
import {Link,Navigate} from "react-router-dom";

function getData(student_id){
    return fetch(`https://anxious-gold-duckling.cyclic.app/studentsdetail/${student_id}`)
    .then((res)=>res.json());
}
export default function SingleStudent() {
const {student_id}=useParams();
const[loading,setLoading]=useState(false);
const[data,setData] = useState({});
const fetchAndupdate=async()=>{
    try {
        setLoading(true)
        let res=await getData(student_id);
        console.log("res",res)
        setData(res); 
        setLoading(false)
        console.log("data",data)
    } catch (error) {
       console.log(error); 
    }
}
useEffect(()=>{
fetchAndupdate(student_id)
   
},[student_id])

if(loading){
    return <h1>Loading...</h1>
}
  return (
    <div style={{border:"1px solid grey",backgroundColor:"#CFD8DC",margin:"10px",padding:"10px",
    boxShadow:" rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"}} >
     
    <img src={data?.image}/>
    <h1>Basic Information</h1>
    <hr/>
    <p>Name:{data.name}</p>
    <p>Gender:{data.gender}</p>
    <p>Age:{data.age}</p>
    <p>Class:{data.class}</p>
    <p>Missing Days:{data.missingdays}</p>
    <p>D.O.B:{data.dob}</p>
    <h1>Contacts</h1>
    <hr/>
    <p>Contact Numer:{data.contactno}</p>
    
    <p>Email:{data.email}</p>
    <p>State:{data.state}</p>
    </div>
  )
}
