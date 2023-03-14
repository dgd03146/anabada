import { QueryKeys } from './../../key';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { meetsApi } from '../../../services/api';

type TToggleLikeParams = {
  thunderPostId: string;
  setIsLiked: React.Dispatch<React.SetStateAction<boolean>>;
  isLiked: boolean;
};
type TToggleLike = (params: TToggleLikeParams) => Promise<void>;

const toggleLike: TToggleLike = async ({
  setIsLiked,
  isLiked,
  thunderPostId
}) => {
  const mutationFn = isLiked ? meetsApi.deleteLike : meetsApi.postLike;
  try {
    await mutationFn(thunderPostId);
    setIsLiked((prev) => !prev);
  } catch (error) {
    toast.error('북마크 저장에 실패하였습니다');
  }
};

export function useLike() {
  const queryClient = useQueryClient();

  const { mutateAsync: onLike } = useMutation(toggleLike, {
    onSuccess: async () => {
      try {
        await queryClient.invalidateQueries([QueryKeys.detailMeet]);
        await queryClient.invalidateQueries([QueryKeys.myMeetsList], {
          refetchType: 'all'
        });
        toast.success('북마크가 저장되었습니다.');
      } catch (error) {
        console.log(error);
        toast.error('북마크 저장에 실패하였습니다.');
      }
    },
    onError: (error) => {
      console.log(error);
      toast.error('북마크 저장에 실패하였습니다.');
    }
  });

  return { onLike };
}
