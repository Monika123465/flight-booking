import React from 'react'
import signin from "../assets/sign.jpg"
import google from "../assets/google.png"



const Signin = () => {
   return (
    <>
    <div className='w-4/5 border-4  m-auto flex gap-48 mt-48 mb-48'>
    <div className='w-2/5 h-48 mt-12 mb-12'>
    <img src={signin} alt='err' />
    </div>
    <div className=' mt-12 w-4/5 mb-12 text-2xl'>
      <h1 className='text-5xl mb-6'>Welcome Onboard</h1>
      <div className='flex gap-2 h-12 text-center border-4 w-96 items-center mb-2 '>
        <img className='w-6 h-6 ml-4' src={google} alt='err' />
        <p>Sign up with your google</p>
      </div>
      <div className='w-96 border-4 mb-6 '>
        <p>or,sign up with your email</p>
      </div>

      <div className='w-5/6 border-4 mt-12 mb-2'>
        <p>Your name*</p>
        <input type='text' placeholder='Enter your name' className='border-4 w-5/6 mb-4' />

        <p>Email address*</p>
        <input type='text' placeholder='Enter your email' className='border-4 w-5/6 mb-4' />

        <p>Password*</p>
        <input type='password' placeholder='Enter your password' className='border-4 w-5/6 mb-4' />
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