import React from 'react';

const TodoListItem = ({todo}) => (
  <li>
    <h3>{todo.title}</h3>
    <p>{todo.body}</p>
    <p>done: {todo.done.toString()}</p>
  </li>
);

export default TodoListItem;
