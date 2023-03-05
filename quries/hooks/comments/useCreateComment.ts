import { QueryKeys } from '../../key';
import { commentsApi } from '../../../api/api';
import { postApi } from '../../../api/api';
import { useMutation } from '@tanstack/react-query';
import { queryClient } from '../../queryClient';

type TCommentParams = {
  postId: string;
  comment: {
    content: string;
  };
};

type TCreateComment = (params: {
  postId: string;
  comment: {
    content: string;
  };
}) => Promise<void>;

const createComment: TCreateComment = async ({ postId, comment }) => {
  try {
    await commentsApi.createComment(postId, comment);
  } catch (err) {
    alert(err);
  }
};

const useCreateComment = (
  writeRef: React.RefObject<HTMLInputElement | HTMLTextAreaElement>
) => {
  const { mutate: onCreateComment } = useMutation(
    (params: TCommentParams) => createComment(params),
    {
      onSuccess: () => {
        try {
          writeRef.current!.value = '';
          queryClient.invalidateQueries([QueryKeys.commentList]);
        } catch (err) {
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
