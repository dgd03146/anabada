import styled from 'styled-components';

export const BtnDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1.1fr;
  column-gap: 0.5rem;
  margin: 0.625rem auto;
  button {
    border-radius: 2.875rem;
    color: #007aff;
    font-size: 0.875rem;
    font-weight: 600;
    border: 0.0625rem solid #007aff;
    padding: 0.725rem 1.708125rem;
  }
  .btn.active {
    color: white;
    background-color: #007aff;
  }
`;

export const MeetAllContainer = styled.div`
  padding: 0.625rem 0;
`;
