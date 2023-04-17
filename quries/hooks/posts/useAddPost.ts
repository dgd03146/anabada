import { TPost } from '../../../lib/types/types';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { QueryKeys } from '../../key';
import { useRouter } from 'next/router';
import { postApi } from '../../../services/api';
import { showToast } from '../../../components/layout/Toast/style';

export type TAddPost = (params: {
  newPost: TPost;
  postId?: string;
}) => Promise<void>;

const createPost: TAddPost = async ({ newPost, postId }) => {
  try {
    if (!postId) {
      await postApi.createPost(newPost);
    } else {
      await postApi.updatePost(postId, newPost);
    }
  } catch (error) {
    console.error(error);
    throw new Error('An error occurred while submitting the post.');
  }
};

const useAddPost = () => {
  const queryClient = useQueryClient();
  const router = useRouter();

  const { mutate: onAdd } = useMutation(createPost, {
    onSuccess: async () => {
      try {
        await queryClient.invalidateQueries([QueryKeys.posts]);
        await queryClient.invalidateQueries([QueryKeys.myPostsList], {
          refetchType: 'all'
        });
        showToast({
          type: 'success',
          message: '게시물을 등록에 성공하였습니다'
        });
        router.push('/posts'); // Redirect to /posts
      } catch (err) {
        console.log(err);
      }
    },
    onError: (err) => {
      console.log(err);

      showToast({
        type: 'error',
        message: '게시물을 등록에 성공하였습니다'
      });
    }
  });

  return { onAdd };
};

export default useAddPost;
