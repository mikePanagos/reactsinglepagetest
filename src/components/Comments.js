import React from 'react'


const Comments =({comments}) =>
{
    const comment=comments.map(comment=>{
        return(<div key={comment.key}>
            <p>{comment.comment}</p>
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
