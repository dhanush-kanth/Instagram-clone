import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Stories() {
  const navigate = useNavigate()
  const [stories, setStories] = useState([])
  let tot = 0;

  useEffect(() => {
    fetch('http://localhost:3000/stories')
      .then((data) => data.json())
      .then((data) => setStories(data))
      .catch((err) => console.log(err))
  }, [])

  return (
    <div className="stores d-flex">
      <div className="d-none">{tot = stories.length}</div>
      {stories.length > 0 ? (
        stories.map((story) => (
          <div key={story.id} className=""onClick={()=> navigate(`/story/${story.id}/${tot}`)}>
            <div className="gradient-border mx-2 ">
              <img src={story.profilePic} alt={story.title} className="story-dp rounded-circle"/>
            </div>
            <p className="text-truncate" style={{width:"60px"}}>{story.username}</p>
          </div>
        ))
      ) :
      (
        <p>loading page</p>
      )}
    </div>
  )
}

export default Stories;