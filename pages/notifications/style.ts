import styled from 'styled-components';

export const Container = styled.div`
  padding: 0rem 1rem;
  @media screen and (min-width: 1024px) {
    margin: 0 auto;
    width: 40vw;
  }
`;

export const NotificationWrapper = styled.div``;

export const NotificationContainer = styled.div`
  box-sizing: border-box;
  padding: 1rem 0;
`;

export const NotiAllDelete = styled.div`
  position: fixed;
  z-index: 300;
  bottom: 1.7rem;
  right: 2.3rem;

  cursor: pointer;
  width: 60px;
  height: 60px;

  color: white;
  background-color: #007aff;
  opacity: 0.9;
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;
  .material-symbols-outlined {
    font-weight: 500;
  }
`;
