import React, { ChangeEvent } from 'react';
import styled from 'styled-components';

export interface TextFieldProps {
  label?: string;
  id?: string;
  name?: string;
  type?: string;
  placeholder: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  isError?: boolean;
  errorMessage?: string;

  [K: string]: any;
}

const TextField = ({
  label,
  id,
  name,
  type,
  placeholder,
  value,
  onChange,
  isError,
  errorMessage,
}: TextFieldProps) => (
  <TextFieldContainer>
    <Label htmlFor={id}>{label}</Label>
    <Input type={type} id={id} name={name} placeholder={placeholder} value={value} onChange={onChange} />
    {isError && (
      <ErrorMessage>{errorMessage}</ErrorMessage>)
    }
  </TextFieldContainer>
);

export default TextField;

const TextFieldContainer = styled.div`
  width: 100%;
  height: 90px;
  display: flex;
  justify-content: start;
  flex-direction: column;
  align-items: center;

  & + & {
    margin-top: 20px;
  }
`;

const Label = styled.label`
  align-items: start;
`;

const Input = styled.input`
  width: 275px;
  height: 50px;
  padding: 0 8px 0 8px;
  border-radius: 5px;
  border: 1px solid #8a8a8a;
  outline: none;
  cursor: pointer;
`;

const ErrorMessage = styled.div`
  width: 275px;
  height: 16px;
  margin-top: 3px;
  align-items: start;
  color: #dc4545;
  font-size: 14px;
`;
