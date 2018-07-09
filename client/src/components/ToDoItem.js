import React from 'react';

class ToDoItem extends React.Component {
  render() {
    return (
      <div className="ToDoItem">
        <h1>ToDoItem</h1>
        <ul>
          <p>{this.props.todo.text}</p>
          <p>{this.props.todo.owner.name}</p>
        </ul>
      </div>
    )
  }
}