import React, { Component } from 'react'



class CommentForm extends Component {
    state = {
        author:'',comment: '',likes:0,commentsOnThisComment:[]
    }
    handleChange=(e)=>  {
            this.setState({ comment:e.target.value });
        
    }
    handleSubmit=(e)=> {
        e.preventDefault();
        if(!this.props.sub){
            this.props.addComment(this.state);}
        else{
            this.props.addSubComment(this.props.masterComment,this.state);
        }
        this.setState({comment:''});
     } 
            render() { 
            return(   
            <div className="container ">
                    <form onSubmit={this.handleSubmit} >
                        <label htmlFor="">Comment</label>
                          <textarea name="" id="commentfield" cols="30" rows="10 "onChange={this.handleChange}value = { this.state.comment }></textarea>
                    <button>Submit</button>
                </form>
                </div>)
                }
}
            
        

export default CommentForm;
