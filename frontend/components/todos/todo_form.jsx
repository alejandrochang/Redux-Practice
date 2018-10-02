import React from 'react';
import { uniqueId } from '../../util';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const title = form.querySelector('.title-input').value;
    const body = form.querySelector('.body-input').value;
    this.props.receiveTodo({ id: uniqueId(), title, body, done: false });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Title
          <input className="title-input" type="text" />
        </label><br />
        <label>
          <textarea className="body-input"></textarea>
        </label><br />
        <input type="submit" />
      </form>
    );
  }
}

export default TodoForm;
