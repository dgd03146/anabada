import { useRouter } from 'next/router';
import React from 'react';

const Page = () => {
  const router = useRouter();
  const { slug } = router.query;

  if (slug && slug[0] === 'login') {
    // return <Login />;
  } else if (slug && slug[0] === 'signup') {
    // return <Signup />;
  } else {
    // Handle 404 error
    return <div>Page not found</div>;
  }
};

export default Page;
