import { QueryKeys } from './../../key';
import { meetsApi } from './../../../services/api';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { ApiError } from 'next/dist/server/api-utils';
import { toast } from 'react-toastify';

type TToggleJoinParams = {
  thunderPostId: string;
  setIsJoined: React.Dispatch<React.SetStateAction<boolean>>;
  isJoined: boolean;
};

type TToggleJoin = (params: TToggleJoinParams) => Promise<void>;

const toggleJoin: TToggleJoin = async ({
  setIsJoined,
  isJoined,
  thunderPostId
}) => {
  const confirmMessage = isJoined
    ? '참가를 취소하시겠습니까?'
    : '모임에 참가하시겠습니까?';

  const apiCall = isJoined ? meetsApi.deleteRequest : meetsApi.postRequest;
  const successMessage = isJoined
    ? '참가를 취소하였습니다'
    : '모임에 참가하였습니다';

  try {
    const result = window.confirm(confirmMessage);
    if (!result) return;
    await apiCall(thunderPostId);
    setIsJoined((prev) => !prev);
    toast.success(successMessage);
  } catch (error) {
    toast.error(`${isJoined ? '참가 취소' : '참가'}에 실패하였습니다`);
  }
};

export function useJoin() {
  const queryClient = useQueryClient();

  const { mutate: onJoin } = useMutation(toggleJoin, {
    onSuccess: async () => {
      try {
        await queryClient.invalidateQueries([QueryKeys.detailMeet]);
        await queryClient.invalidateQueries([QueryKeys.myMeetsList]);
      } catch (err) {
        if (err instanceof ApiError) toast.error(err.message);
      }
    },
    onError: (err) => {
      if (err instanceof ApiError) toast.error(err.message);
    }
  });

  return { onJoin };
}
