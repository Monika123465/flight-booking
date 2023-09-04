import React from 'react'
import {Route,Routes} from "react-router-dom"
import Signup from './Signup.js';
import Signin from "./Signin.js"
import Home from './Pages/Home';
import Travell from './Pages/Travell.js'
import Memory from './Pages/Memory.js';
import Lounge from './Pages/Lounge.js';



const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route  path="/Signup"  element={<Signup/>}></Route>
        <Route  path="/Search"  element={<Courses/>}></Route>
        <Route  path="/Travell"  element={<Travell/>}></Route>
        <Route  path="/Memory"  element={<Memory/>}></Route>
        <Route  path="/Lounge"  element={<Lounge/>}></Route>
        <Route  path="/Signin"  element={<Signin/>}></Route>
       
</Routes>
  )
}

export default AllRoutes