import React from 'react';
import styled from 'styled-components';

import TextField from '../components/common/TextField';
import NavBar from '../components/common/NavBar';

const SignIn = () => (
  <Container>
    <NavBar />
    <Title>로그인</Title>
    <TextField label="이메일" id="email" name="email" placeholder="이메일을 입력하세요." />
    <TextField label="비밀번호" id="password" name="password" placeholder="비밀번호를 입력하세요." />
    <Button>로그인하기</Button>
  </Container>
);

export default SignIn;

const Title = styled.h2`
    margin-top: 30px;
    margin-bottom: 30px;
`;

const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`;

const Button = styled.button`
    width: 275px;
    height: 50px;
    margin-top: 25px;
    font-size: 20px;
    font-weight: 500;
    background-color: #3a68f9;
    border-radius: 32px;
    color: #ffffff;
    border: none;
    cursor: pointer;
`;
