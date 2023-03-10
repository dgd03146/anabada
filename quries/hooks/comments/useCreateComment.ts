import { TComment } from '../../../lib/types/types';
import { QueryKeys } from '../../key';
import { commentsApi } from '../../../services/api';
import { postApi } from '../../../services/api';
import { useMutation } from '@tanstack/react-query';
import { queryClient } from '../../queryClient';
import { RefObject } from 'react';

type TCommentParams = {
  postId: string;
  newComment: TComment;
};

type TCreateComment = (params: TCommentParams) => Promise<void>;

const createComment: TCreateComment = async ({ postId, newComment }) => {
  try {
    await commentsApi.createComment(postId, newComment);
  } catch (err) {
    alert(err);
  }
};

const useCreateComment = (
  writeRef: RefObject<HTMLInputElement | HTMLTextAreaElement>
) => {
  const { mutate: onCreateComment } = useMutation(
    (params: TCommentParams) => createComment(params),
    {
      onSuccess: () => {
        try {
          writeRef.current!.value = '';
          queryClient.invalidateQueries([QueryKeys.commentList]);
        } catch (err) {
          // FIXME: ERR
          console.log(err);
        }
      },
      onError: (err) => {
        console.log(err);
      }
    }
  );

  return { onCreateComment };
};

export default useCreateComment;
