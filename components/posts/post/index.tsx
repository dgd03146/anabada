import { useRouter } from 'next/router';
import React, { memo } from 'react';
import { TPost } from '../../../lib/types/types';
import Image from 'next/image';
import { ImageBox, PostInfo, PostInfoBox, UserInfo } from './style';

type TPostProps = {
  post: TPost;
};

const Post = memo(({ post }: TPostProps) => {
  const router = useRouter();

  return (
    <PostInfoBox
      onClick={() => {
        router.push(`/posts/${post.postId}`);
      }}
    >
      <ImageBox>
        <div className="infoBox">
          <span>{post.likeCount}</span>
          {post.isLiked ? (
            <Image
              src="/assets/icons/heart.svg"
              alt="Red heart icon"
              width={24}
              height={24}
              style={{ fill: 'red' }}
            />
          ) : (
            <Image
              src="/assets/icons/brown-heart.svg"
              alt="Brown heart icon"
              width={24}
              height={24}
              style={{ fill: 'rgb(51,37,21)' }}
            />
          )}
        </div>
      </ImageBox>
      <PostInfo>
        <h2>{post.title}</h2>
        <UserInfo>
          <img src={post.profileImg} alt="" />
          <h3>{post.nickname}</h3>
        </UserInfo>
      </PostInfo>
    </PostInfoBox>
  );
});

export default Post;
