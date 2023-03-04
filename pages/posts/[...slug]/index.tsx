import React from 'react';
import { useRouter } from 'next/router';

const Post = () => {
  const router = useRouter();
  const { postId } = router.query;

  // If the last segment of the URL path is 'edit',
  // render the post edit page. Otherwise, render the
  // post detail page.
  if (postId && postId[postId.length - 1] === 'edit') {
    return <h1>Post Edit Page</h1>;
  } else {
    return <h1>Post Detail Page</h1>;
  }
};

export default Post;
