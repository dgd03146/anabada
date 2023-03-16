import styled from 'styled-components';

export const MeetAllContainer = styled.div``;

export const MeetAddBtn = styled.div`
  position: fixed;
  bottom: 1.7rem;
  right: 2.3rem;
  z-index: 300;
  cursor: pointer;
  width: 60px;
  height: 60px;

  background-color: #007aff;
  border-radius: 50%;
  opacity: 0.9;

  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    font-size: 2rem;
    color: white;
    font-weight: 200;
  }
`;
