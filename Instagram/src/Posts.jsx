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
    <div className='d-flex justify-content-center'>
      {post.length > 0 ? 
        <div>
          {post.map((post)=> (
            <div className="my-3" key={post.id}>
              <div className='flex d-flex pt-2'>
              <img className="profile-pic rounded-circle" src={post.profilePic} alt="profile" />
              <h5>{post.username}</h5>  
              </div>
              <img className="post-image " src={post.postImage} alt="post" />
              <div className='flex d-flex'>
                <h4><i class="bi bi-heart"></i></h4>
                <h4><i class="bi bi-chat"></i></h4>
                <h4><i class="bi bi-send"></i></h4>
              </div>
              <div className='flex d-flex flex-column'>
              <h6>{post.likes} likes</h6>
              <p>{post.caption}</p>
            </div>
            </div>
          ))}
        </div>
       : "Loading Page"}
    </div>
  )
}

export default Posts;