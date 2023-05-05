import { TComment } from '../../../lib/types/types';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { FiMoreHorizontal } from 'react-icons/fi';
import { FiEdit2 } from 'react-icons/fi';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { BsFillChatDotsFill } from 'react-icons/bs';
import useEditComment from '../../../quries/hooks/comments/useEditComment';
import useDeleteComment from '../../../quries/hooks/comments/useDeleteComment';
import { ViewComments } from './style';
import EditComment from './editComment';
import NoEditComment from './noEditComment';

import useUser from '../../../quries/hooks/user/useUser';

type TCommentProps = {
  comment: TComment;
  key?: string;
};

const Comment = ({ comment, key }: TCommentProps) => {
  const { user } = useUser();
  const nickname = user?.nickname;

  const [updatedContent, setUpdatedContent] = useState(comment.content);

  const { onEditComment, isEdit, setIsEdit } = useEditComment();

  const onToggleEdit = () => {
    setIsEdit((prev) => !prev);
  };

  return (
    <ViewComments>
      <img src={comment.profileImg} alt="" />
      {isEdit ? (
        <EditComment
          comment={comment}
          updatedContent={updatedContent}
          setUpdatedContent={setUpdatedContent}
          onToggleEdit={onToggleEdit}
          onEditComment={onEditComment}
        />
      ) : (
        <NoEditComment
          comment={comment}
          nickname={nickname}
          setUpdatedContent={setUpdatedContent}
          onToggleEdit={onToggleEdit}
        />
      )}
    </ViewComments>
  );
};

export default Comment;
