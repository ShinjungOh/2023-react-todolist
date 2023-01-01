import React, {
  ChangeEvent, FormEvent, useState,
} from 'react';
import { useNavigate } from 'react-router';

import { TodoCreate, TodoList } from '../components/todo';

export interface TodoProps {
  id?: string;
  isCompleted?: boolean;
  value?: string;
}

const Todo = () => {
  const navigate = useNavigate();
  const [todos, setTodos] = useState<TodoProps[]>();
  const [createTodo, setCreateTodo] = useState('');

  const onChangeTodoInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setCreateTodo(value);
  };

  const onSubmitTodo = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // @ts-ignore
    setTodos(createTodo);
    setCreateTodo('');
  };

  const hasAccessToken = () => {
    if (!(localStorage.getItem('ACCESS_TOKEN'))) {
      navigate('/');
    }
  };

  hasAccessToken();

  return (
    <>
      <TodoList />
      <TodoCreate onChange={onChangeTodoInput} onSubmit={onSubmitTodo} value={createTodo} />
    </>
  );
};

export default Todo;
