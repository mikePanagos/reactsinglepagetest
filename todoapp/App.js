import React,{Component} from 'react';
import Todos from '../src/Todos';
import AddTodo from './AddTodo';
class App extends Component {
  state ={
    todos:[
      {id:1,content:"buy some milk"},
      {id:2,content:"buy some meat"}

    ]
  }
  deleteTodo=(id)=>{
    const todos=this.state.todos.filter(todo=>{
      return (todo.id !== id);
    });
    this.setState({todos})
  }
  addTodo=(todo)=>{
    todo.id=Math.random(0);
    const todos=[...this.state.todos,todo]
    this.setState({todos});

  }
  render(){
  return (
    <div className="todo-App container">
      <h1 className="center blue-text">Todo's</h1>
      <Todos deleteTodo={this.deleteTodo}todos={this.state.todos}/>
      <AddTodo addTodo={this.addTodo}/>
    </div>
  );
}}

export default App;
