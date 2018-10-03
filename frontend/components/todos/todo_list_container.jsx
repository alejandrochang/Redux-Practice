import React from 'react';
import TodoList from './todo_list';
import {allTodos} from '../../reducers/selectors';
import {
  receiveTodo,
  fetchTodosActionCreator,
  createTodoActionCreator
} from '../../actions/todo_actions';
import {connect} from 'react-redux';
import {clearErrors} from '../../actions/error_actions';

const mapStateToProps = state => ({
  todos: allTodos(state),
  errors: state.errors
});

const mapDispatchToProps = dispatch => ({
  // receiveTodo: (todo) => dispatch(receiveTodo(todo)),
  fetchTodos: () => dispatch(fetchTodosActionCreator()),
  createTodo: (todo) => dispatch(createTodoActionCreator(todo)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
