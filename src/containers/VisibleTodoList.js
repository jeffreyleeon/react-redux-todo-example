import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleTodo } from '../actionsCreators';
import TodoList from '../TodoList';

const getTodos = (todos = [], filter) => {
    switch (filter) {
      case 'SHOW_COMPLETED':
        return todos.filter(t => t.completed);
      case 'SHOW_ACTIVE':
        return todos.filter(t => !t.completed);
      case 'SHOW_ACTIVE':
      default:
        return todos;
    }
}

const mapStateToProps = (state) => {
    return {
        todos: getTodos(state.todos, state.visibilityFilter)
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onTodoClick: (todoID) => {
            dispatch(toggleTodo(todoID));
        }
    };
}

const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);

export default VisibleTodoList;
