export const fetchTodosRequest = () => {
  return $.ajax({
    url: '/api/todos',
    method: 'GET'
  });
};

export const createTodoRequest = (todo) => {
  return $.ajax({
    url: '/api/todos',
    method: 'POST',
    data: {todo}
  });
};
