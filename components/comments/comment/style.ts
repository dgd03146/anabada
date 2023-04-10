import styled from 'styled-components';

export const UpdateContent = styled.input`
  background-color: #f2f2f7;
  border: none;
  border-radius: 1rem;
  height: 2.125rem;
  outline: none;
  padding-left: 0.625rem;
  font-size: 0.75rem;
  font-weight: 300;
`;

export const ViewComments = styled.div`
  display: flex;
  position: relative;
  height: auto;
  width: 100%;
  border-radius: none;
  padding: 0rem, 1rem, 0rem, 1rem;
  border-bottom: 0.05rem solid #e5e5ea;
  padding-top: 0.625rem;
  padding-bottom: 0.625rem;

  img {
    height: 2rem;
    width: 2rem;
    border-radius: 1rem;
    margin-right: 0.5rem;
  }

  .chatBtn {
    svg {
      color: #007aff;
      font-size: 1.1rem;
    }
  }
`;

export const BtnDiv = styled.div`
  display: flex;
  position: absolute;
  right: 0;
  button {
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 0.75rem;
    font-weight: 400;
    height: 2.125rem;
    border: 0.0625rem solid #e5e5ea;
    border-radius: 1.9375rem;
  }
`;

export const CommentContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

export const CommentNickname = styled.span`
  font-size: 0.75rem;
  line-height: 1.1875rem;
  color: black;
`;

export const CommentDate = styled.span`
  font-size: 0.75rem;
  line-height: 1.1875rem;
  font-weight: 300;
  color: #aeaeb2;
`;

export const CommentContent = styled.span`
  font-size: 0.875rem;
  line-height: 1.1875rem;
  color: black;
`;

export const SelectContainer = styled.div`
  position: absolute;
  z-index: 99;
  background: rgb(255, 255, 255);
  border: 1px solid rgb(230, 230, 230);
  box-shadow: rgb(0 0 0 / 15%) 0px 2px 4px 0px;
  border-radius: 4px;
  color: rgb(61, 61, 61);
  bottom: auto;
  top: 2.5rem;
  left: auto;
  right: 0;
  transform: none;
  font-weight: bold;
  box-sizing: border-box;
  .editBtn {
    border-bottom: 1px solid #ececec;
  }
  .deleteBtn {
    color: #f54e4e;
  }
  div {
    display: flex;
    align-items: center;

    font-weight: bold;
    color: gray;
    white-space: nowrap;
    cursor: pointer;
    padding: 0.5rem 1rem;
    font-size: 0.75rem;
    box-sizing: border-box;
    svg {
      margin-left: 0.5rem;
    }
  }
`;
