import { useRouter } from 'next/router';
import MyPage from '../../components/my/page';
import MyMeets from '../../components/my/meets';
import MyPosts from '../../components/my/posts';
import React from 'react';

const DynamicPage = () => {
  const router = useRouter();
  const { slug } = router.query;

  if (slug && slug[0] === 'page') {
    return <MyPage />;
  } else if (slug && slug[0] === 'meets') {
    return <MyMeets />;
  } else if (slug && slug[0] === 'posts') {
    return <MyPosts />;
  } else {
    return <div>404 Not Found</div>;
  }
};

// export async function getStaticPaths() {
//   return {
//     paths: [
//       { params: { slug: ['page'] } },
//       { params: { slug: ['meets'] } },
//       { params: { slug: ['posts'] } }
//     ],
//     // FIXME: fallback : false?
//     fallback: false
//   };
// }

export default DynamicPage;
