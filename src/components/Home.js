import React, { Component } from 'react';
import CommentSection from "./commentSection/CommentsSection";
// import axios from 'axios';
import { Link } from 'react-router-dom';
import PokeBall from '../pokeball.png'
import {connect} from 'react-redux';
import Knobs from "./knob";

class Home extends Component {
  // state = {
  //   posts: []
  // }
  // componentDidMount() {
    // axios.get('https://jsonplaceholder.typicode.com/posts').then((res) => {
    //   console.log(res);
    //   this.setState({ posts: res.data.slice(0, 10) });

    // });


  // }
  render() {
    const { posts } = this.props;
    const postList = (posts.length) ? (
      posts.map(post => {
        return (
          <div className="post card" key={post.id}>
            <img src={PokeBall} alt="a pokeball"/>
            <div className="card-content">
              <Link to={'/'+post.id}>
                <span className="card-title red-text">{post.title}</span>
              </Link>
              <p>{post.body}</p>
            </div>
          </div>
        )
      })
    ) : (
        <div className="center">No Post Yet</div>
      );
    return (
      <div className="container home">
        <h4 className="center">Home</h4>
        <div className="row m2 s6">
          <div className="col m6 s12">
          <Knobs/>
          </div>
          <div className="col m6 s12">
          <Knobs/>
          </div>
        </div>
        <div className="row m2 s6">
          <div className="col m6 s12">
          <Knobs/>
          </div>
          <div className="col m6 s12">
          <Knobs/>
          </div>
        </div>
        
        {postList}
        <CommentSection page={"home"} />
      </div>
    );
  }
}
const mapStateToProps=(state)=>{
  return{
    posts:state.posts
  };
};

//connect is a function you need to invoke it then wrap it to make a 
// *higher order component!!!!
export default connect(mapStateToProps)(Home);
