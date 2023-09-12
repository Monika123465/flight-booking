
import React from 'react'
import signin from "../assets/signinup.jpg"
import google from "../assets/google.png"



const Signup = () => {
   return (
    <div >
      
    <div className='w-3/5  gap-24 mt-24 m-auto flex shadow-lg'>
    <div className=' mt-12 ml-6'>
    <img className='' src={signin} alt='err' />
    </div>
    <div className=' w-4/6 mt-24  mb-12 text-2xl mr-6 '>
      <h1 className='text-5xl mb-6'>Welcome Onboard</h1>
      <div className='flex gap-2 h-6 text-center  w-96 items-center mb-12 '>
        <img className='w-6 h-6 ' src={google} alt='err' />
        <p>Sign up with your google</p>
      </div>
      
      

      <div className='  mt-6 mb-2'>
        <p>Your name*</p>
        <input type='text' placeholder='Enter your name' className='border-2 w-96 mb-4' />

        <p>Email address*</p>
        <input type='text' placeholder='Enter your email' className='border-2 w-96 mb-4' />

        <p>Password*</p>
        <input type='password' placeholder='Enter your password' className='border-2 w-96 mb-4' />
      </div>
      <div className=' text-xl'><p>Agree to terms & conditions</p></div>
     <div className='border-2 border-cyan-600 w-96 h-12 text-center mb-6 mt-6'> <button >SignUp</button></div>
     <div className=' flex text-xl gap-2 '><p>Already have an  account ?</p ><button className='text-cyan-600'>Sign in now</button></div>
    </div>
    
    </div>
    </div>
  
  )
}

export default Signup