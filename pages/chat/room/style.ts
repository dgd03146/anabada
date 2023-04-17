import styled from 'styled-components';

export const Container = styled.div`
  @media screen and (min-width: 1024px) {
    margin: 0 auto;
    width: 40vw;
  }

  div.chatContainer {
    &:hover {
      background: #f7faff;
    }
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    margin-top: 0.5rem;
    box-shadow: rgb(0 0 0 / 15%) 0px 2px 4px 0px;
  }

  img {
    border-radius: 50%;
    margin-right: 0.688rem;
  }
  .messageLength {
    padding: 3px 7px;
    gap: 10px;

    background: #ff3b30;
    border-radius: 3rem;

    font-style: normal;
    font-weight: 400;
    font-size: 0.75rem;
    line-height: 0.875rem;
    color: #ffffff;
  }
`;

export const LeftBox = styled.div`
  display: flex;
  .nickname {
    font-weight: 500;
    font-size: 0.938rem;
    line-height: 1.125rem;
    margin-bottom: 0.25rem;
  }
  .lastMessage {
    font-weight: 400;
    font-size: 0.938rem;
    line-height: 1.125rem;
    color: #8e8e93;

    display: -webkit-box;
    word-break: break-all;
    -webkit-line-clamp: 1; //원하는 라인수
    -webkit-box-orient: vertical;
    white-space: pre-wrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
