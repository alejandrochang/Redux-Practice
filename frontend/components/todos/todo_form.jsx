import React from 'react';
import { uniqueId } from '../../util/util';


class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const title = form.querySelector('.title-input');
    const body = form.querySelector('.body-input');
    this.props.createTodo(
      { id: uniqueId(), title: title.value, body: body.value, done: false }
    ).then(() => {
      title.value = '';
      body.value = '';
      this.props.clearErrors();
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <ul>
          {this.props.errors.map((err) => <li>{err}</li>)}
        </ul>
        <label>Title:<br />
          <input className="title-input" type="text" />
        </label><br /><br />
        <label>Task: <br />
          <textarea className="body-input"></textarea>
        </label><br />
        <input type="submit" />
      </form>
    );
  }
}

export default TodoForm;
