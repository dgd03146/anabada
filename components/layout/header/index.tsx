import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { ComponentType, useEffect, useRef, useState } from 'react';
import { Cookies } from 'react-cookie';
import { GrNotification } from 'react-icons/gr';
import { BsFillChatDotsFill } from 'react-icons/bs';
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { TCheckNotifications, TNotifications } from '../../../lib/types/types';
import {
  HeaderWrapper,
  MainHeader,
  MainNav,
  NavElement,
  NotificationContainer
} from './style';
import useUser from '../../../quries/hooks/user/useUser';
import { useNotifications } from '../../../lib/hooks/socket/useNotifications';
import Image from 'next/image';
import { getRefreshToken } from '../../../services/token';
import useGetToken from '../../../lib/hooks/token/useGetToken';

const Header = () => {
  const { user } = useUser();
  const refreshToken = getRefreshToken();

  const { notificationsBadge } = useNotifications(user?.userId);

  const router = useRouter();
  const { pathname } = router;
  const timer = useRef(null);

  const [, setValueY] = useState(0);
  const gapY = useRef(0);

  const { profileImg } = user || {};

  // scroll event handler
  const handleScroll = () => {
    const scrollY = window.scrollY ?? 0;
    const visualViewport = window.visualViewport;
    const scrollHeight = document.getElementById('root')?.scrollHeight ?? 0;

    setValueY((prev) => {
      const scrollDiff = prev - scrollY;
      const isScrollingUp = scrollDiff > 0;
      const isScrollingDown = scrollDiff < 0;

      if (scrollY < 20) {
        gapY.current = 0;
      } else if (scrollHeight <= scrollY + (visualViewport?.height ?? 0) + 20) {
        gapY.current = -50;
      } else if (
        (isScrollingUp && gapY.current >= 0) ||
        (isScrollingDown && gapY.current <= -50)
      ) {
        timer.current = null;
      } else {
        gapY.current += Math.abs(scrollDiff) * (isScrollingUp ? 1 : -1);
        gapY.current = Math.min(0, Math.max(-50, gapY.current));
        timer.current = null;
      }

      return scrollY;
    });
  };

  // scroll event binding
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <HeaderWrapper style={{ marginTop: `${gapY.current}px` }}>
        <MainHeader pathname={pathname}>
          <Link href="/">
            <div>
              <Image
                src="/assets/icons/logo_small.svg"
                alt="Logo"
                width={100}
                height={100}
                priority
              />
            </div>
          </Link>
          <div className="header__user">
            {refreshToken ? (
              <div className="header__user__info header__user__info-islogin">
                <Link href="/notifications">
                  <NotificationContainer noti={notificationsBadge?.isBadge}>
                    <GrNotification />
                    <div className="notification__red"></div>
                  </NotificationContainer>
                </Link>
                <Link href="/chat/room">
                  <BsFillChatDotsFill />
                </Link>
                <Link href="/my/page">
                  <Image
                    src={
                      profileImg
                        ? profileImg
                        : '/assets/illustrations/defaultImage.jpg'
                    }
                    alt="Profile Image"
                    width={50}
                    height={50}
                  />
                </Link>
              </div>
            ) : (
              <>
                <Link href="/login">
                  <div className="header__user__login">로그인</div>
                </Link>
                <div className="header__user__divider">
                  <div></div>
                </div>
                <Link href="/signup">
                  <div className="header__user__signup">회원가입</div>
                </Link>
              </>
            )}
          </div>
        </MainHeader>
        <MainNav>
          <NavElement pathname={pathname}>
            <Link className="header__nav__home" href="/">
              서핑스팟
            </Link>
            <Link className="header__nav__posting" href="/posts">
              포스팅
            </Link>
            <Link className="header__nav__open" href="/meets">
              오픈 모임
            </Link>
          </NavElement>
        </MainNav>
      </HeaderWrapper>
    </>
  );
};

export default Header;
