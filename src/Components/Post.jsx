import React from 'react'
import PostCard from './PostCard'

export default function Post() {
  return (
    <div className='Post'>
      <PostCard name="Muhammad Umar" imgUrl="../myimage.jpg" content="image on beach" profileimg="../myimage.jpg"/>
      <PostCard name="Hafiz Saad Rizvi" imgUrl="https://i.pinimg.com/736x/97/df/27/97df27c310ac2d5a8c8cacd12b21c20e.jpg" content="TLP Leader" profileimg="https://i.pinimg.com/736x/97/df/27/97df27c310ac2d5a8c8cacd12b21c20e.jpg"/>
      <PostCard name="Muhammad Umar" imgUrl="../myimage.jpg" content="image on beach" profileimg="../myimage.jpg"/>
      <PostCard name="Muhammad Umar" imgUrl="../myimage.jpg" content="image on beach" profileimg="../myimage.jpg"/>
      </div>
  )
}
