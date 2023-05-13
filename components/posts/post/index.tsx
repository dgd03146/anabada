import { useRouter } from 'next/router';
import React, { memo } from 'react';
import { TPost } from '../../../lib/types/types';
import Image from 'next/image';
import { ImageWrapper, PostInfo, PostInfoBox, UserInfo } from './style';

type TPostProps = {
  post: TPost;
};

const Post = memo(({ post }: TPostProps) => {
  const router = useRouter();

  const thumbnailImage = post.thumbnailUrl;

  return (
    <PostInfoBox
      onClick={() => {
        router.push(`/posts/${post.postId}`);
      }}
    >
      <ImageWrapper>
        <Image
          src={
            thumbnailImage
              ? thumbnailImage
              : '/assets/illustrations/defaultImage.jpg'
          }
          alt="Thumbnail"
          fill
        />
      </ImageWrapper>
      <PostInfo>
        <h2>{post.title}</h2>
        <UserInfo>
          {post.profileImg && (
            <Image
              src={post.profileImg}
              alt="Profile Image"
              width={50}
              height={50}
            />
          )}
          <h3>{post.nickname}</h3>
        </UserInfo>
      </PostInfo>
    </PostInfoBox>
  );
});

export default Post;
