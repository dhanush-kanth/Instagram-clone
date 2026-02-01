import React from 'react'

function Sidebar() {
  return (
    <>
    <div className='m-3 position-fixed '>
    <div className='d-flex flex-column gap-3'>
    <img className="text-logo mt-2" src='src/assets/Instagram_text.png'/>
    <div className='d-flex flex-column gap-4 mt-4 fs-5 text'>
    <div><i className="bi bi-house-door"></i>Home</div>
    <div><i className="bi bi-search"></i>Search</div>
    <div><i className="bi bi-compass"></i>Explore</div>
    <div><i className="bi bi-play-btn"></i>Reels</div>
    <div><i className="bi bi-chat-dots"></i>Message</div>
    <div><i className="bi bi-heart"></i>Notification</div>
    <div><i className="bi bi-plus-square"></i>Create</div>
    <div><i className="bi bi-person-circle"></i>Profile</div>
    </div>
    </div>
    <div className='d-flex flex-column gap-3 fixed-bottom mb-4 m-3'>
        <div><i className="bi bi-threads"></i>Threads</div>
        <div><i className="bi bi-list"></i>More</div>
    </div>
    
    </div>
    </>

  )
}

export default Sidebar