import React,{useContext} from 'react'
import {LoginContext} from './context/loginContext'

function Profile() {
    const {name} = useContext(LoginContext)
    return (
        <div>
            profile: {name}
        </div>
    )
}

export default Profile
