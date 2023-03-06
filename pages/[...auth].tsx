import { useRouter } from 'next/router';
import React from 'react';

const Page = () => {
  const router = useRouter();
  const { auth } = router.query;

  if (auth && auth[0] === 'login') {
    // return <Login />;
  } else if (auth && auth[0] === 'signup') {
    // return <Signu*p />;
  } else {
    // Handle 404 error
    return <div>Page not found</div>;
  }
};

export default Page;
