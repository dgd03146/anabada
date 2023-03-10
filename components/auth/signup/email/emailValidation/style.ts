import styled from 'styled-components';

type TEmailProps = {
  emailState: boolean;
};

export const EmailValidationContainer = styled.div<TEmailProps>`
  .login__wrapper-verification {
    margin-bottom: 1.125rem;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0.3125rem;
    width: 100%;
    height: 2.5625rem;
    font-size: 1rem;
    font-weight: 600;
  }
  .login__wrapper-email__verification {
    background-color: ${(props) => (props.emailState ? '#E5E5EA' : '#E3F0FF')};
    pointer-events: ${(props) => (props.emailState ? 'none' : 'auto')};
    color: ${(props) => (props.emailState ? '#AEAEB2' : '#007aff')};
  }
`;
