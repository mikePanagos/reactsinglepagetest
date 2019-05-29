import React, { Component } from 'react'



class CommentForm extends Component {
    state = {
        author: '', comment: '', likes: 0, commentsOnThisComment: [], isSubComment: false, show: false
    }
    handleChange = (e) => {
        this.setState({ comment: e.target.value });

    }
    handleSubmit = (e) => {
        e.preventDefault();
        // console.log(this.props.sub);
        console.log(this.state.comment);
        console.log(this.state.comment !== "");
        
        
        if (!this.state.comment  !== "") {
            if (!this.props.sub) {
                this.props.addComment(this.state, false, null);
                this.setState({ comment: '' });
            } else {
                // console.log(this.props.mainComment);

                this.props.addComment(this.props.mainComment, true, this.state);
                this.setState({ comment: '' });
            }
        }
    }
    render() {
        return (
            <div className="container ">
                <form onSubmit={this.handleSubmit} >
                    {/* <input type="text"onChange={this.handleChange} value={this.state.comment}/> */}
                    <textarea name="" id="commentfield" cols="30" rows="10 " onChange={this.handleChange} value={this.state.comment}></textarea>
                    <button>Submit</button>
                </form>
            </div>)
    }
}



export default CommentForm;
