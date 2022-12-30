import React from 'react';
import styled from 'styled-components';
import { FaCheck, FaPen, FaTrash } from 'react-icons/fa';

export interface TodoProps {
  id?: string;
  todo?: string;
  isCompleted?: boolean;
}

const TodoItem = ({
  id,
  todo,
  isCompleted,
}: TodoProps) => (
  <Container>
    <CheckBox>
      {isCompleted && (
      <FaCheck />
      )}
    </CheckBox>
    <TodoText>할 일을 입력하세요.</TodoText>
    <ButtonContainer>
      <FaPen size="20" color="#b6b6b6" cursor="pointer" />
      <FaTrash size="20" color="#313131" cursor="pointer" />
    </ButtonContainer>
  </Container>
);

export default TodoItem;

const Container = styled.div`
  width: 95%;
  height: 50px;
  padding: 0 10px 0 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
`;

const CheckBox = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid #696969;
  font-size: 25px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: #313131;
  cursor: pointer;
`;

const TodoText = styled.div`
  flex: 1;
  padding-left: 11px;
  font-size: 18px;
  color: #2a2a2a;
`;

const ButtonContainer = styled.div`
  width: 55px;
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
