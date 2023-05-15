import { useEffect, useRef, useState } from 'react';
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { HeaderWrapper, MainHeader, MainNav, NavElement } from './style';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import useScroll from '../../../lib/hooks/scroll/useScroll';
const UserHeader = dynamic(() => import('./userHeader/index'), { ssr: false });

const Header = () => {
  const router = useRouter();
  const { pathname } = router;
  const marginTop = useScroll();

  return (
    <>
      <HeaderWrapper style={{ marginTop: `${marginTop}px` }}>
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
          <UserHeader />
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
