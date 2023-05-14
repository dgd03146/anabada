import React, { useEffect, useRef, useState } from 'react';
import useCreateComment from '../../quries/hooks/comments/useCreateComment';
import { TComments, TPost } from '../../lib/types/types';
import Comment from './comment';
import {
  CommentBox,
  CountBox,
  Divider,
  NoDataDiv,
  WriteComment
} from './style';
import { useInView } from 'react-intersection-observer';
import useComments from '../../quries/hooks/comments/useComments';
import { flatten } from 'lodash';
import { FiInbox } from 'react-icons/fi';
import useGetToken from '../../lib/hooks/user/useGetToken';
import { InfiniteLoadingSpinner } from '../loading';

type TCommentsProps = {
  nickname?: string;
  profileImg?: string;
  post: TPost;
  postId: string;
};

const Comments = ({ nickname, profileImg, post, postId }: TCommentsProps) => {
  const accessToken = useGetToken();

  const { comments, fetchNextPage, isFetchingNextPage } = useComments(postId);

  const allComments = flatten(comments?.pages.map((page) => page.data));

  const [newContent, setNewContent] = useState('');
  const [isValid, setIsValid] = useState(false);

  const { ref, inView } = useInView();
  const writeRef = useRef<HTMLInputElement>(null);
  const { onCreateComment } = useCreateComment(writeRef);

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView]);

  return (
    <CommentBox>
      <CountBox>
        <span>댓글 {post?.totalComment}개</span>
        <span>좋아요 {post?.likeCount}개</span>
      </CountBox>
      <Divider />
      {accessToken && nickname && (
        <WriteComment>
          <img src={profileImg} alt="" />
          <input
            type="text"
            placeholder="댓글 내용을 입력하세요."
            ref={writeRef}
            onChange={(e) => {
              setNewContent(e.currentTarget.value);
            }}
            onKeyUp={(e) => {
              e.currentTarget.value.length > 0
                ? setIsValid(true)
                : setIsValid(false);
            }}
          />
          <button
            type="submit"
            disabled={isValid === false}
            onClick={() => {
              const newComment = {
                content: newContent
              };
              onCreateComment({ postId, newComment });
            }}
          >
            게시
          </button>
        </WriteComment>
      )}
      {allComments.map((comment) => (
        <Comment comment={comment} key={comment.commentId} />
      ))}

      {isFetchingNextPage ? <InfiniteLoadingSpinner /> : <div ref={ref} />}
      {comments?.pages[0].data.length === 0 && (
        <NoDataDiv>
          <div>
            <FiInbox />
            <p>아직 댓글이 없습니다.</p>
            <p>첫 댓글을 작성해 보세요.</p>
          </div>
        </NoDataDiv>
      )}
    </CommentBox>
  );
};

export default Comments;
