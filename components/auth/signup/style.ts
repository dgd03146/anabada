import styled from 'styled-components';
import { FormDiv, FormWrapper } from '../style';

export const SignupWrapper = styled(FormWrapper)`
  margin-top: 4.375rem;
  display: flex;
  justify-content: center;
`;

type TSignupProps = {
  emailState: boolean;
  nicknameState: boolean;
};

export const SignupForm = styled(FormDiv)<TSignupProps>`
  padding: 0;
  margin-top: 0.5rem;

  @media screen and (min-width: 1024px) {
    width: 23rem;
  }

  .login__wrapper__password {
    color: black;
    font-size: 0.75rem;
    margin-bottom: 0.5rem;
  }
`;

export const InputName = styled.div`
  font-weight: 500;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
`;

export const ErrorSpan = styled.span`
  font-weight: 400;
  font-size: 0.875rem;
  color: #ff3b30;
  margin-bottom: 0.5rem;
`;

export const PasswordBox = styled.div`
  position: relative;
  input {
    width: 100%;
  }
`;

export const PasswordEye = styled.div`
  position: absolute;
  right: 1rem;
  top: 20%;
  cursor: pointer;
`;
