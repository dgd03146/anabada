import styled from 'styled-components';

export const Container = styled.div`
  h2 {
    font-style: normal;
    font-weight: 600;
    font-size: 0.938rem;
    line-height: 1.125rem;
    padding: 10px 0;
    gap: 4px;
  }
  div.meetInfo {
    display: flex;
    flex-direction: column;
    div {
      display: flex;
      align-items: center;
      img {
        width: 1rem;
        margin-right: 0.375rem;
      }
    }
  }
  div {
    display: flex;
    margin-bottom: 0.5rem;
  }
  svg {
    margin-right: 0.375rem;
  }
  p {
    font-weight: 500;
    font-size: 0.875rem;
    line-height: 1.063rem;
    margin-right: 0.375rem;
  }
`;
