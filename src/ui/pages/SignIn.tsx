import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router';

import TextField from '../components/common/TextField';
import NavBar from '../components/common/NavBar';
// import { signInApi } from '../../lib/apis/authUserApi';

const SignIn = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const goBackButton = () => {
    navigate(-1);
  };

  const onChangeSignIn = (e: any) => {
    const { value } = e.target;
    setUser(value);
  };

  const accessSignIn = () => {
    if (localStorage.getItem('ACCESS_TOKEN')) {
      alert('로그인에 성공했습니다.');
      navigate('/todo');
    } else {
      alert('로그인에 실패했습니다.');
      navigate('/');
    }
  };

  return (
    <Container>
      <NavBar goBackButton={goBackButton} />
      <Title>로그인</Title>
      <TextField label="이메일" id="email" name="email" placeholder="이메일을 입력하세요." onChange={onChangeSignIn} />
      <TextField label="비밀번호" id="password" name="password" placeholder="비밀번호를 입력하세요." onChange={onChangeSignIn} />
      <Button onClick={accessSignIn}>로그인하기</Button>
    </Container>
  );
};

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
