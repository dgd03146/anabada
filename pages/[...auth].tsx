import { useRouter } from 'next/router';
import React from 'react';
import Login from '../components/auth/login';
import Signup from '../components/auth/signup';

const Page = () => {
  const router = useRouter();
  const { auth } = router.query;

  if (auth && auth[0] === 'login') {
    return <Login />;
  } else if (auth && auth[0] === 'signup') {
    return <Signup />;
  } else {
    // Handle 404 error
    return <div>can not find page</div>;
  }
};

export default Page;
