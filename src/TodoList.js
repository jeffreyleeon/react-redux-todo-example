import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import Todo from './Todo';

class TodoList extends Component {
  propTypes() {
    return {
      todos: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          completed: PropTypes.bool.isRequired,
          text: PropTypes.string.isRequired
        }).isRequired
      ).isRequired,
      onTodoClick: PropTypes.func.isRequired
    };
  }

  render() {
    let { todos } = this.props;
    return (
      <ul>
        {todos.map(todo =>
          <li>{todo.text}</li>
        )}
      </ul>
    );
  }
}

export default TodoList;
