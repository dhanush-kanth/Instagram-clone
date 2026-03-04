import React, { useState, useEffect } from "react";

function Suggestion() {
  const [profile, setProfile] = useState(null);
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/profile")
      .then((res) => res.json())
      .then((data) => setProfile(data))
      .catch((error) => console.log(error));

    fetch("http://localhost:3000/Suggestions")
      .then((res) => res.json())
      .then((data) => setSuggestions(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <div className="suggestions w-75 m-4">
        {profile ? (
          <div className="flex d-flex pt-2">
            <img
              className="profile-pic rounded-circle"
              src={profile.profilePic}
              alt="profile"
            />
            <h5>{profile.username}</h5>
            <p className="ms-auto text-primary">Switch</p>
          </div>
        ) : (
          <p>Loading Page</p>
        )}

        <div className="d-flex ">
          <p>Suggestions for you</p>
          <b className="ms-auto">see more</b>
        </div>

        {suggestions && suggestions.length > 0 ? (
          <div>
            {suggestions.map((item) => (
              <div className="my-3" key={item.id}>
                <div className="flex d-flex pt-2">
                  <img
                    className="profile-pic rounded-circle"
                    src={item.profilePic}
                    alt="profile"
                  />
                  
                  <h5>{item.username}</h5>
                  <p className="ms-auto text-primary">Follow</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p>Loading</p>
        )}
        
      </div>
    </div>
  );
}

export default Suggestion;
