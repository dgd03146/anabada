import styled from 'styled-components';

interface SearchFormProps {
  autoComplete: string;
}

export const SearchForm = styled.div<SearchFormProps>`
  z-index: 999;
  top: 130px;
  width: 28rem;
  position: fixed;
  margin: 0 auto;
  left: 0;
  right: 0;
  @media screen and (max-width: 700px) {
    width: 20rem;
  }
`;

export const SearchWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  width: 100%;
  /* height: 2.5rem; */
  margin: 0 auto;
  background-color: white;
  border-radius: 14px;

  font-size: 1.5rem;
  /* padding: 0 0.5rem; */
  @media screen and (max-width: 700px) {
    /* height: 2.5rem; */
  }

  button {
    background-color: #3797ff;
    color: white;
    padding: 0.7rem 0.7rem;
    border-radius: 0 14px 14px 0;
    svg {
      font-size: 1.5rem;
    }
    &:active {
      background-color: #7cbbff;
    }
  }

  input {
    border-radius: 14px;
    height: 100%;
    flex: 1;
    /* border-radius: 10px; */
    padding: 0.7rem 1rem;
    margin: 0 auto;
    font-size: 1.1rem;
    &:focus {
      outline: none;
    }
  }
`;

export const SearchResultWrapper = styled.ul`
  margin: 0;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 14px;
`;

export const SearchResultLi = styled.li`
  /* height: 3.375; */
  background-color: rgba(255, 255, 255, 0.6);
  padding: 1.25rem 0.8rem;
  margin-bottom: 1px;
  @media screen and (max-width: 700px) {
    height: 2.7rem;
    padding: 0;
    display: flex;
    align-items: center;
    padding-left: 1.25rem;
  }

  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.5) 0px 0.3px;

  transition: all 0.3s ease;

  font-size: 1rem;
  font-weight: 500;

  cursor: pointer;

  &:hover {
    background-color: #edf3fd;

    box-shadow: rgba(0, 0, 0, 0.5) 0px 0.6px;
  }
`;
