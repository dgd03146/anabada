import { TComment } from '../../../lib/types/types';
import { commentsApi } from '../../../services/api';
import { QueryKeys } from './../../key';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { useState } from 'react';

const deleteComment = async (commentId: string) => {
  const result = window.confirm('댓글을 삭제하시겠습니까?');
  if (result) {
    try {
      await commentsApi.deleteComment(commentId);
    } catch (err) {
      console.log(err);
      alert(err);
    }
  }
};

const useDeleteComment = () => {
  const queryClient = useQueryClient();

  const { mutateAsync: onDeleteComment } = useMutation(deleteComment, {
    onSuccess: () => {
      try {
        queryClient.invalidateQueries([
          QueryKeys.commentList,
          QueryKeys.detailPost
        ]);
      } catch (err) {
        // FIXME: err
        console.log(err);
      }
    },
    onError: (err) => {
      console.log(err);
    }
  });

  return { onDeleteComment };
};

export default useDeleteComment;
