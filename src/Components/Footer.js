import React from 'react'
import facebook from "../assets/facebook.png"
import twitter from "../assets/twitter.png"
import youtube from "../assets/youtube.png"
import instagram from "../assets/instagram.jpeg"


const Footer = () => {
  return (
    <div class="bg-neutral-300 leading-10 mt-12	">

      <div class='w-2/5 m-auto text-center border-2 border-transparent'>
        <div class="w-5/6  mt-24 "><p>Subscribe Newsletter & get Latest News</p></div>
        <input class='w-4/5 h-8 rounded-md ' placeholder='Enter you email address' type='text' />
        <button class=' w-24 h-12 rounded-md  border-2 border-cyan-600 ml-8 '>Subscribe</button>
      </div>


      <div class=' ml-48 grid grid-cols-4 gap-4 mt-24 leading-normal '>
        <div class=" w-full  ml-12  ">
          <p>Your mind should be stronger  than your feelings.fly !</p>
          <div class="flex w-4/6  h-8"><img src={facebook} alt='err' /> <img src={twitter} alt='err' /> <img src={youtube} alt='err' /> <img src={instagram} alt='err' /></div>
        </div>
        <div class='ml-24'>
          <h1 class='mb-8'>Information</h1>
          <p>Home</p>
          <p>Explore</p>
          <p>Flight Status</p>
          <p>Travel</p>
          <p>Check-in</p>
          <p>Manage your booking</p>
        </div>
        <div>
          <h1 class='mb-8'>Quick Guide</h1>
          <p>FAQ</p>
          <p>How to</p>
          <p>Features</p>
          <p>Baggage</p>
          <p>Route Map</p>
          <p>Our communities</p>
        </div>
        <div class='mb-24'>
          <h1 class='mb-8'>Information</h1>
          <p>Chauffuer</p>
          <p>Our partners</p>
          <p>Destination</p>
          <p>Careers</p>
          <p>Transportation</p>
          <p>Programme Rules</p>
        </div>


      </div>

    </div>
  )
}

export default Footer