import React, {
  ChangeEvent, FormEvent, useEffect, useState,
} from 'react';
import { useNavigate } from 'react-router';

import { TodoCreate, TodoList } from '../components/todo';
import { TodoProps } from '../../lib/types/todoItemProps';
import {
  createTodo, deleteTodo, getTodos, updateTodo,
} from '../../lib/apis/todoItemApi';

const Todo = () => {
  const navigate = useNavigate();
  const [todos, setTodos] = useState<TodoProps[]>([]);
  const [createTodoItem, setCreateTodoItem] = useState('');

  const onChangeTodoInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setCreateTodoItem(value);
  };

  const onSubmitTodo = async (e: FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      const response = await createTodo(createTodoItem);
      // const arr = todos;
      // arr.push(response.data);
      // setTodos(arr);
      console.log(response);
      setTodos([...todos, response]);
      setCreateTodoItem('');
    } catch (e) {
      alert('에러 발생');
      console.log(e);
    }
  };

  const onUpdateTodo = async (id: number) => {
    try {
      const response = await updateTodo(id);
    } catch (e) {
      alert('에러 발생');
      console.log(e);
    }
  };

  const onDeleteTodo = async (id: number) => {
    try {
      await deleteTodo(id);
    } catch (e) {
      alert('에러 발생');
      console.log(e);
    }
  };

  const getTodosRender = async () => {
    try {
      const response = await getTodos();
      setTodos(response);
    } catch (e) {
      alert('에러 발생');
      setTodos([]);
      console.log(e);
    }
  };

  const hasAccessToken = () => {
    if (!(localStorage.getItem('ACCESS_TOKEN'))) {
      navigate('/');
    }
  };

  useEffect(() => {
    getTodosRender();
    hasAccessToken();
  }, []);

  return (
    <>
      <TodoList todos={todos} onUpdate={onUpdateTodo} onDelete={onDeleteTodo} />
      <TodoCreate value={createTodoItem} onChange={onChangeTodoInput} onSubmit={onSubmitTodo} />
    </>
  );
};

export default Todo;
