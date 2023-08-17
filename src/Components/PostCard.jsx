import React from 'react';
import "../App.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

export default function PostCard(props) {
  return (
    <div className='PostCard'>
      <Card className="card ">
        <Card.Body>
          <div className="user-info">
            <img className='profileimg' src={props.profileimg} alt="Profile" />
            <div className="user-details">
              <h3>{props.name}</h3>
              <span>3 July 2023</span>
            </div>
          </div>
          <Card.Text>
            <p>{props.content}</p>
            <img className="post-image" src={props.imgUrl} alt="Post" />
          </Card.Text>
          <Button variant="primary">Like</Button>
          <Button variant="primary">Comment</Button>
          <Button variant="primary">Share</Button>

          <div className="comment-section">
            <img className='profileimg comment-profile' src={props.profileimg} alt="Profile" />
            <Form.Control type="text" placeholder="Write a comment..." className="comment-input" />
          </div>
        </Card.Body>
      </Card>
    </div>
  )
}
