import React from 'react'
import flightlogo from "../assets/flightlogo.jpg"
import {AiFillFacebook,AiFillTwitterSquare,AiFillYoutube,AiFillGoogleCircle} from "react-icons/ai"

const Footer = () => {
  return (
    <div class="bg-neutral-300 leading-10	">
        <div class='w-2/5 border-2 border-rose-600 m-auto text-center '>
           <div class="mt-12 text-xxl"><p>Subscribe Newsletter & get Latest News</p></div>
           <div>
            <input placeholder='Enter you email address'  type='text'/>
           <button>Subscribe</button>
           </div>
        </div>

        <div>
            <div class="">
             
             <div> <p>Your mind should be stronger  than your feelings.fly !</p></div>
             <div><AiFillFacebook/> <AiFillTwitterSquare/> <AiFillYoutube/> <AiFillGoogleCircle/></div>
                           
            </div>

              <div>
                <div>
                  <h1>Information</h1>
                </div>
                <div>
                  <p>Home</p>
                  <p>Explore</p>
                  <p>Flight Status</p>
                  <p>Travel</p>
                  <p>Check-in</p>
                  <p>Manage your booking</p>
                </div>
              </div>

              <div>
              <div>
                  <h1>Quick Guide</h1>
                </div>
                <div>
                  <p>FAQ</p>
                  <p>How to</p>
                  <p>Features</p>
                  <p>Baggage</p>
                  <p>Route Map</p>
                  <p>Our communities</p>
                </div>
              </div>

              <div>
              <div>
                  <h1>Information</h1>
                </div>
                <div>
                  <p>Chauffuer</p>
                  <p>Our partners</p>
                  <p>Destination</p>
                  <p>Careers</p>
                  <p>Transportation</p>
                  <p>Programme Rules</p>
                </div>
              </div>
        </div>
        
    </div>
  )
}

export default Footer