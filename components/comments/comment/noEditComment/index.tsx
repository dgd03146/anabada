import router from 'next/router';
import React, { Dispatch, SetStateAction, useState } from 'react';
import { BsFillChatDotsFill } from 'react-icons/bs';
import { FiEdit2, FiMoreHorizontal } from 'react-icons/fi';
import { RiDeleteBin5Line } from 'react-icons/ri';
import useDeleteComment from '../../../../quries/hooks/comments/useDeleteComment';
import { TComment } from '../../../../lib/types/types';
import {
  CommentDate,
  CommentContent,
  CommentContainer,
  CommentNickname,
  SelectContainer
} from '../style';
import useGetToken from '../../../../lib/hooks/user/useGetToken';

type TNoEditCommentProps = {
  comment: TComment;

  nickname?: string;
  onToggleEdit: () => void;

  setUpdatedContent: Dispatch<SetStateAction<string | undefined>>;
};

const NoEditComment = ({
  comment,
  onToggleEdit,
  nickname,
  setUpdatedContent
}: TNoEditCommentProps) => {
  const [showModal, setShowModal] = useState(false);
  const accessToken = useGetToken();

  const { onDeleteComment } = useDeleteComment();
  const onShowModal = () => {
    setShowModal((prev) => !prev);
  };

  const onNavigateChat = (nickname: string) => {
    router.push(`/chat/${nickname}`);
  };

  return (
    <>
      <CommentContainer>
        <CommentNickname>{comment.nickname}</CommentNickname>
        <CommentDate>{comment.createdAt}</CommentDate>
        <CommentContent>{comment.content}</CommentContent>
      </CommentContainer>
      {accessToken && (
        <button
          className={comment.nickname !== nickname ? 'chatBtn' : 'moreBtn'}
          onClick={() => {
            if (comment.nickname && comment.nickname !== nickname) {
              onNavigateChat(comment.nickname);
            } else {
              onShowModal();
            }
          }}
        >
          {comment.nickname !== nickname ? (
            <BsFillChatDotsFill />
          ) : (
            <FiMoreHorizontal />
          )}
        </button>
      )}
      {showModal && (
        <SelectContainer>
          <div
            className="editBtn"
            onClick={() => {
              comment.content && setUpdatedContent(comment.content);
              onToggleEdit();
            }}
          >
            수정하기
            <FiEdit2 />
          </div>
          <div
            className="deleteBtn"
            onClick={() =>
              comment.commentId && onDeleteComment(comment.commentId)
            }
          >
            삭제하기
            <RiDeleteBin5Line />
          </div>
        </SelectContainer>
      )}
    </>
  );
};

export default NoEditComment;
