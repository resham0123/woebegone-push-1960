import React from 'react'
import { useState,useEffect } from 'react';
import {Link} from "react-router-dom";
import Footer from './Footer';
function getData(page){
  return fetch(`https://anxious-gold-duckling.cyclic.app/users?_page={page}&_limit=10`)
  .then((res)=>res.json())
}
export default function Group() {
  const [loading,setLoading]=useState(false);
  const[data,setData]=useState([])
  const[page,setPage]=useState(1);
  const fetchAndUpdate=async(page)=>{
    setLoading(true);
let res=await getData(page)
setData(res);
setLoading(false);
console.log(res);
  }
  useEffect(()=>{
fetchAndUpdate(page)
  },[page]);

const handlePage=(val)=>{
setPage(page+val)
}

  if(loading){
    return <h1>Loading...</h1>
  }
  return (
    <div>
      {data.map((item)=>{
        return <div style={{backgroundColor:"#CFD8DC",
          boxShadow:" rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px"}} >
     <h1>{item.firstname}</h1>
     <Link to={`/groups/${item.id}`} >Know details...</Link>
        </div>
      })}
      <div >
  <button style={{padding:"10px"}} onClick={()=>handlePage(-1)} >Previous</button>
  <button style={{padding:"10px"}} disabled={true} >{page}</button>
  <button style={{padding:"10px"}} onClick={()=>handlePage(1)} >Next</button>
</div>
<Footer/>
    </div>
  )
}
