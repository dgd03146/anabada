import styled from 'styled-components';

export const MeetContinaer = styled.div`
  &:hover {
    background: #f7faff;
  }

  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0.625rem;
  gap: 1rem;
  margin-bottom: 0.5rem;
  cursor: pointer;

  width: 100%;
  /* height: 7.438rem; */

  background: #ffffff;
  /* default */

  box-shadow: 0.0625rem 0.0625rem 0.5rem rgba(198, 198, 198, 0.42);
  border-radius: 0.5rem;

  /* Inside auto layout */

  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
`;

export const LeftWrapper = styled.div`
  img {
    width: 10rem;
    height: 10rem;

    background: url(.jpg), #d9d9d9;
    border-radius: 0.8125rem;

    @media screen and (max-width: 550px) {
      width: 5rem;
      height: 5rem;
    }
  }
`;

export const RightWrapper = styled.div`
  display: block;
  flex-direction: column;
  width: 100%;

  div {
    display: flex;
    align-items: flex-start;
    margin-bottom: 0.625rem;
    .dDay {
      display: flex;
      flex-direction: row;
      align-items: center;
      padding: 0.125rem 0.25rem;
      gap: 0.625rem;
      margin-right: 0.75rem;
      /* height: 21px; */

      background: #ff3b30;
      border-radius: 0.25rem;

      /* Inside auto layout */

      flex: none;
      order: 0;
      flex-grow: 0;

      font-style: normal;
      font-weight: 600;
      font-size: 0.75rem;
      line-height: 143.84%;
      /* or 17px */

      color: #ffffff;
    }
    .dayClosing {
      display: flex;
      text-align: center;
      flex-direction: row;
      align-items: flex-start;
      padding: 0.125rem 0.25rem;
      gap: 0.625rem;
      margin-right: 0.75rem;

      background: black;
      border-radius: 4px;

      /* Inside auto layout */

      flex: none;
      order: 0;
      flex-grow: 0;

      font-style: normal;
      font-weight: 600;
      font-size: 0.75rem;
      line-height: 143.84%;
      /* or 17px */

      color: #ffffff;
    }
    .endDate {
      font-style: normal;
      font-weight: 500;
      font-size: 0.8125rem;
      line-height: 143.84%;

      /* or 17px */

      color: #000000;
    }
  }

  .titleDiv {
    width: 100%;

    display: -webkit-box;
    -webkit-line-clamp: 2; //원하는 라인수
    -webkit-box-orient: vertical;
    white-space: pre-wrap;
    overflow: hidden;
    text-overflow: ellipsis;

    font-weight: 600;
    font-size: 0.9375rem;
  }

  .subBox {
    display: flex;
    /* align-items: center; */
    text-align: center;
    margin-bottom: 0.5rem;
    svg {
      margin-right: 0.5rem;
    }
    p.area {
      font-style: normal;
      font-weight: 500;
      font-size: 0.9rem;

      /* identical to box height, or 19px */
      color: #000000;
      margin-right: 0.3rem;
      white-space: nowrap;
    }
    p.address {
      font-style: normal;
      display: -webkit-box;
      -webkit-line-clamp: 1; //원하는 라인수
      -webkit-box-orient: vertical;
      white-space: pre-wrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    svg:last-child {
      font-family: 'Pretendard';
      font-style: normal;
      font-weight: 400;
      font-size: 0.8125rem;

      /* identical to box height */
      margin-right: 0.625rem;
      color: #8e8e93;
    }
    p:last-child {
      font-family: 'Pretendard';
      font-style: normal;
      font-weight: 400;
      font-size: 0.8125rem;

      /* identical to box height */
      color: #8e8e93;
    }
  }
  .bottom {
    margin-bottom: 0.5rem;
  }
`;
