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
  const [updateTodoItem, setUpdateTodoItem] = useState('');

  const [isToggleOpen, setIsToggleOpen] = useState(false);

  const isToggleUpdate = (id: number) => {
    setIsToggleOpen((prev) => !prev);
  };

  const isCompletedTodo = async (id: number) => {
    const findTodo = todos.find((todo) => todo.id === id);
    if (findTodo) {
      const { data } = await updateTodo(findTodo.id, findTodo.todo, !findTodo.isCompleted);
      setTodos((prevTodo) => prevTodo.map((todo) => (todo.id === data.id ? data : todo)));
    }
  };

  console.log(todos);

  const onChangeTodoInput = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(createTodoItem);
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

  const onChangeTodoUpdateInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setUpdateTodoItem(value);
  };

  const onUpdateTodo = async (id: number, isCompleted: boolean, todo: string) => {
    try {
      const response = await updateTodo(id, todo, isCompleted);
      console.log(response);
      // await getTodosRender();
    } catch (e) {
      alert('에러 발생');
      console.log(e);
    }
  };

  const onDeleteTodo = async (id: number) => {
    try {
      const response = await deleteTodo(id);
      alert('삭제되었습니다.');
      console.log(response);
      setTodos(((prev) => prev.filter((todo) => todo.id !== id)));
      // await getTodosRender();
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
      <TodoList
        todos={todos}
        onUpdate={onUpdateTodo}
        onDelete={onDeleteTodo}
        onToggleCompleted={isCompletedTodo}
        onChange={onChangeTodoUpdateInput}
        value={updateTodoItem}
        isToggleOpen={isToggleOpen}
        isToggleUpdate={isToggleUpdate}
      />
      <TodoCreate
        value={createTodoItem}
        onChange={onChangeTodoInput}
        onSubmit={onSubmitTodo}
      />
    </>
  );
};

export default Todo;
