import styled from 'styled-components';

export const PostInfoBox = styled.div`
  display: inline-block;

  border-radius: 0.8125rem;
  margin-bottom: 1.25rem;
  box-shadow: rgb(0 0 0 / 15%) 0px 2px 4px 0px;
  display: grid;

  /* place-items: center; */
  transition: 0.5s;
  &:hover {
    background: #f7faff;
  }
`;

export const ImageWrapper = styled.div`
  img {
    border-radius: 0.8125rem;
    width: 100%;
    height: 100%;
    position: relative !important;
    object-fit: cover;
  }
`;

export const PostInfo = styled.div`
  display: flex;
  flex-direction: column;

  padding: 0 0.5rem;
  h2 {
    display: block;
    -webkit-line-clamp: 2; //원하는 라인수
    -webkit-box-orient: vertical;
    white-space: normal;
    overflow: hidden;
    word-break: break-all;
    text-overflow: ellipsis;

    font-size: 0.9rem;
    font-weight: 600;
    text-align: left;
  }
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  img {
    height: 1.375rem;
    width: 1.375rem;
    border-radius: 50%;
    margin-right: 0.375rem;
    border: 1px solid #ececec;
  }
  h3 {
    font-size: 0.75rem;
    font-weight: 300;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
