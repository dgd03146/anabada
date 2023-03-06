import React, { useState } from 'react';
import { useRouter } from 'next/router';
import usePost from '../../../quries/hooks/posts/usePost';
import useDeletePost from '../../../quries/hooks/posts/useDeletePost';
import useLike from '../../../quries/hooks/posts/useLike';
import styled from 'styled-components';
import { FiEdit2, FiMoreHorizontal } from 'react-icons/fi';
import Navigate from '../../../components/layout/navigate';
import { BsFillChatDotsFill } from 'react-icons/bs';
import { RiDeleteBin5Line } from 'react-icons/ri';
import AmentyInfo from '../../../components/amenties';
import { Viewer } from '@toast-ui/react-editor';

import Comments from '../../../components/comments';
import {
  AddressBox,
  Amenity,
  Box,
  ButtonContainer,
  HeartBtn,
  PostBox,
  SelectContainer,
  ThumbnailDiv,
  TitleDiv,
  UserBox
} from './style';

const Post = () => {
  const accessToken = localStorage.getItem('accessToken');

  const router = useRouter();
  const postId = router.query.postId as string;

  // FIXME: redux에서 말고 사용
  const nickname = 'nickname';
  const profileImg = 'profileImg';
  // const nickname = useSelector((state) => state.auth.nickname);
  // const profileImg = useSelector((state) => state.auth.profileImg);

  const [liked, setLiked] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const { post } = usePost(postId, liked);

  const { onDelete } = useDeletePost();
  const { onToggleLike } = useLike();

  const onNavigateChat = (nickname: string) => {
    router.push(`/chat/${nickname}`);
  };

  const getAmenity = post?.amenity?.split(' ');

  const onShowModal = () => {
    setShowModal((prev) => !prev);
  };

  // If the last segment of the URL path is 'edit',
  // render the post edit page. Otherwise, render the
  // post detail page.

  if (postId && postId[postId.length - 1] === 'edit') {
    return <h1>Post Edit Page</h1>;
  } else {
    if (!post) {
      // FIXME: 데이터 없을때
      return <div>데이터 없음</div>;
    }
    return (
      <>
        <Navigate text={'포스트'} />
        <TitleDiv>
          <span>{post.title}</span>
        </TitleDiv>
        <Box>
          <UserBox>
            <img src={post.profileImg} alt="" />
            <span className="nickname">{post.nickname}</span>
            <svg
              width="2"
              height="10"
              viewBox="0 0 2 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1 1V9" stroke="#C7C7CC" strokeLinecap="round" />
            </svg>

            <span>{post.createdAt}</span>
            <svg
              width="2"
              height="10"
              viewBox="0 0 2 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1 1V9" stroke="#C7C7CC" strokeLinecap="round" />
            </svg>
            <span>{post.after}</span>
            <svg
              width="2"
              height="10"
              viewBox="0 0 2 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1 1V9" stroke="#C7C7CC" strokeLinecap="round" />
            </svg>
            <span>조회 {post.viewCount}</span>
          </UserBox>
          {accessToken && nickname === post.nickname && (
            <button className="moreBtn" onClick={onShowModal}>
              <FiMoreHorizontal />
            </button>
          )}
          {accessToken && nickname && nickname !== post.nickname && (
            <button
              className="chatBtn"
              onClick={() => {
                post.nickname && onNavigateChat(post.nickname);
              }}
            >
              <BsFillChatDotsFill />
            </button>
          )}
          {showModal && (
            <SelectContainer>
              <div
                className="editBtn"
                onClick={() => router.push(`/posts/${postId}/edit`)}
              >
                수정하기
                <FiEdit2 />
              </div>
              <div
                className="deleteBtn"
                onClick={() => {
                  const result = window.confirm('정말 삭제하시겠습니까?');
                  result && onDelete(postId);
                }}
              >
                삭제하기
                <RiDeleteBin5Line />
              </div>
            </SelectContainer>
          )}
        </Box>
        <ThumbnailDiv>
          <img src={post.thumbnailUrl} alt="" />
        </ThumbnailDiv>

        <AddressBox>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 14.6668C8 14.6668 13 10.6668 13 6.3335C13 3.57206 10.7614 1.3335 8 1.3335C5.23857 1.3335 3 3.57206 3 6.3335C3 10.6668 8 14.6668 8 14.6668Z"
              fill="#007AFF"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M2.5 6.3335C2.5 3.29592 4.96242 0.833496 8 0.833496C11.0376 0.833496 13.5 3.29592 13.5 6.3335C13.5 8.67736 12.1577 10.8746 10.8884 12.4401C10.246 13.2323 9.60492 13.884 9.12456 14.3376C8.88407 14.5648 8.68307 14.743 8.54128 14.8652C8.47036 14.9263 8.41419 14.9735 8.37523 15.0058C8.35575 15.0219 8.34057 15.0344 8.32998 15.043L8.3176 15.053L8.31407 15.0559L8.31298 15.0568L8.31261 15.0571C8.31247 15.0572 8.31235 15.0573 8 14.6668C7.68765 15.0573 7.68753 15.0572 7.68739 15.0571L7.68702 15.0568L7.68593 15.0559L7.6824 15.053L7.67002 15.043C7.65943 15.0344 7.64425 15.0219 7.62477 15.0058C7.58581 14.9735 7.52964 14.9263 7.45872 14.8652C7.31693 14.743 7.11593 14.5648 6.87544 14.3376C6.39508 13.884 5.75396 13.2323 5.11162 12.4401C3.84231 10.8746 2.5 8.67736 2.5 6.3335ZM8 14.6668L7.68765 15.0573C7.87026 15.2034 8.12974 15.2034 8.31235 15.0573L8 14.6668ZM8 14.0105C8.11918 13.9056 8.26783 13.7713 8.43794 13.6106C8.89508 13.1789 9.50396 12.5597 10.1116 11.8103C11.3423 10.2924 12.5 8.32297 12.5 6.3335C12.5 3.84821 10.4853 1.8335 8 1.8335C5.51471 1.8335 3.5 3.84821 3.5 6.3335C3.5 8.32297 4.65769 10.2924 5.88838 11.8103C6.49604 12.5597 7.10492 13.1789 7.56206 13.6106C7.73217 13.7713 7.88081 13.9056 8 14.0105Z"
              fill="#007AFF"
            />
            <path
              d="M8 8.3335C9.10457 8.3335 10 7.43806 10 6.3335C10 5.22893 9.10457 4.3335 8 4.3335C6.89543 4.3335 6 5.22893 6 6.3335C6 7.43806 6.89543 8.3335 8 8.3335Z"
              fill="#FFFBFF"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5.5 6.3335C5.5 4.95279 6.61929 3.8335 8 3.8335C9.38071 3.8335 10.5 4.95279 10.5 6.3335C10.5 7.71421 9.38071 8.8335 8 8.8335C6.61929 8.8335 5.5 7.71421 5.5 6.3335ZM8 4.8335C7.17158 4.8335 6.5 5.50507 6.5 6.3335C6.5 7.16192 7.17158 7.8335 8 7.8335C8.82842 7.8335 9.5 7.16192 9.5 6.3335C9.5 5.50507 8.82842 4.8335 8 4.8335Z"
              fill="#FFFBFF"
            />
          </svg>

          <span className="area">{post.area}</span>
          <span>{post.address}</span>
        </AddressBox>

        <Amenity>
          <label>주변정보</label>
          {getAmenity && <AmentyInfo amenities={getAmenity} />}
        </Amenity>

        <PostBox>
          <Viewer initialValue={post.content} />
        </PostBox>
        <ButtonContainer>
          {accessToken && nickname && post.nickname !== nickname ? (
            <HeartBtn onClick={() => onToggleLike({ post, setLiked })}>
              {post.isLiked === true ? (
                <>
                  <svg
                    width="19"
                    height="18"
                    viewBox="0 0 19 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.375 3C4.09683 3 2.25 4.84684 2.25 7.125C2.25 11.25 7.125 15 9.75 15.8723C12.375 15 17.25 11.25 17.25 7.125C17.25 4.84684 15.4032 3 13.125 3C11.7299 3 10.4965 3.69259 9.75 4.75268C9.00349 3.69259 7.77011 3 6.375 3Z"
                      fill="#FF2D55"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M1.6875 7.125C1.6875 4.53618 3.78617 2.4375 6.375 2.4375C7.70079 2.4375 8.89792 2.98828 9.75 3.87203C10.6021 2.98828 11.7992 2.4375 13.125 2.4375C15.7138 2.4375 17.8125 4.53618 17.8125 7.125C17.8125 9.40357 16.4751 11.5075 14.8841 13.1142C13.2876 14.7265 11.3393 15.9369 9.92739 16.4061C9.81223 16.4444 9.68777 16.4444 9.57261 16.4061C8.16068 15.9369 6.21241 14.7265 4.61593 13.1142C3.02492 11.5075 1.6875 9.40357 1.6875 7.125ZM6.375 3.5625C4.40749 3.5625 2.8125 5.1575 2.8125 7.125C2.8125 8.97144 3.91258 10.805 5.41532 12.3226C6.84122 13.7626 8.54324 14.8295 9.75 15.2762C10.9568 14.8295 12.6588 13.7626 14.0847 12.3226C15.5874 10.805 16.6875 8.97144 16.6875 7.125C16.6875 5.1575 15.0925 3.5625 13.125 3.5625C11.9206 3.5625 10.8556 4.15966 10.2099 5.07654C10.1045 5.22616 9.93299 5.31518 9.75 5.31518C9.56701 5.31518 9.39545 5.22616 9.29009 5.07654C8.64442 4.15966 7.57941 3.5625 6.375 3.5625Z"
                      fill="#FF2D55"
                    />
                  </svg>
                  <label htmlFor="heart">좋아요</label>
                </>
              ) : (
                <>
                  <svg
                    width="17"
                    height="15"
                    viewBox="0 0 17 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0.4375 5.125C0.4375 2.53618 2.53617 0.4375 5.125 0.4375C6.45079 0.4375 7.64792 0.988282 8.5 1.87203C9.35208 0.988282 10.5492 0.4375 11.875 0.4375C14.4638 0.4375 16.5625 2.53618 16.5625 5.125C16.5625 7.40357 15.2251 9.50746 13.6341 11.1142C12.0376 12.7265 10.0893 13.9369 8.67739 14.4061C8.56223 14.4444 8.43777 14.4444 8.32261 14.4061C6.91068 13.9369 4.96241 12.7265 3.36593 11.1142C1.77492 9.50746 0.4375 7.40357 0.4375 5.125ZM5.125 1.5625C3.15749 1.5625 1.5625 3.1575 1.5625 5.125C1.5625 6.97144 2.66258 8.80503 4.16532 10.3226C5.59122 11.7626 7.29324 12.8295 8.5 13.2762C9.70676 12.8295 11.4088 11.7626 12.8347 10.3226C14.3374 8.80503 15.4375 6.97144 15.4375 5.125C15.4375 3.1575 13.8425 1.5625 11.875 1.5625C10.6706 1.5625 9.60558 2.15966 8.95991 3.07654C8.85455 3.22616 8.68299 3.31518 8.5 3.31518C8.31701 3.31518 8.14545 3.22616 8.04009 3.07654C7.39442 2.15966 6.32941 1.5625 5.125 1.5625Z"
                      fill="#FF2D55"
                    />
                  </svg>
                  <label htmlFor="heart">좋아요</label>
                </>
              )}
            </HeartBtn>
          ) : null}
        </ButtonContainer>

        <Comments
          accessToken={accessToken}
          profileImg={profileImg}
          nickname={nickname}
          post={post}
          postId={postId}
        />
      </>
    );
  }
};

export default Post;
