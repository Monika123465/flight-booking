import React from 'react'
import { useContext,useState } from 'react'
import {Navigate,useNavigate} from "react-router-dom"
import { authContext } from '../Context/Authcontext'
import signin from "../assets/sign.jpg"
import google from "../assets/google.png"



const Signin = () => {
  const [username,setUsername]=useState('')
  const [password,setPassword]=useState('')
  const navigate=useNavigate()
  const {user,signIn}=useContext(authContext)

  if(user) return <Navigate to="/home"/>
  return (
    <>
    <div>
    <div>
    <img src={signin} alt='err' />
    </div>
    <div>
      <h1>Welcome Onboard</h1>
      <div>
        <img src={google} alt='err' />
        <p>Sign up with your email</p>
      </div>
      <div>
        <p>or,sign up with your email</p>
      </div>

      <div>
        <p>Your name*</p>
        <input type='text' placeholder='Enter your name' />

        <p>Email address*</p>
        <input type='text' placeholder='Enter your email' />

        <p>Password*</p>
        <input type='password' placeholder='Enter your password' />
      </div>
      <div><p>Agree to terms & conditions</p></div>
     <div> <button>SignUp</button></div>
     <div><p>Already have an  account ?</p><p>Sign in now</p></div>
    </div>
    
    </div>
    
    </>
  )
}

export default Signin