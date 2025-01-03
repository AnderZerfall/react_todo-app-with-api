import { Todo } from '../types/Todo';
import { client } from '../utils/fetchClient';

export const USER_ID = 2172;

export const getTodos = () => {
  return client.get<Todo[]>(`/todos?userId=${USER_ID}`);
};

export const createTodo = ({ title, userId, completed }: Omit<Todo, 'id'>) => {
  return client.post<Todo>(`/todos`, { title, userId, completed });
};

export const deleteTodo = (todoId: number) => {
  return client.delete(`/todos/${todoId}`);
};

export const updateTodos = (todo: Todo) => {
  const { id, ...todoBody } = todo;

  return client.patch(`/todos/${id}`, todoBody);
};

// Add more methods here
