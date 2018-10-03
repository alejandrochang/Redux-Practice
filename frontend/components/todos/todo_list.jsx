import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';

class TodoList extends React.Component {

  componentDidMount() {
    this.props.fetchTodos();
  }

  render()  {
    const {todos, createTodo, clearErrors, errors} = this.props;

    return (
      <div>
        <h3>The best list of all time...</h3>
        <ul>
          {
            todos.map((todo) => (
              <TodoListItem key={todo.id} todo={todo} />
            ))
          }
        </ul>
        <h2>Submit a Task: </h2>
        <TodoForm createTodo={createTodo} clearErrors={clearErrors} errors={errors}/>
      </div>
    );
  }
}

export default TodoList;
