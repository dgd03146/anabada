import styled from 'styled-components';

type TNicknameProps = {
  nickname: boolean;
};

export const NicknameValidationContainer = styled.div<TNicknameProps>`
  .login__wrapper-nickname__verification {
    background-color: ${(props) => (props.nickname ? '#E5E5EA' : '#E3F0FF')};
    pointer-events: ${(props) => (props.nickname ? 'none' : 'auto')};
    color: ${(props) => (props.nickname ? '#AEAEB2' : '#007aff')};
  }
`;
