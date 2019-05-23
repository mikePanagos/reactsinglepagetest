import React,{Component} from 'react';
import Ninjas from './Ninjas';
import AddNinja from './AddNinja';

class App extends Component {
  state= {
    ninjas:[
      {name:"Michael",age:'25',belt:"black",id:"1"},
      {name:"Nathan",age:'34',belt:"red",id:"2"},
      {name:"Zoe",age:'15',belt:"white",id:"3"}
    ]
  };
  addNinja=(ninja)=>{
    ninja.id=Math.random();
    //spread operaters ...
    let ninjas=[...this.state.ninjas,ninja];
    this.setState({ninjas:ninjas})
  };
  render(){
  return (
    <div >
   <h1>My first react app</h1>
   <p>welcome!!!</p>
   <Ninjas ninjas={this.state.ninjas}/>
   <AddNinja addNinja={this.addNinja}/>
    </div>
  );
}}

export default App;
