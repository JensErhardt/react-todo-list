import React, { Component } from 'react';


class ToDoCreator extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.onAdd}>
        <input 
        onChange={this.props.onChange} 
        type={this.props.} 
        name="creatorText" 
        />
        <input 
        {/* onClick={this.props.onAdd} */}
        type="submit" 
        value="Add"/>
      </form>
    )
  }
};

export default ToDoCreator;