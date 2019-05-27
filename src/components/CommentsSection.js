import React, { Component } from 'react';
import CommentForm from './CommentForm';
import Comments from './Comments';

/**
 * 
 * TODO: commentONAComment
 * TODO Make sure subCOmments work and add correctly
 * 
 *  */ 


class CommentsSection extends Component {
    state = {
        comments:[

        ]
    }
    addComment=(comment)=>{
        comment.key=Math.random();
        let comments =[...this.state.comments,comment];
        this.setState({comments});
    }
    addSubComment=(comment,subcomment)=>{
        subcomment.key=Math.random();
        let comments =[...this.state.comments];
        comments=comments.map(com=>{
            comment.commentsOnThisComment=(com.key===comment.key)?[...comment.commentsOnThisComment,subcomment]:comment.commentsOnThisComment;
            return com;
        })
        console.log(comments);
        this.setState({comments});
    }
    like= (comment)=>{
        let comments=[...this.state.comments];
        comments=comments.map((com)=>{
            console.log(com.key===comment.key);
            
            com.likes=(com.key===comment.key)?com.likes+1:com.likes;
            return com;
        });
        console.log(comments);
        this.setState({comments});
    }
    commentONAComment=()=>{
        console.log("stuff about to go down");
        
    }
    render(){
        return (
        <div className="">
            <h4 className="center">CommentsSection</h4>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam excepturi, voluptatem quasi vitae ipsa magni praesentium quo omnis odit? Fuga, animi! At architecto tempore, ea libero asperiores veritatis vel est!</p>
            <Comments addSubComment={this.addSubComment} comments={this.state.comments}like={this.like}/>
            <CommentForm addComment={this.addComment}/>
        </div>
        );}
    }


export default CommentsSection;
