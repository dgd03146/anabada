import { ApiError } from 'next/dist/server/api-utils';
import { TOAST_MESSAGE } from './../../../constants/contstant';
import { QueryKeys } from './../../key';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { notificationsApi } from '../../../services/api';
import { toast } from 'react-toastify';

const deleteAllNotifications = async () => {
  try {
    return await notificationsApi.deleteAllNotifications();
  } catch (err) {
    toast.error(TOAST_MESSAGE.GENERIC_ERROR);
  }
};

const useDeleteAllnotifications = () => {
  const queryClient = useQueryClient();

  const { mutate: onDelteAllNotifications } = useMutation(
    deleteAllNotifications,
    {
      onSuccess() {
        return queryClient.invalidateQueries([QueryKeys.notifications]);
      },
      onError(err) {
        if (err instanceof ApiError) toast.error(err.message);
      }
    }
  );

  return { onDelteAllNotifications };
};

export default useDeleteAllnotifications;
