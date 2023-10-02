import React from 'react'
import {createContext,useState} from "react"



export const authContext=createContext()

const AuthContextProvider=({children})=>{
    const [users,setUsers]=useState("")
    const [user,setUser]=useState("")

    const signIn=({username,password})=>{
        const user=users.find((el)=>(el.username===username)&&( el.password===password)) 
        setUser(user);
        if(!user) return false
        return true
    }
    const signUp=(user)=>{
        setUser([...users,user])
        localStorage.setItem('users',JSON.stringify([...users,user]))

    }
    const logout=()=>{
        if(user){
            setUser(null)
            localStorage.removeItem('user')
        }
    }

    return <authContext.Provider value={{users,user,signIn,signUp,logout}}>
        {children}
    </authContext.Provider>
}

export default AuthContextProvider;


