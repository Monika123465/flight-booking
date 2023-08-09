import React from 'react'
import leftplane from "../assets/leftplane.jpeg"
import windowsout from "../assets/windowsout.jpg"
import windowsplane from "../assets/windowsplane.jpeg"

const Travell = () => {
  return (
    <>
    <div className="w-4/6  h-48 m-auto text-center mt-32">
      <h1 className='text-stone-400  mt-4  ;'  >T R A V E L   S U P P O R T</h1>
      <h3 className='text-4xl mt-4'>Plan your travel with confidence</h3>
      <p className='text-stone-400 mt-4'>Find help with booking and travel plans. See what to expect along the journey!</p>
    </div>

    <div className="flex w-4/6 border-4 border-indigo-600 m-auto">
      <div className='w-4/6 border-4'>
        <div>
        <h1>Travel requirements for Dubai</h1>
        <p>
          Find help with booking and travel plans.see what to expect along the journey to your favourite destinations!
        </p>
        </div>

        <div>
        <h1>Chauffeur services at your arrival</h1>
        <p>
          Find help with booking and travel plans.see what to expect along the journey to your favourite destinations!
        </p>
        </div>
        <div>
        <h1>Multi-risk travel insurance</h1>
        <p>
          Find help with booking and travel plans.see what to expect along the journey to your favourite destinations!
        </p>
        </div>

      </div>
       <div>
       <div > <img className="w-48 rounded-full h-72" src={leftplane} alt='err'/></div>
       <div className=''> <img className='w-48 rounded-full h-72' src={windowsout} alt='err'/></div>
       <div className='w-48  ml-12'> <img className='w-60 rounded-full h-72' src={windowsplane} alt='err'/></div>
       </div>
    </div>

    </>
  )
}

export default Travell