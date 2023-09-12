import React from 'react'
import {Route,Routes} from "react-router-dom"
import Signup from './Signup';
import Signin from "./Signin"
import Home from './Home.js';
import  Search from "./Search.js"


const AllRoutes = () => {
  return (
    <Routes>
      
        <Route path='/' element={<Home/>}></Route>
        <Route  path="/Signup"  element={<Signup/>}></Route>
          <Route  path="/Signin"  element={<Signin/>}></Route>
          <Route path='/Search' element={<Search/>}></Route>
       
</Routes>
  )
}

export default AllRoutes