import React from 'react'
import {useState, useEffect} from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
function viewstory() {
  const {id, tot} = useParams()
  const [story, setstory] = useState(null)
  const navigate = useNavigate()
  useEffect (()=> {
    fetch(`http://localhost:3000/stories/${id}`)
    .then((data) => data.json())
    .then((data) => setstory(data))
    .catch((err) => {console.log(err);
    })
  }, [id])
    useEffect(() => {
      fetch('http://localhost:3000/stories')
        .then((data) => data.json())
        .then((data) => setStories(data))
        .catch((err) => console.log(err))
    }, [])

  if (id > tot || id < 1){
    navigate('/')
  }
  return (

    
    <div>{story ? 
    <div className= "d-flex flex-column justify-content-center align-items-center">
      <div className= "d-flex justify-content-center align-items-center">
                <img src={story.profilePic} alt={story.username} className="profile-pic rounded-circle" />
                <div>{story.username}</div>
            </div>
      
    <div className="">
    <Link to={`/story/${Number(id)-1}/${tot}`}><i className="bi bi-arrow-left-circle-fill"></i></Link>
      
      <img className="vh-100" src={story.storyImage} alt="story" />
      <Link to={`/story/${Number(id)+1}/${tot}`}><i className="bi bi-arrow-right-circle-fill"></i></Link>
      </div>
    </div> 
    : <div>
      <p>Loading</p></div>}
      </div>
  )
}
export default viewstory