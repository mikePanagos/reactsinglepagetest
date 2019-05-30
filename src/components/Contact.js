import React from 'react';
import CommentSection from "./commentSection/CommentsSection"


const Contact = (props) => {
    console.log(props);
    // setTimeout(() => {
    // props.history.push('/About') 
    // }, 2000);
    return (
        <div className="container">
            <h4 className="center">Contact</h4>

            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam excepturi, voluptatem quasi vitae ipsa magni praesentium quo omnis odit? Fuga, animi! At architecto tempore, ea libero asperiores veritatis vel est!</p>
            <CommentSection page={"contact"} />
        </div>
    );

}

export default Contact;
