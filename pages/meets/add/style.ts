import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.125rem 0;
  form {
    & > button {
      height: 2.5625rem;
      width: 100%;
      border-radius: 0.3125rem;
      border: none;
      cursor: pointer;
      padding: 0.75rem, 0.625rem, 0.75rem, 0.625rem;
      background-color: #007aff;
      color: #ffffff;
    }
    & > button:disabled {
      height: 2.5625rem;
      width: 100%;
      border-radius: 0.3125rem;
      border: none;
      padding: 0.75rem, 0.625rem, 0.75rem, 0.625rem;
      background-color: #e5e5ea;
      color: #ffffff;
    }

    & > div {
      display: flex;
      flex-direction: column;
      margin-bottom: 18px;
      p {
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 139.34%;
        /* identical to box height, or 20px */
        letter-spacing: -0.01em;
        color: #000000;
        margin-bottom: 0.5rem;
      }
      input {
        padding: 12px 10px;
        gap: 16px;

        background: #ffffff;
        border: 1px solid #d1d1d6;
        border-radius: 5px;

        font-style: normal;
        font-weight: 400;
        font-size: 0.875rem;
        line-height: 1.063rem;
        /* identical to box height */
      }
      select {
        padding: 0.75rem 0.625rem;
        background: #ffffff;
        border: 1px solid #d1d1d6;
        border-radius: 5px;
        font-weight: 400;
        font-size: 0.875rem;
        line-height: 1.063rem;
        outline: none;
      }
    }

    .textArea {
      padding: 0.75rem 0.625rem;
      resize: none;
      background: #ffffff;
      border: 1px solid #d1d1d6;
      border-radius: 5px;
      font-weight: 400;
      outline: none;
    }
  }
`;

export const ImageLabel = styled.div`
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  margin-bottom: 0;

  .imgBox {
    display: flex;

    img {
      width: 8rem;
      height: 8rem;
      background-color: transparent;
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
  }
`;
