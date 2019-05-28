import React from 'react'
import pic from "../pics/IMG_1535.JPG"
import './piccss.css';
import CommentForm from './CommentForm';
import SubComments from './SubComments';


// TODO: fix show command for each comment

const Comments = ({ comments, like, showCommentForm, addComment }) => {

    //get all comments in renderable shape
    const comment = comments.map(comment => {
        //get all comments on comments in renderablel shape
        return (
            <div className="container" key={comment.key}>
                <div className="rowC">
                    <img align="middle" className="pic" src={pic} alt="pic" />
                    <div className="commentsection">
                    <p><a href="https://www.facebook.com" htmlFor="">Michael Panagos </a>
                        {comment.comment}</p>
                        </div>
                </div>
                <div className="likeedit container">
                    <label htmlFor="">{(comment.likes !== 0) ? comment.likes : null}</label>
                    <button onClick={() => { like(comment, false) }}>like</button>
                    {(comment.commentsOnThisComment.length > 0) ? <SubComments addComment={addComment} showCommentForm={showCommentForm} like={like} comments={comment.commentsOnThisComment} /> : null}
                    {(comment.show) ? <CommentForm mainComment={comment} addComment={addComment} sub={true} /> : null}
                    {(!comment.show) ? <button onClick={() => { showCommentForm(comment) }}>respond</button> : null}
                </div>
                <hr />
            </div>
        );
    });
    return (
        <div className="todos ">
            {comment}
        </div>
    );
}

export default Comments;
