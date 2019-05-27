import React from 'react'
import pic from "../pics/IMG_1535.JPG"
import  './piccss.css';
import CommentForm from './CommentForm';

// TODO: fix show command for each comment

const Comments=({comments,like,addSubComment,commentONAComment})=>
{   
    
    
        //get all comments in renderable shape
        const comment=comments.map(comment=>{
            //get all comments on comments in renderablel shape
            let subComment=comments.map(comment=>{
                let sub=comment.commentsOnThisComment;
                console.log(sub);
                
                if(!sub.length===0)
                {return(
                    <div className="container"key={sub.key}>
                        <p><img align="middle" className="pic" src={pic} alt="pic"/>
                        <a href="https://www.facebook.com"htmlFor="">Michael Panagos </a>{sub.comment}</p>
                        <div className="likeedit container">
                            <label htmlFor="">{(sub.likes!==0)?sub.likes:null}</label><button onClick={()=>{like(sub)}}>like</button>
                            {/* {(!state.show)?<button onClick={()=>{commentONAComment(sub)}}>comment</button>:null}
                            {(state.show)?<CommentForm masterComment={sub}sub={true}addSubComment={addSubComment}/>:null} */}
                            
                        </div>
                        <hr/>
                    </div>
                    );}else{return null;}
                });
        return(
            <div className="container"key={comment.key}>
                <p><img align="middle" className="pic" src={pic} alt="pic"/>
                <a href="https://www.facebook.com"htmlFor="">Michael Panagos </a>{comment.comment}</p>
                <div className="likeedit container">
                    <label htmlFor="">{(comment.likes!==0)?comment.likes:null}</label><button onClick={()=>{like(comment)}}>like</button>
                    {/* {(!state.show)?<button onClick={()=>{commentONAComment(comment)}}>comment</button>:null}
                    {(state.show)?<CommentForm masterComment={comment}sub={true}addSubComment={addSubComment}/>:null} */}
                    {subComment}
                </div>
                <hr/>
            </div>
            );
    });
            return(
            <div className="todos collection">
                {comment}
            </div>
        );
}

export default Comments;
