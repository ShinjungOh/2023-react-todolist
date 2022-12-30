import React from 'react';
import styled from 'styled-components';

export interface TextFieldProps {
  label?: string;
  id?: string;
  name?: string;
  placeholder: string;
  onChange?: (e: any) => void;
  error?: boolean;
  errorMessage?: string;

  [K: string]: any;
}

const TextField = ({
  id,
  name,
  label,
  placeholder,
  onChange,
  errorMessage,
}: TextFieldProps) => (
  <TextFieldContainer>
    <Label htmlFor={id}>{label}</Label>
    <Input type="text" id={id} name={name} placeholder={placeholder} onChange={onChange} />
    {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
  </TextFieldContainer>
);

export default TextField;

const TextFieldContainer = styled.div`
  width: 100%;
  height: 90px;
  display: flex;
  justify-content: center;
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
  height: 80px;
  padding: 0 8px 0 8px;
  border-radius: 5px;
  border: 1px solid #8a8a8a;
  cursor: pointer;
`;

const ErrorMessage = styled.div`
  margin-top: 3px;
  align-items: start;
  color: #dc4545;
  font-size: 14px;
`;
