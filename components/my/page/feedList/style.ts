import styled from 'styled-components';

export const SelectDiv = styled.div`
  position: relative;
  margin-top: 1.5rem;
  h1 {
    font-size: 1.3125rem;
    font-weight: 600;
  }
`;

export const BtnDiv = styled.div`
  display: flex;
  column-gap: 0.5rem;
`;

export const Btn = styled.button`
  border: 0.0625rem solid #e5e5ea;
  border-radius: 0.625rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0.91625rem 1rem;
  svg {
    margin-bottom: 0.7656rem;
  }
  label {
    font-size: 1rem;
    font-weight: 600;
  }
`;

export const AllBtn = styled.div`
  position: absolute;
  border-radius: 1rem;
  right: 0.484375rem;
  cursor: pointer;
  top: 0;
`;
