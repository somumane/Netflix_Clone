import React, { useState } from 'react'
import '../Style/SignUp.css'
import axios from 'axios'
import SignIn from './SignIn'
import {Link} from "react-router-dom"

const SignUp = () => {
  const[username,setusername]=useState();
  const[email,setemail]=useState();
  const[password,setpassword]=useState();
  const[Signin,setSignin]=useState(false);
 const handleSubmit=(e)=>{
    e.preventDefault()
    axios.post(' http://localhost:5174/',{username,email,password})
    .then(result=> console.log(result))
    .catch(err=>console.log(err))
    setSignin(true)
  }
  return ( <div>
    {
      Signin?(<SignIn/>):(
    <div className='SignUp'>
    <form onSubmit={handleSubmit}>
    <h2>Sign Up</h2>
    <input placeholder='username' type='name' onChange={(e)=>setusername(e.target.value)}/>
    <input placeholder='Email' type='email' onChange={(e)=>setemail(e.target.value)}/>
    <input placeholder='Password' type='password' onChange={(e)=>setpassword(e.target.value)}/>
    <input placeholder='Confirm-Password'/>
    <button type='submit' >Sign Up</button>
    </form>
    </div>
      )}</div>)
}

export default SignUp
