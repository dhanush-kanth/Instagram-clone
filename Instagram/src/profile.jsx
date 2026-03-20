import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'

function profile() {

    const[profile, setprofile] = useState(null)

    useEffect (()=> {
        axios.get('http://localhost:3000/profile')
        .then ((data) => setprofile(data.data))
    })
  return (
    <div>
        {
            profile ? (<div className= "m-5  align-items-center profile-pic">
                <img src={profile.profilePic} alt={profile.name} className="profilepage-pic rounded-circle" />
                <h5>{profile.username}</h5>
                <a href="https://www.instagram.com/dhanush_kanth/"> Edit Profile</a>
            </div>) : (<div><p>Loading</p></div>)

        }
    </div>
  )
}

export default profile
