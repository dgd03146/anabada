import { QueryKeys } from './../../key';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { ApiError } from 'next/dist/server/api-utils';
import { useRouter } from 'next/router';

import { toast } from 'react-toastify';
import { meetsApi } from '../../../services/api';
import { showToast } from '../../../components/layout/Toast/style';

const deleteMeetPost = async (thunderPostId: string) => {
  try {
    await meetsApi.deleteMeetPost(thunderPostId);
  } catch (error) {
    console.log(error);
  }
};

export function useDeleteMeet() {
  const router = useRouter();

  const queryClient = useQueryClient();

  const { mutate: onDelete } = useMutation(deleteMeetPost, {
    onSuccess: async () => {
      try {
        await queryClient.invalidateQueries([QueryKeys.meets]);
        await queryClient.invalidateQueries([QueryKeys.allMeets]);
        showToast({ type: 'success', message: '모임 삭제에 성공하였습니다' });
        router.push('/meets');
      } catch (err) {
        if (err instanceof ApiError) toast.error(err.message);
      }
    },
    onError: () => {
      toast.error('모임 삭제에 실패하였습니다');
    }
  });

  return { onDelete };
}
