import React from 'react';
import CommentSection from "./commentSection/CommentsSection";
import Rainbow from './hoc/Rainbow'
const About = () => {
  return (
    <div className="container">
      <h4 className="center">About</h4>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam excepturi, voluptatem quasi vitae ipsa magni praesentium quo omnis odit? Fuga, animi! At architecto tempore, ea libero asperiores veritatis vel est!</p>
      <CommentSection page={"about"}/>
    </div>
  );
}

export default Rainbow(About);
