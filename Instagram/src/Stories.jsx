import React, { useEffect, useState } from 'react'

function Stories() {

  const [stories, setStories] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/stories')
      .then((data) => data.json())
      .then((data) => setStories(data))
      .catch((err) => console.log(err))
  }, [])

  return (
    <div className="stores d-flex">
      {stories.length > 0 ? (
        stories.map((story) => (
          <div key={story.id} >
            <div className="gradient-border mx-2">
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