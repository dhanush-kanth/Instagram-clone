import React from 'react'


function Suggestion() {

  const [profile, setprofile] = useState(null)
  const [suggestion, setsuggestion] = useState(null)

  useEffect(() => {
    fetch('http://localhost:3000/profile')
    .then((data => data.json()))
    .then((data) => setprofile(data))
    .catch((error) => console.log(error))

    fetch('http://localhost:3000/suggestion')
    .then((data => data.json())
    .then((data) => setsuggestion(data))
    .catch((error) => console.log(error))
  )
  },[]);
  return (
    <div>
      <div className='flex d-flex pt-2'>
      <img className="profile-pic rounded-circle" src={profile.profilePic} alt="profile" />
      <h5>{profile.username}</h5>  
      </div>
    </div>
  )
}

export default Suggestion