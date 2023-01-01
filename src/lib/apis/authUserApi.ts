import { client } from './client';
import { UserProps } from '../types/authUserProps';

export const signUpApi = async ({
  email,
  password,
}: UserProps) => {
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
}: UserProps) => {
  const url = '/auth/signin';
  const data = {
    email,
    password,
  };
  const response = await client.post(url, data);
  return response;
};
