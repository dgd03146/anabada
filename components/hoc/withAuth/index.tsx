import { useRouter } from 'next/router';
import React, { useEffect, ComponentType } from 'react';
import { Cookies } from 'react-cookie';

const WithAuth = <P extends {}>(WrappedComponent: ComponentType<P>) => {
  const cookies = new Cookies();
  const router = useRouter();

  const isAuthenticated = () => {
    return localStorage.getItem('accessToken') && cookies.get('refreshToken');
  };

  const redirectUser = () => {
    if (isAuthenticated()) {
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
