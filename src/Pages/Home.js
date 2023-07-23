import React from 'react'
import aeroplanegif from "../assets/aeroplanegifs.gif"

const Home = () => {
  return (
    <div>
        
      <div className='w-4/6  m-auto  text-center mt-12 '>
    <div className='w-4/6 m-auto  mt-12 mb-12 text-6xl'><p>Create Ever-lasting memories with us</p></div>
      <div className='w-5/6 m-auto  h-96 mb-12 '> <img className='w-full h-full rounded-3xl' src={aeroplanegif}/></div>
      </div>
   
  
    </div>
  )
}

export default Home