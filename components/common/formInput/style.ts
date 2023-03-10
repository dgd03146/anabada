import styled from 'styled-components';
import { InputProps } from '.';

export const FormInputContainer = styled.input<InputProps>`
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
