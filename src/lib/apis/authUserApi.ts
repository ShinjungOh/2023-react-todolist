import { client } from './client';

interface AuthUserProps {
  email: string;
  password: string;
}

export const signUpApi = async ({
  email,
  password,
}: AuthUserProps) => {
  const url = '/auth/signup';
  const data = {
    email,
    password,
  };
  const response = await client.post(url, data);
  return response;
};

export const signInApi = async ({
  email,
  password,
}: AuthUserProps) => {
  const url = '/auth/signin';
  const data = {
    email,
    password,
  };
  const response = await client.post(url, data);
  return response;
};
