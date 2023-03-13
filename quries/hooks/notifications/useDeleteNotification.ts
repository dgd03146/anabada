import { ApiError } from 'next/dist/server/api-utils';
import { TOAST_MESSAGE } from './../../../constants/contstant';
import { QueryKeys } from './../../key';
import { useMutation } from '@tanstack/react-query';
import { queryClient } from '../../queryClient';
import { notificationsApi } from '../../../services/api';
import { toast } from 'react-toastify';

const deleteNotification = async (notificationId: string) => {
  try {
    return await notificationsApi.deleteNotification(notificationId);
  } catch (err) {
    toast.error(TOAST_MESSAGE.GENERIC_ERROR);
  }
};

const useDeleteNotification = () => {
  const { mutate: onDeleteNotification } = useMutation(deleteNotification, {
    onSuccess() {
      try {
        queryClient.invalidateQueries([QueryKeys.notifications]);
        toast.success('알림이 삭제되었습니다.');
      } catch (err) {
        if (err instanceof ApiError) toast.error(err.message);
      }
    },
    onError(err) {
      if (err instanceof ApiError) toast.error(err.message);
    }
  });

  return { onDeleteNotification };
};

export default useDeleteNotification;
