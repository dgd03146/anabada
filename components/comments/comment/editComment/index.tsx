import React, {
  useState,
  KeyboardEvent,
  SetStateAction,
  Dispatch
} from 'react';
import { TComment } from '../../../../types/types';

import {
  BtnDiv,
  CommentContainer,
  CommentDate,
  CommentNickname,
  UpdateContent
} from '../style';

type TEditCommentProps = {
  comment: TComment;
  onToggleEdit: () => void;
  onEditComment: (comment: TComment) => void;
  updatedContent?: string;
  setUpdatedContent: Dispatch<SetStateAction<string | undefined>>;
};

const EditComment = ({
  comment,
  onToggleEdit,
  onEditComment,
  updatedContent,
  setUpdatedContent
}: TEditCommentProps) => {
  const [isValid, setIsValid] = useState(false);

  const onEdit = () => {
    const updatedComment = {
      content: updatedContent
    };
    onEditComment(updatedComment);
  };

  const onKeyUp = (e: KeyboardEvent<HTMLInputElement>) => {
    e.currentTarget.value.length > 0 ? setIsValid(true) : setIsValid(false);
  };

  return (
    <>
      <CommentContainer>
        <CommentNickname>{comment.nickname}</CommentNickname>
        <CommentDate>{comment.createdAt}</CommentDate>
        <UpdateContent
          type="text"
          value={updatedContent}
          onChange={(e) => {
            setUpdatedContent(e.target.value);
          }}
          onKeyUp={onKeyUp}
        ></UpdateContent>
      </CommentContainer>
      <BtnDiv>
        <button disabled={isValid === false} onClick={onEdit}>
          수정 완료
        </button>
        <button onClick={onToggleEdit}>취소</button>
      </BtnDiv>
    </>
  );
};

export default EditComment;
