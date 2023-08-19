import React from 'react'
import checklist from "../assets/checklists.png"
import bookandrelax from "../assets/bookandrelax.png"
import bookmarks from "../assets/bookmarks.png"

const Memory = () => {
  return (
    <div className=' bg-neutral-100 mt-24'>
      <div className='flex gap-60 w-4/6 m-auto '>
        <h1 className='text-5xl mt-12'>Travel to make memories all around the world</h1>
        <button className='w-2/6 mt-12 border-2 border-cyan-600 w-18 h-12 rounded-lg'>View all</button>
      </div>

      <div className='flex w-4/6 m-auto gap-12 mt-24 '>
        <div className='mb-24 w-2/6  h-72 text-center rounded-2xl bg-white'>
          <img className='h-12 w-12 ml-36 mt-8 mb-8 rounded-full border-4' src={bookandrelax} alt='err' />
          <h1 className='text-2xl mb-4'>Book & Relax</h1>
          <p>You can also call airlines from your phone and book a flight ticket</p>
        </div>

        <div className='mb-24 w-2/6  h-72 text-center rounded-2xl bg-white'>
          <img className='h-12 w-12 ml-36 mt-8 mb-8 rounded-full border-4' src={checklist} alt='err' />
          <h1 className='text-2xl mb-4'>Smart Checklist</h1>
          <p>You can also call airlines from your phone and book a flight ticket</p>
        </div>

        <div className='mb-24 w-2/6  h-72 text-center rounded-2xl bg-white'>
          <img className='h-12 w-12 ml-36 mt-8 mb-8 rounded-full border-4 ' src={bookmarks} alt='err' />
          <h1 className='text-2xl mb-4'>Save More</h1>
          <p>You can also call airlines from your phone and book a flight ticket</p>
        </div>
      </div>
    </div>
  )
}

export default Memory