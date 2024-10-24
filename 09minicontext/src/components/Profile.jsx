import React, { useContext } from 'react'
import UserContext from '../context/userContext'

function Profile() {
    const {user} = useContext(UserContext)
    if(!user) 
      return(
        <>
        <p>Please Login</p>
        </>
    )
  return (
    <div>
        <h1>Welcome {user.username}</h1>
    </div>
  )
}

export default Profile
