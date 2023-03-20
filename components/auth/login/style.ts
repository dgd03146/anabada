import styled from 'styled-components';

export const LoginWelcome = styled.section`
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    /* img {
      height: 4.93875rem;
      width: 13rem;
    } */
  }
`;

export const FormSection = styled.section`
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;

  font-weight: 400;
  font-size: 13px;
  color: #8e8e93;
  .login__wrapper-extra__btn {
    cursor: pointer;
  }
  .login__wrapper-extra__btn:hover {
    color: black;
  }
  .login__wrapper-extra__btn__find {
    display: flex;
  }

  // 헤더에 있는 거 가져옴
  .header__user__divider {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1rem;
    height: 1rem;
    div {
      height: 0.5rem;
      width: 1px;
      border-radius: 1rem;
      background-color: #c7c7cc;
    }
  }
`;
