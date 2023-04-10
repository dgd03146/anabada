import styled from 'styled-components';
import { TPathnameProps } from '../../../lib/types/types';

export const HeaderWrapper = styled.div`
  background-color: white;
  position: fixed;
  z-index: 999;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px;

  @media screen and (min-width: 1024px) {
    width: 100vw;
    margin: 0 auto;
    left: 0;
    right: 0;
  }
`;

export const MainHeader = styled.div<TPathnameProps>`
  @media screen and (min-width: 1024px) {
    width: 40vw;
    margin: 0 auto;
    left: 0;
    right: 0;
  }

  width: 100vw;
  height: 3.125rem;
  padding: 1rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  svg {
    width: 4.75rem;
    height: 1.115rem;
    cursor: pointer;
  }
  .header__user,
  .header__user__info {
    font-size: 15px;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: 0em;
    text-align: left;

    display: flex;
    justify-content: center;
    align-items: center;

    .header__user__info-islogin {
      a {
        margin-left: 1.2rem;
      }
    }

    svg {
      width: auto;
      width: 20px;
      height: 20px;
      color: #363636;
    }

    img {
      width: 20px;
      height: 20px;
      border-radius: 50%;
    }
  }
  .header__user__login,
  .header__user__signup,
  .header__user__info {
    cursor: pointer;
  }
  .header__user__signup {
    color: ${(props) => (props.pathname === '/signup' ? '#6486FF' : 'inherit')};
  }
  .header__user__login {
    color: ${(props) => (props.pathname === '/login' ? '#6486FF' : 'inherit')};
  }
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

export const MainNav = styled.div`
  width: 100vw;
  height: 2.375rem;
  padding: 0rem 1.375rem;
  font-size: 0.9375rem;

  @media screen and (min-width: 1024px) {
    width: 40vw;
    margin: 0 auto;
    left: 0;
    right: 0;
  }
`;

export const NavElement = styled.nav<TPathnameProps>`
  display: flex;
  justify-content: space-between;
  height: 100%;
  align-items: center;
  .header__nav__home {
    display: flex;
    align-items: center;

    height: 100%;
    color: ${(props) => (props.pathname === '/home' ? '#2756FF' : 'inherit')};
    border-bottom: ${(props) =>
      props.pathname === '/home' ? '0.15rem solid #2756FF' : 'inherit'};
  }
  .header__nav__posting {
    display: flex;
    align-items: center;
    height: 100%;
    color: ${(props) => {
      return props.pathname.startsWith('/posts') ? '#2756FF' : 'inherit';
    }};
    border-bottom: ${(props) => {
      return props.pathname.startsWith('/posts')
        ? '0.15rem solid #2756FF'
        : 'inherit';
    }};
  }
  .header__nav__open {
    display: flex;
    align-items: center;
    height: 100%;
    color: ${(props) => {
      return props.pathname.startsWith('/meets') ? '#2756FF' : 'inherit';
    }};
    border-bottom: ${(props) => {
      return props.pathname.startsWith('/meets')
        ? '0.15rem solid #2756FF'
        : 'inherit';
    }};
  }
`;

type TNotifcationProps = {
  noti: boolean;
};

export const NotificationContainer = styled.div<TNotifcationProps>`
  position: relative;
  .notification__red {
    width: 0.4rem;
    height: 0.4rem;
    z-index: 999;
    background-color: ${(props) => (props.noti ? 'inherit' : 'red')};
    position: absolute;
    border-radius: 50px;
    bottom: 0;
    right: 0;
  }
`;
