import React from 'react'
import flightlogo from "../assets/flightlogo.jpg"
import { Link } from 'react-router-dom'


const Navbar = () => {
    return (
        <>
            <div class="h-24  flex justify-between shadow-md  " >
                <div class='w-24 ml-24'>
                    <img src={flightlogo} alt='err' />
                </div>
                <div class="m-8 h-8  text-xl">
                    <Link class='m-8' to="/">Home</Link>
                    <Link class="m-8">About</Link>
                    <Link class='m-8'>Offers</Link>
                    
                    <Link class='m-8'>Destinations</Link>
                </div>

                <div class='h-16   text-xl m-8 mr-24'>
                  <button class='border-2 border-cyan-600 ml-8'> <Link class='m-8  ' to="/signin">Signin </Link></button>
                   <button class='border-2 border-cyan-600 ml-8'> <Link class='m-8 border-black display:block'>Contact</Link></button>
                </div>
           </div>

        </>
    )
}

export default Navbar