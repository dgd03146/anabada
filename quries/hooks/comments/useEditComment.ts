import { TComment } from './../../../types/types';
import { commentsApi } from '../../../services/api';
import { QueryKeys } from './../../key';
import { useMutation } from '@tanstack/react-query';
import { queryClient } from '../../queryClient';
import { useState } from 'react';

type TEditComment = (updatedComment: TComment) => Promise<void>;

//댓글 수정완료 button 클릭시 작동할 axios 함수
const editComment: TEditComment = async (updatedComment) => {
  try {
    updatedComment.commentId &&
      (await commentsApi.editComment(updatedComment.commentId, updatedComment));
    // FIXME: alert
    alert('댓글 수정완료');
  } catch (err) {
    // FIXME: alert
    alert(err);
  }
};

const useEditComment = () => {
  const [isEdit, setIsEdit] = useState(false);
  const { mutate: onEditComment } = useMutation(editComment, {
    onSuccess: () => {
      try {
        queryClient.invalidateQueries([QueryKeys.commentList]);
        setIsEdit((prev) => !prev);
      } catch (err) {
        // FIXME: error
        console.log(err);
      }
    },
    onError: (err) => {
      // FIXME: err
      console.log(err);
    }
  });

  return { onEditComment, isEdit, setIsEdit };
};

export default useEditComment;
