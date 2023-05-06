import styled from 'styled-components';

export const Box = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;

  .moreBtn {
    padding: 0;
  }
  .chatBtn {
    color: #007aff;
    font-size: 1.3rem;
  }
`;

export const TitleDiv = styled.div`
  margin-top: 0.75rem;
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 1rem;
  padding: 0;
`;

export const UserBox = styled.div`
  @media screen and (max-width: 430px) {
  }
  display: flex;
  align-items: center;

  img {
    height: 1.5rem;
    width: 1.5rem;
    border-radius: 50%;
    margin-right: 0.33rem;
    border: 1px solid #ececee;
  }
  span {
    font-style: normal;
    font-weight: 300;
    font-size: 0.8125rem;
    margin: 0 0.33rem;
  }
  button {
    margin: 0;
  }
  .nickname {
    font-style: normal;
    font-weight: 600;
    font-size: 0.938rem;
    line-height: 1.125rem;
    margin-right: 0.3125rem;
    margin-left: 0;
    color: #000000;
  }
`;

export const ImageWrapper = styled.div`
  img {
    width: 100%;
    height: 100%;
    position: relative !important;
    object-fit: cover;
  }
`;

export const AddressBox = styled.div`
  display: flex;
  align-items: center;
  height: 2.875rem;
  width: 100%;
  padding: 0;
  span {
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.0625rem;
    color: #8e8e93;
    padding: 0.53rem;
  }

  .area {
    font-weight: 600;
    color: black;
  }

  svg {
    height: 0.895833rem;
    width: 0.6875rem;
  }
`;

export const Amenity = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0;

  label {
    height: 2.375rem;
    width: 100%;
    top: 44.4375rem;
    font-weight: 600;
    border-radius: none;
  }
  div {
    display: grid;
    text-align: center;
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem;
  }

  p {
    font-size: 0.875rem;
    font-weight: 600;
    padding: 0.625rem 0.875rem;
    border-radius: 2.875rem;
    border: 0.0625rem solid #000000;
  }
`;

export const PostBox = styled.div`
  margin-top: 0.5rem;
  width: 100%;
  top: 55.625rem;
  padding: 0.5rem 0;
  font-size: 0.9375rem;
  font-weight: 400;
`;
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const HeartBtn = styled.button`
  display: flex;
  align-items: center;
  cursor: pointer;
  justify-content: center;
  padding: 0.4rem 0;
  width: 100%;

  border-radius: 0.25rem;
  background-color: #eff7ff;

  label {
    font-size: 0.8125rem;
    font-weight: 500;
    line-height: 1.25rem;
    letter-spacing: 0rem;
    text-align: left;
  }
  svg {
    margin-right: 0.46875rem;
  }
`;
export const SelectContainer = styled.div`
  position: absolute;
  z-index: 99;
  background: rgb(255, 255, 255);
  border: 1px solid rgb(230, 230, 230);
  box-shadow: rgb(0 0 0 / 15%) 0px 2px 4px 0px;
  border-radius: 4px;
  color: rgb(61, 61, 61);
  bottom: auto;
  top: 2.5rem;
  left: auto;
  right: 0;
  transform: none;
  font-weight: bold;
  box-sizing: border-box;
  .editBtn {
    border-bottom: 1px solid #ececec;
  }
  .deleteBtn {
    color: #f54e4e;
  }
  div {
    display: flex;
    align-items: center;

    font-weight: bold;
    color: gray;
    white-space: nowrap;
    cursor: pointer;
    padding: 0.5rem 1rem;
    font-size: 0.75rem;
    box-sizing: border-box;
    svg {
      margin-left: 0.5rem;
    }
  }
`;
