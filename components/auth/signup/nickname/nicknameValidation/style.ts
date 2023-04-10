import styled from 'styled-components';

type TNicknameProps = {
  nickname: boolean;
};

export const NicknameValidationContainer = styled.div<TNicknameProps>`
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

  background-color: ${(props) => (props.nickname ? '#E5E5EA' : '#E3F0FF')};
  pointer-events: ${(props) => (props.nickname ? 'none' : 'auto')};
  color: ${(props) => (props.nickname ? '#AEAEB2' : '#007aff')};
`;
