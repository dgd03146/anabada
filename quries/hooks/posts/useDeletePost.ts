import { useMutation } from '@tanstack/react-query';
import { ApiError } from 'next/dist/server/api-utils';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import { postApi } from '../../../services/api';
import { QueryKeys } from '../../key';
import { queryClient } from '../../queryClient';

const postDelete = async (postId: string) => {
  try {
    await postApi.deletePost(postId);
  } catch (err) {
    if (err instanceof ApiError) toast.error(err.message);
  }
};

const useDeletePost = () => {
  const router = useRouter();
  const { mutate: onDelete } = useMutation(postDelete, {
    onSuccess: async () => {
      try {
        await queryClient.invalidateQueries([QueryKeys.myPostsList], {
          refetchType: 'all'
        });
        router.push('/posts');
      } catch (err) {
        if (err instanceof ApiError) toast.error(err.message);
      }
    },
    onError: (err) => {
      if (err instanceof ApiError) toast.error(err.message);
    }
  });

  return { onDelete };
};

export default useDeletePost;
