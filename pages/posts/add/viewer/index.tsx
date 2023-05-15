import React, { useEffect, useState } from 'react';
import { PostBox } from './style';
import { Viewer } from '@toast-ui/react-editor';
import dynamic from 'next/dynamic';
import LoadingSpinner from '../../../../components/loading';

const DynamicViewer = dynamic(
  () => import('@toast-ui/react-editor').then((module) => module.Viewer),
  {
    ssr: false
  }
);

type TPostViewerProps = {
  content?: string;
};

const PostViewer = ({ content }: TPostViewerProps) => {
  const [isViewerLoaded, setViewerLoaded] = useState(false);

  useEffect(() => {
    setViewerLoaded(true);
  }, []);

  return (
    <PostBox>
      {isViewerLoaded ? (
        <DynamicViewer initialValue={content} />
      ) : (
        <LoadingSpinner />
      )}
    </PostBox>
  );
};

export default PostViewer;
