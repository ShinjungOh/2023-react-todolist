import React, {
  ChangeEvent, useEffect, useMemo, useState,
} from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router';

import TextField from '../components/common/TextField';
import NavBar from '../components/common/NavBar';
import { signUpApi } from '../../lib/apis/authUserApi';
import { UserProps, UserValidationProps } from '../../lib/types/authUserProps';

const SignUp = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<UserProps>({
    email: '',
    password: '',
    passwordCheck: '',
  });

  const [userValidation, setUserValidation] = useState<UserValidationProps>({
    email: false,
    password: false,
    passwordCheck: false,
  });

  const isErrorUserValidation = useMemo((() => !(userValidation.email && userValidation.password && userValidation.passwordCheck)), [userValidation.email, userValidation.password, userValidation.passwordCheck]);

  const goBackButton = () => {
    navigate(-1);
  };

  const onChangeSignUp = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setUser({
      ...user,
      [name]: value,
    });

    if (name === 'email') {
      const emailRegExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
      const emailRegExpCheck = emailRegExp.test(value);
      setUserValidation({
        ...userValidation,
        [name]: emailRegExpCheck,
      });
      return;
    }

    if (name === 'password') {
      const passwordRegExp = /^.{8,}$/;
      const passwordRegCheck = passwordRegExp.test(value);
      setUserValidation({
        ...userValidation,
        [name]: passwordRegCheck,
      });
      return;
    }

    if (name === 'passwordCheck') {
      setUserValidation({
        ...userValidation,
        [name]: value === user.password,
      });
    }
  };

  const onSubmitSignUp = async () => {
    try {
      const response = await signUpApi({
        email: user.email,
        password: user.password,
      });
      alert('회원가입에 성공했습니다.');
      localStorage.setItem('ACCESS_TOKEN', response.data.access_token);
      navigate('/todo');
    } catch (e) {
      alert('에러 발생');
    }
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
      <NavBar goBackButton={goBackButton} />
      <Title>회원가입</Title>
      <TextField
        label="이메일"
        id="email"
        name="email"
        type="email"
        placeholder="이메일을 입력하세요."
        errorMessage="이메일 형식이 올바르지 않습니다."
        value={user.email}
        onChange={onChangeSignUp}
        isError={!userValidation.email}
      />
      <TextField
        label="비밀번호"
        id="password"
        name="password"
        type="password"
        placeholder="비밀번호를 입력하세요."
        errorMessage="비밀번호 형식이 올바르지 않습니다."
        value={user.password}
        onChange={onChangeSignUp}
        isError={!userValidation.password}
      />
      <TextField
        label="비밀번호 확인"
        id="passwordCheck"
        name="passwordCheck"
        type="password"
        placeholder="비밀번호를 확인해 주세요"
        errorMessage="비밀번호가 동일하지 않습니다."
        value={user.passwordCheck}
        onChange={onChangeSignUp}
        isError={!userValidation.passwordCheck}
      />
      <Button onClick={onSubmitSignUp} disabled={isErrorUserValidation}>회원가입하기</Button>
    </Container>
  );
};

export default SignUp;

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

  :disabled {
    background-color: #d5d5d5;
  }
`;
