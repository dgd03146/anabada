import { TPost } from '../../../lib/types/types';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { QueryKeys } from '../../key';
import { useRouter } from 'next/router';
import { postApi } from '../../../services/api';

export type TSubmitPost = (params: {
  newPost: TPost;
  postId?: string;
}) => Promise<void>;

const createPost: TSubmitPost = async ({ newPost, postId }) => {
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

const useCreatePost = () => {
  const queryClient = useQueryClient();
  const router = useRouter();

  const { mutate: onCreate } = useMutation(createPost, {
    onSuccess: async () => {
      try {
        await queryClient.invalidateQueries([QueryKeys.posts]);
        await queryClient.invalidateQueries([QueryKeys.myPostsList], {
          refetchType: 'all'
        });
        router.push('/posts'); // Redirect to /posts
      } catch (err) {
        console.log(err);
      }
    },
    onError: (err) => {
      console.log(err);
      // FIXME: On Error toast UI로 바꾸자
      alert('게시글 등록에 실패하였습니다');
    }
  });

  return { onCreate };
};

export default useCreatePost;
