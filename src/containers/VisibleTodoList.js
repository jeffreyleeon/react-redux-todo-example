import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleTodo } from '../actionsCreators';
import TodoList from '../TodoList';

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onTodoClick: (todoID) => {
            console.log('========id of todo is ', todoID);
            dispatch(toggleTodo(todoID));
        }
    };
}

const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);

export default VisibleTodoList;
