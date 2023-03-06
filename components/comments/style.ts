import styled from 'styled-components';

export const CommentBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0;
`;

export const CountBox = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  left: 0rem;
  top: 114.8125rem;
  border-radius: 0rem;
  padding: 0.5rem 0;
  span {
    font-size: 1rem;
    font-weight: 600;
    line-height: 1.25rem;
    letter-spacing: 0rem;
    margin-right: 1rem;
  }
`;

export const Divider = styled.div`
  height: 1px;
  background-color: #ececec;
`;

export const WriteComment = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 3.125rem;
  width: 100%;
  position: relative;
  div {
    display: flex;
    position: relative;
    align-items: center;
    flex-grow: 1;
    justify-content: space-between;
    background-color: #f2f2f7;
    height: 2.125rem;
    border-radius: 2rem;
    padding: 0.625rem;
    padding-right: 1rem;
  }
  img {
    height: 2.125rem;
    width: 2rem;
    border-radius: 1rem;
    margin-right: 0.5rem;
  }
  input {
    flex: 1;
    background-color: #f2f2f7;
    border: none;
    border-radius: 1rem;
    height: 2.125rem;
    outline: none;
    padding-left: 0.625rem;
    font-size: 0.75rem;
    font-weight: 300;
    width: 100%;
  }
  button {
    position: absolute;
    right: 1rem;
    border-radius: 1rem;
    border: none;
    font-size: 0.75rem;
    font-weight: 400;
  }
`;

export const NoDataDiv = styled.div`
  padding: 1rem 0;
  display: flex;
  justify-content: center;
  div {
    justify-content: center;
    text-align: center;
    color: #8e8e93;
  }
  p {
    margin: 0.3rem 0;
    font-style: normal;
    font-weight: 400;
    font-size: 1.063rem;
    line-height: 1.5rem;
  }
  svg {
    color: #d9d9d9;
    font-size: 3rem;
  }
`;
