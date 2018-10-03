import * as APIUtil from '../util/todo_api_util';
import { receiveErrors, clearErrors } from './error_actions';

export const RECEIVE_TODOS = 'RECEIVE_TODOS';
export const RECEIVE_TODO = 'RECEIVE_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';

export const receiveTodos = todos => ({ type: RECEIVE_TODOS, todos });
export const receiveTodo = todo => ({ type: RECEIVE_TODO, todo });
export const removeTodo = todo => ({type: REMOVE_TODO, todo});

export const createTodoActionCreator = todo => (dispatch) => {
  return APIUtil.createTodoRequest(todo)
    .then(
      res => dispatch(receiveTodo(res)),
      err => dispatch(receiveErrors(err.responseJSON))
    );
};

export const fetchTodosActionCreator = () => (dispatch) => {
  return APIUtil.fetchTodosRequest()
    .then(res => dispatch(receiveTodos(res)));
};


// https://stackoverflow.com/questions/35411423/how-to-dispatch-a-redux-action-with-a-timeout/35415559#35415559
// export function dispatchFetchTodosAction(dispatch) {
//   APIUtil.fetchTodosRequest()
//     .then(res => dispatch(receiveTodos(res)));
// }
