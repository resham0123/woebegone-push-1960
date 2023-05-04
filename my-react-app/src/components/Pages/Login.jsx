import React from 'react';
import { useState } from 'react';
const initState={
    email:"",
    password:""
}

export default function Login() {
    const [formState,setFormState]=useState(initState);
  return (
    <>
    <form>
        <input type='text' placeholder='email' />
        <input type='password' placeholder='password' />
        <input type='submit' />
    </form>
    </>
  )
}
