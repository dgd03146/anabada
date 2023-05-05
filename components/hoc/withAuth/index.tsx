import { useRouter } from 'next/router';
import React, { useEffect, ComponentType } from 'react';

import { showToast } from '../../layout/Toast/style';

import { getRefreshToken, getToken } from '../../../services/token';

const WithAuth = <P extends {}>(WrappedComponent: ComponentType<P>) => {
  const WithAuthWrapper = (props: P) => {
    const router = useRouter();
    const { pathname } = router;
    const isLogined = pathname === ('/signup' || '/login');
    const shouldBeLogined =
      pathname.startsWith('/my') ||
      pathname.startsWith('/chat') ||
      pathname === '/notifications' ||
      pathname.endsWith('/add') ||
      pathname.endsWith('/edit');

    const accessToken = getToken();
    const refreshToken = getRefreshToken();

    const isAuthenticated = () => {
      return accessToken && refreshToken;
    };

    const redirectUser = () => {
      if (!isAuthenticated() && shouldBeLogined) {
        router.push('/login');
      } else if (isAuthenticated() && isLogined) {
        showToast({
          type: 'error',
          message: '비정상적인 접근입니다.'
        });
        router.push('/home');
      }
    };

    useEffect(() => {
      redirectUser();
    }, []);

    return <WrappedComponent {...props} />;
  };

  return WithAuthWrapper;
};

export default WithAuth;
