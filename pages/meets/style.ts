import styled from 'styled-components';

export const MeetsContainer = styled.div`
  div.scrollTest {
    overflow-x: auto;

    &::-webkit-scrollbar {
      width: 0.5rem;
      height: 0.5rem;
      border-radius: 0.375rem;
      background-color: rgba(255, 255, 255, 3);
    }

    ::-webkit-scrollbar-track {
      background-color: #ececec;
      border-radius: 100px;
    }

    &::-webkit-scrollbar-thumb {
      background-image: linear-gradient(180deg, #d7e7ee 5%, #217af4 100%);
      box-shadow: inset 2px 2px 5px 0 rgba(#fff, 0.5);
      border-radius: 100px;
    }
  }
`;

export const CategoryContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0.875rem 0;
  gap: 0.875rem;
  select {
    padding: 0.625rem;
    gap: 0.188rem;
    background: #ffffff;
    border: 1px solid #c7c7cc;
    border-radius: 4px;
    flex: none;
    order: 0;
    flex-grow: 0;
    outline: none;
  }
  div {
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 0.625rem 0;
    gap: 0.625rem;

    background: #f2f2f7;
    border-radius: 42px;

    flex: none;
    order: 1;
    flex-grow: 1;
  }
  input {
    font-style: normal;
    font-weight: 400;
    font-size: 0.875;
    line-height: 1.125rem;
    /* identical to box height */

    flex: none;
    order: 0;
    flex-grow: 0;

    outline: none;
    border: none;
    background-color: transparent;
    color: #c7c7cc;
  }
`;

export const MeetsPostsContainer = styled.div`
  div.topBox {
    margin-top: 1.5625rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.625rem;
  }
  h2 {
    font-style: normal;
    font-weight: 600;
    font-size: 1.313rem;
    line-height: 143.84%;
    /* or 30px */
    margin: 0;
    color: #000000;
  }
`;

export const PostBtn = styled.div`
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
