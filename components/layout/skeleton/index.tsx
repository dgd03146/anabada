import { PostInfoBox } from './style';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import React from 'react';

const SkeletonItem = () => {
  return (
    <PostInfoBox>
      <Skeleton className="imageBox" height={'8rem'} />
      <Skeleton />
      <Skeleton className="postInfo" width={'5.625rem'} count={2} />
      <Skeleton className="userInfo" count={1} />
    </PostInfoBox>
  );
};

export default SkeletonItem;
