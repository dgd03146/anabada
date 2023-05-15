import styled from 'styled-components';

export const BtnDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 0.5rem;
  margin: 0.625rem auto;
  flex-wrap: wrap;
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

export const PostDiv = styled.div`
  margin-top: 0.5rem;

  // mansory ui
  .my-masonry-grid {
    display: -webkit-box; /* Not needed if autoprefixing */
    display: -ms-flexbox; /* Not needed if autoprefixing */
    display: flex;
    width: 100%;
  }
  .my-masonry-grid_column {
    /* padding-left: 10px; */
    padding: 0 5px;
    background-clip: padding-box;
  }

  /* Style your items */
  .my-masonry-grid_column > div {
    /* change div to reference your elements you put in <Masonry> */

    margin-bottom: 10px;
  }
`;

export const PostContainer = styled.div``;
