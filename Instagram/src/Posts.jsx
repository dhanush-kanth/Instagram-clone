import React, { useEffect, useState } from 'react'

function Posts() {
  const[post , setpost] = useState([])

  useEffect(()=>{
    fetch('http://localhost:3000/posts')
    .then((data)=> data.json())
    .then((data)=>(setpost(data)))
    .catch((error)=> console.log (error))
  },[])
  return (
    <div>
      {post.length > 0 ? 
        <div>
          {post.map((post)=> (
            <div key={post.id}>
              {<img src={post.profilePic} alt="profile" className="profile-pic" />}
              {<img src={post.postImage} alt="post" className="post-image" />}

            </div>
          ))}
        </div>
       : "Loading Page"}
    </div>
  )
}

export default Posts;