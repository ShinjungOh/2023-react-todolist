import React from 'react';
import styled from 'styled-components';

import { TodoItem } from './index';

const TodoList = () => (
  <Container>
    <Title>📌 할 일 목록</Title>
    <SignOutButton>로그아웃</SignOutButton>
    <TodoContainer>
      <TodoItem />
    </TodoContainer>
  </Container>
);

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