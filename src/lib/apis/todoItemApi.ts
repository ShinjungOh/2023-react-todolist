import { client } from './client';

export const createTodo = async (todo: string) => {
  const url = '/todos';
  const data = {
    todo,
  };
  const response = await client.post(url, data);
  return response.data;
};

export const getTodos = async () => {
  const url = '/todos';
  const response = await client.get(url);
  return response.data;
};

export const updateTodo = async (
  id?: number,
  todo?: string,
  isCompleted?: boolean,
) => {
  const url = `/todos/:${id}`;
  const data = {
    todo,
    isCompleted,
  };
  const response = await client.put(url, data);
  return response;
};

export const deleteTodo = async (id: number) => {
  const url = `/todos/:${id}`;
  const response = await client.delete(url);
  return response;
};
