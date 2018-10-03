import { RECEIVE_ERRORS, CLEAR_ERRORS } from '../actions/error_actions';

export default function errorReducer(state = [], action) {
  switch (action.type) {
    case RECEIVE_ERRORS:
      return action.errors.slice();
    case CLEAR_ERRORS:
      return [];
    default:
      return state;
  }
}
