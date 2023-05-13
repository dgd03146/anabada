import React from 'react';
import { PostBox } from './style';
import { Viewer } from '@toast-ui/react-editor';

type TPostViewerProps = {
  content?: string;
};

const PostViewer = ({ content }: TPostViewerProps) => {
  return (
    <PostBox>
      <Viewer initialValue={content} />
    </PostBox>
  );
};

export default PostViewer;
