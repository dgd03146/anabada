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

export const ImageBox = styled.div`
  display: flex;
  position: relative;

  div {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: transparent;
    bottom: 1.630625rem;
    right: 0.755625rem;
  }
  span {
    font-size: 0.75rem;
    font-weight: 600;
    color: #ff2d55;
  }

  p {
    font-size: 0.75rem;
    font-weight: 600;
    color: #ffffff;
  }

  img {
    display: flex;
    justify-content: center;
    align-items: center;
    object-fit: contain;
    border-radius: 0.8125rem;
    margin-bottom: 0.875rem;

    width: 100%;

    /* FIXME: 스켈레톤으로 바꿔야함 */
    min-height: 8rem;
  }
`;

export const PostInfo = styled.div`
  display: flex;
  flex-direction: column;

  padding: 0 0.5rem;
  h2 {
    display: block;

    display: -webkit-box;
    -webkit-line-clamp: 2; //원하는 라인수
    -webkit-box-orient: vertical;
    white-space: pre-wrap;
    overflow: hidden;
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
