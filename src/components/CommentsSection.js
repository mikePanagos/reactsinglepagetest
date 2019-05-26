import React, {Component} from 'react';
import Comments from './Comments';
import CommentForm from './CommentForm';


class CommentsSection extends Component {
    state={
        comments:[

        ]
    }
    addComment=(comment)=>{
        comment.key=Math.random();
        let comments =[...this.state.comments,comment];
        this.setState({comments});
    }
    render(){
        return (
        <div className="container">
            <h4 className="center">CommentsSection</h4>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam excepturi, voluptatem quasi vitae ipsa magni praesentium quo omnis odit? Fuga, animi! At architecto tempore, ea libero asperiores veritatis vel est!</p>
            <Comments comments={this.state.comments}/>
            <CommentForm addComment={this.addComment}/>
        </div>
        );}
    }


export default CommentsSection;
