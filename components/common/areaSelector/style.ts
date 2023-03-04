import styled from 'styled-components';

export const CategoryContainer = styled.div`
  display: flex;

  flex-direction: row;
  align-items: center;
  padding: 0.875rem 0;
  select {
    padding: 0.625rem;
    background: #ffffff;
    border: 1px solid #c7c7cc;
    border-radius: 4px;
    height: 40px;
  }

  input {
    font-weight: 400;
    font-size: 0.875rem;
    margin-left: 0.75rem;
    width: 100%;
    padding: 0.625rem 1rem;
    background-color: #f2f2f7;
    border-radius: 0.75rem;
  }
`;
