import { useRouter } from 'next/router';
import React from 'react';
import Login from '../components/auth/login';
import Signup from '../components/auth/signup';
import NotFound from './404';

const Page = () => {
  const router = useRouter();
  const { auth } = router.query;

  if (auth && auth[0] === 'login') {
    return <Login />;
  } else if (auth && auth[0] === 'signup') {
    return <Signup />;
  } else {
    return <NotFound />;
  }
};

export default Page;
