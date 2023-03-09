import styled from 'styled-components';

type TNicknameProps = {
  nicknameState: boolean;
};

export const NicknameValidationContainer = styled.div<TNicknameProps>`
  .login__wrapper-nickname__verification {
    background-color: ${(props) =>
      props.nicknameState ? '#E5E5EA' : '#E3F0FF'};
    pointer-events: ${(props) => (props.nicknameState ? 'none' : 'auto')};
    color: ${(props) => (props.nicknameState ? '#AEAEB2' : '#007aff')};
  }
`;
