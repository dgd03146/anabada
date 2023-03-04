import styled, { css } from 'styled-components';

export const PostForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const PostBtnDiv = styled.div`
  button {
    height: 2.5625rem;
    width: 100%;
    border-radius: 0.3125rem;
    border: none;
    cursor: pointer;
    padding: 0.75rem, 0.625rem, 0.75rem, 0.625rem;
    background-color: #007aff;
    color: #ffffff;
  }

  button:disabled {
    height: 2.5625rem;
    width: 100%;
    border-radius: 0.3125rem;
    border: none;
    padding: 0.75rem, 0.625rem, 0.75rem, 0.625rem;
    background-color: #e5e5ea;
    color: #ffffff;
  }
`;

export const Container = styled.div`
  flex-direction: column;
  display: flex;
  font-size: 0.875rem;
  margin-top: 1.125rem;
  font-weight: 500;
  input {
    padding: 0.72rem 0.625rem;
    border-radius: 0.3125rem;
    border: 0.0625rem solid #d1d1d6;
    width: 100%;
  }
  select {
    padding: 0.75rem 0.625rem;
    text-align: center;
    border-radius: 0.3125rem;
    border: 0.0625rem solid #d1d1d6;
  }
  .warningtext {
    color: #ff3b30;
    font-weight: 400;
    height: 1.25rem;
    width: 100%;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }
  label {
    margin-bottom: 0.5rem;
  }
`;

export const ImageLabel = styled.div`
  display: flex;
  border-radius: 1rem;
  cursor: pointer;

  img {
    width: 8rem;
    height: 8rem;
    background-color: #d9d9d9;
    border-radius: 0.5rem;
    border: none;
  }
  .noneImg {
    width: 8rem;
    height: 8rem;
    background-color: #d9d9d9;
    border-radius: 0.5rem;
    border: 0.0625rem solid #d9d9d9;
  }

  .buttonDiv {
    display: flex;
    flex-direction: column;
    margin-left: 0.5rem;
    width: 100%;
    input {
      width: 100%;
    }
    input::-webkit-file-upload-button {
      display: none;
    }
    .uploadBtn {
      background-color: #eff7ff;
      margin-top: 0.75rem;
      height: 2rem;
      width: 4.25rem;
      border-radius: 0.25rem;
      border: none;
      text-align: center;
      padding-top: 0.5rem;
    }
  }
`;

export const SelectAmenity = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  div {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem;
  }
`;

export type ButtonProps = {
  active: boolean;
  check: boolean;
};

export const AmenityButton = styled.button<ButtonProps>`
  align-items: center;
  padding: 0.625rem 0.875rem;
  border-radius: 2.875rem;
  border: 0.0625rem solid #000000;

  font-size: 0.875rem;
  font-weight: 600;
  ${({ active }) =>
    active &&
    css`
      background-color: #007aff;
      color: white;
      border: none;
    `}
  &:hover {
    color: ${(props) => (props.check ? 'white' : 'black')};
    background-color: ${(props) => (props.check ? '#007AFF' : 'transparent')};
    border: ${(props) => (props.check ? 'none' : '0.0625rem solid #000000')};
  }
`;

export const Toastdiv = styled.div`
  margin-top: 1.125rem;
  margin-bottom: 1.875rem;
  label {
    font-size: 0.875rem;
    font-weight: 500;
  }
`;
