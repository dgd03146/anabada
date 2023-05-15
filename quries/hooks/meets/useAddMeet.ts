import { TMeet } from './../../../lib/types/types';
import { useQueryClient, useMutation } from '@tanstack/react-query';
import { meetsApi } from '../../../services/api';
import { QueryKeys } from '../../key';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';

export type TAddPost = (params: {
  newMeet: TMeet;
  thunderPostId?: string;
}) => Promise<void>;

const addMeet: TAddPost = async ({ newMeet, thunderPostId }) => {
  try {
    if (!thunderPostId) {
      await meetsApi.createMeetPost(newMeet);
    } else {
      await meetsApi.editMeetPost(thunderPostId, newMeet);
    }
  } catch (error) {
    console.error(error);
    throw new Error('An error occurred while submitting the post.');
  }

  try {
  } catch (err) {
    const errorMsg = thunderPostId
      ? '모임 수정에 실패하였습니다'
      : '모임 등록에 실패하였습니다';
    toast.error(errorMsg);
  }
};

export function useAddMeet() {
  const queryClient = useQueryClient();
  const router = useRouter();

  const { mutateAsync: onAdd } = useMutation(addMeet, {
    onSuccess: async () => {
      try {
        await queryClient.invalidateQueries([QueryKeys.meets]);
        await queryClient.invalidateQueries([QueryKeys.allMeets]);
        toast.success('모임 등록에 성공하였습니다.');
        router.push(`/meets`);
      } catch (err) {
        toast.error('An error occurred while redirecting to posts page.');
      }
    },
    onError: () => {
      toast.error('모임 등록에 실패하였습니다');
    }
  });

  return { onAdd };
}
