import styled from 'styled-components';

export const Container = styled.div`
  /* border-left: 1px solid #ececee;
  border-right: 1px solid #ececee;
  border-bottom: 1px solid #ececee; */
  @media screen and (min-width: 1024px) {
    margin: 0 auto;
    width: 100%;
  }
  .postTopInfo {
    padding: 1rem 0;
    .title {
      font-style: normal;
      font-weight: 600;
      font-size: 17px;
      line-height: 24px;
      color: #000000;
      margin-bottom: 0.875rem;
    }
  }

  .postUserInfoContainer {
    position: relative;
    display: flex;

    align-items: center;
    justify-content: space-between;
    .moreBtn {
      display: flex;
      padding: 0;
    }
    .chatBtn {
      display: flex;
      align-items: center;
      padding: 0;
      svg {
        color: #007aff;
      }
    }
    svg {
      font-size: 1.3rem;
    }
  }

  .postUserInfo {
    display: flex;

    align-items: center;
    p {
      font-style: normal;
      font-weight: 300;
      font-size: 0.8125rem;
      margin: 0 0.33rem;
    }
    img {
      width: 1.5rem;
      height: 1.5rem;
      margin-right: 0.33rem;
      border-radius: 50%;
      border: 1px solid #ececee;
    }
    .nickname {
      font-style: normal;
      font-weight: 600;
      font-size: 0.938rem;
      line-height: 1.125rem;
      /* identical to box height */
      margin-right: 0.3125rem;
      margin-left: 0;
      color: #000000;
    }
  }
`;

export const ImageWrapper = styled.div`
  /* display: flex;
  justify-content: center;
  width: 100%; */
  /* img {
    min-width: 100px;
    max-width: 800px;
    object-fit: cover;
  } */
  img {
    width: 100%;
    height: 100%;
    position: relative !important;
    object-fit: cover;
  }
`;

export const AddressContainer = styled.div`
  padding: 0.938rem 0;
  display: flex;
  align-items: center;
  p {
    margin-left: 0.5rem;
    font-style: normal;
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 1.063rem;
    display: flex;
    align-items: center;

    color: #8e8e93;
  }
  p.area {
    color: black;
    font-weight: 600;
  }
`;

export const PostDescription = styled.pre`
  padding: 1.1625rem 0;
  font-size: 0.875rem;
  white-space: -moz-pre-wrap;
  white-space: -pre-wrap;
  white-space: -o-pre-wrap;
  white-space: pre-wrap;
  word-wrap: break-word;
`;
