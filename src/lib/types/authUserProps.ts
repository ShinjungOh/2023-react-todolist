export interface UserProps {
  email: string;
  password: string;
  passwordCheck?: string;
}

export interface UserValidationProps {
  email: boolean;
  password: boolean;
  passwordCheck: boolean;
}
