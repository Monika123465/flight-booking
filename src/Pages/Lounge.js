import React from 'react'
import flightpeople from "../assets/flightpeople.jpg"
import insideflight from "../assets/insideflight.jpg"

const Lounge = () => {
  return (
    <>
    {/* Unaccompanied  Minor  Lounge */}
    <div><h1 className='w-2/5 text-4xl m-auto mt-12 mb-12'>Unaccompanied Minor Lounge</h1></div>
    <div className='w-4/5 ml-36 border-4 flex m-24 mt-6 '>
      
      <div className='w-3/5 grid grid-cols-2  '>
        <div className=' text-center w-5/6  border-4'>
          <h2 className='text-2xl mt-12 mb-4'>Help through the airport</h2>
          <p>You can also call airlines from your phone and book a flight ticket to one of your favourite destinations.</p>
        </div>

        <div className=' text-center w-5/6 border-4 '>
          <h2 className='text-2xl mt-12 mb-4'>Core on the flight</h2>
          <p>You can also call airlines from your phone and book a flight ticket to one of your favourite destinations.</p>
        </div>

        <div className=' text-center w-5/6  border-4 mt-4'>
          <h2 className='text-2xl mt-12 mb-4'>Priority Boarding</h2>
          <p>You can also call airlines from your phone and book a flight ticket to one of your favourite destinations.</p>
        </div>
          

        <div className=' text-center w-5/6 border-4 mb-12 mt-4  '>
          <h2 className='text-2xl mt-12 mb-4'>Chauffeur-drive service</h2>
          <p>You can also call airlines from your phone and book a flight ticket to one of your favourite destinations.</p>
        </div>
      </div>
      <div className='w-2/5 flex gap-2px '>
       <div className='border-4 static z-0'> <img className='w-72 h-96 rounded-3xl'   src={flightpeople} alt='err'/></div>
       <div className='border-4 z-10 mt-12 mr-12'> <img className='w-72 h-96 rounded-3xl' src={insideflight} alt='err'/> </div>
      </div>
    </div>

    </>
  )
}

export default Lounge