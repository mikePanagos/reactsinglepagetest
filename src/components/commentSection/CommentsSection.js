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
        page:this.props.page,
        comments: [

        ]
    }
    addComment = (comment, isSubComment, subComment) => {
        let comments
        
        
        if (isSubComment) {
            subComment.key = Math.random();
            subComment.isSubComment = true;
            comments = [...this.state.comments];
            comments.map(com => {
                if (com.key === comment.key) {
                    com.commentsOnThisComment = [...com.commentsOnThisComment, subComment];
                }
                return com;
            })
            comment.show = false;
        } else {
            comment.key = Math.random();
            comment.isSubComment = false;
            comments = [...this.state.comments, comment];
        }
        this.setState({ comments })
        console.log(this.state);
    }
    like = (comment, sub) => {
        let comments
        if (!sub) {
            comments = [...this.state.comments];
            for (let i = 0; i < comments.length; i++) {

                if (comment.key === comments[i].key) {
                    comments[i].likes++;
                }
            }
        } else {
            comments = [...this.state.comments];
            for (let i = 0; i < comments.length; i++) {
                if(comments[i].commentsOnThisComment){
                for (let j = 0; j < comments[i].commentsOnThisComment.length; j++) {
                    if (comment.key === comments[i].commentsOnThisComment[j].key) {
                        comments[i].commentsOnThisComment[j].likes++;
                    }
                }}
            }
        }
        this.setState({ comments });
    }
    showCommentForm = ({ key }) => {
        let comments = [...this.state.comments];
        comments = comments.map(comment => {
            if (comment.key === key) {
                comment.show = true;
            }
            return comment;
        })
        this.setState({ comments });

    }
    render() {
        return (
            <div className="container">
                <Comments addComment={this.addComment} showCommentForm={this.showCommentForm} like={this.like} comments={this.state.comments} />
                <CommentForm sub={false} addComment={this.addComment} />
            </div>
        );
    }
}


export default CommentsSection;
