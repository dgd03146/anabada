import {
  FieldError,
  FieldValues,
  Path,
  RegisterOptions,
  UseFormRegister
} from 'react-hook-form';
import styled from 'styled-components';

export const FormWrapper = styled.div`
  margin-top: 8.375rem;
`;
export const FormDiv = styled.div`
  margin-top: 2.1875rem;
  padding: 0 2.625rem;
  @media screen and (min-width: 1024px) {
    width: 23rem;
    margin: 0 auto;
    margin-top: 1rem;
  }
  .login__wrapper-form {
    display: flex;
    flex-direction: column;
  }
`;

export const FormBtn = styled.button`
  width: 100%;
  height: 2.5625rem;
  margin: 0 auto;
  border-radius: 0.3125rem;
  margin-top: 1.6875rem;
  margin-bottom: 1rem;
  border: none;
  background: #007aff;
  color: white;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  &:active {
    background-color: #026add;
  }
`;

export type TInputProps = {
  name: Path<FieldValues>;
  rules?: RegisterOptions;
  errors?: FieldError;
  register?: UseFormRegister<FieldValues>;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const FormInput = styled.input<TInputProps>`
  margin-bottom: 0.5rem;
  background: #ffffff;
  border: 1px solid #d1d1d6;
  align-items: flex-start;
  padding: 12px 10px;
  border-radius: 0.3125rem;
  height: 2.5625rem;
  &:hover {
    background-color: #f2f2f4;
  }
  &:focus-visible {
    outline: 0.01rem solid #007aff;
  }
  outline: ${(props) => (props.errors ? '0.01rem solid #FF3B30' : 'inherit')};
`;
