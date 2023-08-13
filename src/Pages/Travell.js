import React from 'react'

import aeroplanecollage from "../assets/aeroplanecollage.jpg"

const Travell = () => {
  return (
    <>
    <div className="w-4/6  h-48 m-auto text-center mt-32">
      <h1 className='text-stone-400  mt-4  ;'  >T R A V E L   S U P P O R T</h1>
      <h3 className='text-4xl mt-4'>Plan your travel with confidence</h3>
      <p className='text-stone-400 mt-4'>Find help with booking and travel plans. See what to expect along the journey!</p>
    </div>

    <div className="flex w-5/6  m-auto gap-24">
      <div className='w-3/6 ml-12 '>
        <div className=' mt-8 mb-8'>
        <h1 className='text-3xl mb-4'>Travel requirements for Dubai</h1>
        <p className='text-slate-400'>
          Find help with booking and travel plans.see what to expect along the journey to your favourite destinations!
        </p>
        </div>

        <div className=' mt-8  mb-8'>
        <h1 className='text-3xl mb-4'>Chauffeur services at your arrival</h1>
        <p className='text-slate-400'>
          Find help with booking and travel plans.see what to expect along the journey to your favourite destinations!
        </p>
        </div>
        <div className=' mt-8 mb-8'>
        <h1 className='text-3xl mb-4'>Multi-risk travel insurance</h1>
        <p className='text-slate-400'>
          Find help with booking and travel plans.see what to expect along the journey to your favourite destinations!
        </p>
        </div>

      </div>
       <div className='w-4/6 m-auto rounded-md '>
      <img  src={aeroplanecollage} alt="err"/>
      
       </div>
    </div>

    </>
  )
}

export default Travell