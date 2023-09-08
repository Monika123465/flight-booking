import React from 'react'
import signin from "../assets/sign.jpg"
import google from "../assets/google.png"



const Signin = () => {
   return (
    <>
    <div className='w-4/5 border-4  m-auto flex'>
    <div className='w-2/5 h-48'>
    <img src={signin} alt='err' />
    </div>
    <div className=''>
      <h1>Welcome Onboard</h1>
      <div>
        <img className='w-6' src={google} alt='err' />
        <button>Sign up with your google</button>
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