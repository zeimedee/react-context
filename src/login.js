import React, {useState,useContext} from 'react'
import {LoginContext} from './context/loginContext'

function Login() {
    const {setName,setShowProfile} = useContext(LoginContext);
    const handleClick =(e)=>{
        e.preventDefault();
        setShowProfile(true)
    }
    return (
        <div>
            <input
            type='text'
            onChange={(e)=>{
                setName(e.target.value)
            }} />
            <button
            onClick={handleClick}
            >Login</button>
            
        </div>
    )
}

export default Login
