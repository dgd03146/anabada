import { useRouter } from 'next/router';
import React, { memo } from 'react';
import { TPost } from '../../../../lib/types/types';
import Image from 'next/image';
import {
  ImageWrapper,
  PostInfo as PostInfo,
  PostInfoBox,
  UserInfo
} from './style';
import { BlurDataURL } from '../../../../constants/contstant';

type TPostProps = {
  post: TPost;
};

const Info = memo(({ post }: TPostProps) => {
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
          placeholder="blur"
          blurDataURL={BlurDataURL}
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
              placeholder="blur"
              blurDataURL={BlurDataURL}
            />
          )}
          <h3>{post.nickname}</h3>
        </UserInfo>
      </PostInfo>
    </PostInfoBox>
  );
});

export default Info;
