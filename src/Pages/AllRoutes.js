import React from 'react'
import {Route,Routes} from "react-router-dom"
import Signup from './Signup';
import Signin from "./Signin"
import Home from './Home.js';
import Travell from './Travell.js'
import Memory from './Memory.js';
import Lounge from './Lounge.js';



const AllRoutes = () => {
  return (
    <Routes>
      {/* somewher eyou are doing something wrong..... you are getting error on signup page then go the signpu component */}
        <Route path='/' element={<Home/>}></Route>
        <Route  path="/Signup"  element={<Signup/>}></Route>
        
        <Route  path="/Travell"  element={<Travell/>}></Route>
        <Route  path="/Memory"  element={<Memory/>}></Route>
        <Route  path="/Lounge"  element={<Lounge/>}></Route>
        <Route  path="/Signin"  element={<Signin/>}></Route>
       
</Routes>
  )
}

export default AllRoutes