import React from 'react';
import styled from 'styled-components';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { PostInfoBox } from './style';

const SkeletonItem = () => {
  return (
    <PostInfoBox>
      <Skeleton className="imageBox" height={'8rem'} />
      <Skeleton />
      <Skeleton className="postInfo" width={'5.625rem'} />
      <Skeleton count={1} className="userInfo" />
    </PostInfoBox>
  );
};

export default SkeletonItem;
