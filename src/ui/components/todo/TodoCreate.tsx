import React from 'react';
import styled from 'styled-components';

interface Props {
  onChange: (e: any) => void;
  onSubmit: (e: any) => void;
}

const TodoCreate = ({ onChange, onSubmit }: Props) => (
  <Container>
    <Input onChange={onChange} />
    <Button onClick={onSubmit}>등록</Button>
  </Container>
);

export default TodoCreate;

const Container = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Input = styled.input`
  width: 260px;
  height: 50px;
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

const Button = styled.button`
  width: 70px;
  height: 50px;
  margin: 0;
  border-radius: 8px;
  border: none;
  background-color: #3a68f9;
  color: #ffffff;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
`;
