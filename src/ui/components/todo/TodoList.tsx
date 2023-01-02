import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router';

import { TodoItem } from './index';
import { TodoProps } from '../../../lib/types/todoItemProps';

interface Props {
  todos: TodoProps[];
  onUpdate: (id: number) => void;
  onDelete: (id: number) => void;
}

const TodoList = ({
  todos,
  onUpdate,
  onDelete,
}: Props) => {
  const navigate = useNavigate();

  console.log(todos);

  const onClickSignOut = () => {
    // eslint-disable-next-line no-restricted-globals
    const response = confirm('로그아웃 하시겠습니까?');
    if (response) {
      localStorage.removeItem('ACCESS_TOKEN');
      navigate('/', { replace: true });
    }
  };

  return (
    <Container>
      <Title>📌 할 일 목록</Title>
      <SignOutButton onClick={onClickSignOut}>로그아웃</SignOutButton>
      <TodoContainer>
        {
          todos && (
            todos.map((todo: any) => (
              <TodoItem
                {...todos}
                key={todo.id}
                id={todo.id}
                text={todo.todo}
                isCompleted={todo.isCompleted}
                onUpdate={onUpdate}
                onDelete={onDelete}
              />))
          )
        }
      </TodoContainer>
    </Container>
  );
};

export default TodoList;

const Container = styled.div`
  width: 100%;
  height: 80%;
  padding: 40px 20px 40px 20px;
`;

const Title = styled.h2`
  margin: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-weight: 600;
`;

const SignOutButton = styled.button`
  width: 70px;
  height: 30px;
  background-color: #3a68f9;
  color: #ffffff;
  border: none;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  position: absolute;
  top: 2%;
  right: 4%;
`;

const TodoContainer = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 35px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  flex: 1 1;
  overflow-y: auto;
`;
