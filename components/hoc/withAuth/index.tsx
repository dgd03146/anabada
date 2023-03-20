import { QueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import React, { useEffect, ComponentType } from 'react';
import { Cookies } from 'react-cookie';
import { toast } from 'react-toastify';
import { QueryKeys } from '../../../quries/key';

const WithAuth = <P extends {}>(WrappedComponent: ComponentType<P>) => {
  const cookies = new Cookies();
  const router = useRouter();
  const { pathname } = router;
  const isLogined = pathname === ('/signup' || '/login');
  const shouldBeLogined =
    pathname.startsWith('/my') ||
    pathname.startsWith('/chat') ||
    pathname === '/notifications' ||
    pathname.endsWith('/add') ||
    pathname.endsWith('/edit');

  const queryClient = new QueryClient();

  const accessToken = queryClient.getQueryData([QueryKeys.accessToken]);

  const refreshToken = cookies.get('refreshToken');

  const isAuthenticated = () => {
    return accessToken && refreshToken;
  };

  const redirectUser = () => {
    if (!isAuthenticated() && shouldBeLogined) {
      router.push('/login');
    } else if (isAuthenticated() && isLogined) {
      toast.error('비정상적인 접근입니다.');
      router.push('/home');
    }
  };

  const WithAuthWrapper = (props: P) => {
    useEffect(() => {
      redirectUser();
    }, []);

    return <WrappedComponent {...props} />;
  };

  return WithAuthWrapper;
};

export default WithAuth;
