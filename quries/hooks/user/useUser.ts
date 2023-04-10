import { QueryKeys } from '../../key';
import { useQuery } from '@tanstack/react-query';

import { userApi } from '../../../services/api';

import { toast } from 'react-toastify';
import { queryClient } from '../../queryClient';

const getUserData = async () => {
  try {
    const response = await userApi.getUser();
    return response.data;
  } catch (err) {
    toast.error('유저 정보를 불러오지 못 했습니다', {
      toastId: 'userError'
    });
  }
};

const useUser = () => {
  const accessToken = queryClient.getQueryData<string | null>([QueryKeys.user]);

  const { data: user } = useQuery([QueryKeys.user], getUserData, {
    onSuccess() {
      toast.success('유저 정보를 성공적으로 불러왔습니다.');
    },
    onError: () => {
      toast.error('유저 정보를 불러오지 못 했습니다', {
        toastId: 'userError'
      });
    },
    enabled: !!accessToken
  });

  return { user };
};

export default useUser;
