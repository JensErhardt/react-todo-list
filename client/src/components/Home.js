import React, { Component } from 'react';
import ToDoItem from './ToDoItem';
import ToDoCreator from './ToDoCreator';

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: [],
      newToDoText: "Enter To-Do",
    }
  }

  componentDidMount() {
    api.getTodos()
      .then(todos => {
        this.setState({
          todos
        })
      })
  }

  handleChange(e) {
    this.setState({
      newToDoText: e.target.value
    });
  }

  handleAdd(e) {
    e.preventDefault();
    this.setState({
      todos: [...this.state.todos, {text: this.state.newToDoText}]
    })
  }

  render() {
    return (
      <div className="Home">
        <h2>Home</h2>
        <ToDoCreator 
        onAdd={this.handleAdd.bind(this)}
        onChange={this.handleChange.bind(this)} 
        newToDoText={this.state.newToDoText} 
        />
        <table>
          <ul>
            {this.state.todos.map(todo, i => {
              return <ToDoItem key={todo.id} todo={props.todo} />
            })}
          </ul>
        </table>
      </div>
    );
  }
}

export default Home;
