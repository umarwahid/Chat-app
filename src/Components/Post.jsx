import React from 'react';
import PostCard from './PostCard';
import street2 from "./street.jpeg"
import street3 from "./street2.jpeg"
import pic4 from "./pic4.jpeg";


export default function Post() {
  return (
    <div className='Post'>
        <div className="add-post">
            <div className="user-profile">
                <img className="profile-img" src="../myimage.jpg" alt="Profile" />
                <textarea className="post-input" placeholder="What's on your mind?"></textarea>
            </div>
            <div className="attachment">
                <input type="file" id="file-input" style={{display: "none;"}} />
                <label for="file-input" className="btn-attachment">
                <i className="fas fa-paperclip"></i> Attach
                </label>
            </div>
            <div className="post-buttons">
                <button className="btn btn-post">Post</button>
            </div>
        </div>
      <PostCard name="Muhammad Umar" imgUrl="../myimage.jpg" content="image on beach" profileimg="../myimage.jpg" time="Just now"/>
      <PostCard name="Muhammad Umar" imgUrl={pic4} content="Imaginations" profileimg="../myimage.jpg" time="16 Hours"/>
      <PostCard name="Muhammad Umar" imgUrl={street2}
      content="Night View"
      profileimg="../myimage.jpg"
      time="24 hours"/>
      <PostCard name="Muhammad Umar" imgUrl={street3} content="Sun Light View" profileimg="../myimage.jpg" time="14 August"/>
      </div>
  )
}
