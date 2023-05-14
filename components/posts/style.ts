import styled from 'styled-components';

export const MainDiv = styled.div`
  width: 100%;
`;

export const PostDiv = styled.div`
  margin-top: 0.5rem;
  cursor: pointer;
  // mansory ui
  .my-masonry-grid {
    display: -webkit-box; /* Not needed if autoprefixing */
    display: -ms-flexbox; /* Not needed if autoprefixing */
    display: flex;

    width: auto;
  }
  .my-masonry-grid_column {
    padding: 0 5px;
    background-clip: padding-box;
  }

  .my-masonry-grid_column > div {
    margin-bottom: 10px;
  }
`;

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

export const PostBtn = styled.div`
  position: fixed;
  bottom: 1.7rem;
  right: 2.3rem;
  z-index: 300;
  cursor: pointer;
  width: 60px;
  height: 60px;
  opacity: 0.9;

  background-color: #007aff;
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    font-size: 2rem;
    color: white;
    font-weight: 200;
  }
`;
