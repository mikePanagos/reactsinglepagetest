import React, { Component } from 'react'



class CommentForm extends Component {
    state = {
        comment: ''
    }
    handleChange=(e)=>  {
            this.setState({ comment:e.target.value });
        
    }
    handleSubmit=(e)=> {
        e.preventDefault();
        this.props.addComment(this.state);
        this.setState({comment:''});
     } 
            render() { 
            return(   
            <div lassName="container ">
                <h4 className="center">Comments</h4>
                    <form onSubmit={this.handleSubmit} >
                        <label htmlFor="">Comment</label>
                          <textarea name="" id="commentfield" cols="30" rows="10 "onChange={this.handleChange}value = { this.state.comment }></textarea>
                    <button>Submit</button>
                </form>
                </div>)
                }
}
            
        

export default CommentForm;
