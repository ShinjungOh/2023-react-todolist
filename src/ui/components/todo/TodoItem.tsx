import React, { ChangeEvent, useState } from 'react';
import styled from 'styled-components';
import {
  FaCheck, FaPen, FaRegTimesCircle, FaTrash,
} from 'react-icons/fa';

import { TodoProps } from '../../../lib/types/todoItemProps';

interface Props {
  onToggleCompleted?: any;
  onUpdate: (id: number, todo: string, isCompleted: boolean) => void;
  onDelete: (id: number) => void;
}

const TodoItem = ({
  id,
  isCompleted,
  todo,
  onToggleCompleted,
  onUpdate,
  onDelete,
}: TodoProps&Props) => {
  const [isToggleOpen, setIsToggleOpen] = useState(false);
  const [todoUpdateValue, setTodoUpdateValue] = useState('');

  const isToggleUpdate = (id: number) => {
    setIsToggleOpen((prev) => !prev);
    if (isToggleOpen) {
      setTodoUpdateValue('');
    } else {
      setTodoUpdateValue(todo);
    }
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setTodoUpdateValue(value);
  };

  const onClickUpdateTodo = (id: number, value: string, isCompleted: boolean) => {
    onUpdate(id, value, isCompleted);
    setIsToggleOpen(false);
  };

  return (
    <Container>
      { !isToggleOpen && (
        <>
          <CheckBox onClick={() => !onToggleCompleted(id)}>
            {isCompleted && (
              <FaCheck />
            )}
          </CheckBox>
          <TodoText>{todo}</TodoText>
          <ButtonContainer>
            <FaPen size="20" color="#b6b6b6" cursor="pointer" onClick={() => isToggleUpdate(id)} />
            <FaTrash size="20" color="#e5e5e5" cursor="pointer" onClick={() => onDelete(id)} />
          </ButtonContainer>
        </>)
      }
      {
        isToggleOpen && (
          <>
            <Input onChange={onChange} value={todoUpdateValue} autoFocus />
            <ButtonContainer>
              <FaCheck size="20" color="#696969" cursor="pointer" onClick={() => onClickUpdateTodo(id, todoUpdateValue, isCompleted)} />
              <FaRegTimesCircle size="20" color="#696969" cursor="pointer" onClick={() => isToggleUpdate(id)} />
            </ButtonContainer>
          </>
        )
      }
    </Container>
  );
};

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

const Input = styled.input`
  width: 220px;
  height: 35px;
  margin-right: 5px;
  padding: 5px 10px 5px 10px;
  border-radius: 8px;
  border: 1px solid #b6b6b6;
  outline: none;
  font-size: 17px;

  :focus {
    border: 1px solid #8a8a8a;
  }
`;
