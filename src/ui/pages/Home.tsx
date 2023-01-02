import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router';

import { Path } from '../../lib/const/path';

const Home = () => {
  const navigate = useNavigate();

  const goToSignInPageButton = () => {
    navigate(Path.SIGNIN);
  };

  const goToSignUpPageButton = () => {
    navigate(Path.SIGNUP);
  };

  const hasAccessToken = () => {
    if ((localStorage.getItem('ACCESS_TOKEN'))) {
      navigate('/todo');
    }
  };

  useEffect(() => {
    hasAccessToken();
  }, []);

  return (
    <Container>
      <Title>투두리스트</Title>
      <Button onClick={goToSignInPageButton}>로그인</Button>
      <Button onClick={goToSignUpPageButton}>회원가입</Button>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  position: relative;
  top: 17%;
`;

const Title = styled.h2`
  margin-bottom: 60px;
`;

const Button = styled.button`
  width: 275px;
  height: 50px;
  font-size: 20px;
  font-weight: 500;
  background-color: #3a68f9;
  border-radius: 32px;
  color: #ffffff;
  border: none;
  cursor: pointer;

  & + & {
    margin-top: 10px;
  }
`;
