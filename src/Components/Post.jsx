import React from 'react';
import PostCard from './PostCard';
import street2 from "./street.jpeg"
import street3 from "./street2.jpeg"


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
      <PostCard name="Muhammad Umar" imgUrl="../myimage.jpg" content="image on beach" profileimg="../myimage.jpg"/>
      <PostCard name="Hafiz Saad Rizvi" imgUrl="https://i.pinimg.com/736x/97/df/27/97df27c310ac2d5a8c8cacd12b21c20e.jpg" content="TLP Leader" profileimg="https://i.pinimg.com/736x/97/df/27/97df27c310ac2d5a8c8cacd12b21c20e.jpg"/>
      <PostCard name="Muhammad Umar" imgUrl={street2} content="image on beach" profileimg="../myimage.jpg"/>
      <PostCard name="Muhammad Umar" imgUrl={street3} content="image on beach" profileimg="../myimage.jpg"/>
      </div>
  )
}
