import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { postApi } from '../../../services/api';
import { QueryKeys } from '../../key';
import { queryClient } from '../../queryClient';

const postDelete = async (postId: string) => {
  try {
    await postApi.deletePost(postId);
  } catch (err) {
    console.log(err);
    // FIXME: 고치기
    alert(err);
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
      } catch (error) {
        console.error(error);
      }
    },
    onError: (err) => {
      console.log(err);
    }
  });

  return { onDelete };
};

export default useDeletePost;
