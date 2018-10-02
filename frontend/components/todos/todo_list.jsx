import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';

const TodoList = ({todos, receiveTodo}) => (
  <div>
    <h1>Our List</h1>
    <ul>
      {
        todos.map((todo) => (
          <TodoListItem key={todo.id} todo={todo} />
        ))
      }
    </ul>
    <h1>Create Todo</h1>
    <TodoForm receiveTodo={receiveTodo} />
  </div>
);

export default TodoList;
