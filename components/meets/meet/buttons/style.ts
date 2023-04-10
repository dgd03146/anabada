import styled from 'styled-components';

export const ButtonContainer = styled.div`
  padding: 1rem 0;
  display: flex;
  gap: 0.5rem;
  button {
    display: flex;
    flex-direction: row;

    justify-content: center;
    align-items: center;
    padding: 0.375rem 0.625rem;

    background-color: #eff7ff;
    border-radius: 0.25rem;

    /* Inside auto layout */

    flex: none;
    order: 0;
    flex-grow: 1;

    font-style: normal;
    font-weight: 500;
    font-size: 0.813rem;
    line-height: 157.34%;
  }
  .likeBtn {
    svg {
      margin-right: 5px;
    }
  }
`;
