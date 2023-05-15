import React from 'react';
import { memo } from 'react';
import Info from '../info/postInfo';
import { TPost } from '../../../../lib/types/types';
import SkeletonItem from '../../../layout/skeleton';

type TContainerProps = {
  isFetching: boolean;
  isLoading: boolean;
  post: TPost;
};

const PostSkeletonContainer = memo(
  ({ isFetching, isLoading, post }: TContainerProps) => {
    return (
      <div style={{ cursor: 'pointer' }}>
        {/* {isFetching && <SkeletonItem />} */}
        {!isLoading && <Info post={post} />}
      </div>
    );
  }
);

export default PostSkeletonContainer;
