import React from 'react'
import pic from "../pics/IMG_1535.JPG"
import './piccss.css';
// import CommentForm from './CommentForm';

// TODO: fix show command for each comment

const SubComments = ({ comments, like, showCommentForm, addComment }) => {

    //get all comments in renderable shape
    let comment = null;
    
    if (comments.length > 0) {
        comment=comments.map(comment => {
                //console.log(comment);

            //get all comments on comments in renderablel shape
            return (
                <div className="" key={comment.key}>
                <div className="rowC">
                    <img align="middle" className="pic" src={pic} alt="pic" />
                    <div className="commentsection">
                    <p><a href="https://www.facebook.com" htmlFor="">Michael Panagos </a>
                        {comment.comment}</p>
                        </div>
                </div>
                    <div className="likeedit container">
                        <label htmlFor="">{(comment.likes !== 0) ? comment.likes : null}</label>
                        <button onClick={() => { like(comment,true) }}>like</button>
                        {/* {(!comment.show) ? <button onClick={() => { showCommentForm(comment) }}>comment</button> : null}
                        {(comment.show) ? <CommentForm mainComment={comment} addComment={addComment} sub={true} /> : null} */}
                    </div>
                    <hr />
                </div>
            );
        });
    }else{
        comment = null;
    }
    return (
        <div className="subComments ">
            {comment}
        </div>
    );
}

export default SubComments;
