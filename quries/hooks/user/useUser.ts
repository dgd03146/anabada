import { QueryKeys } from '../../key';
import { useQuery } from '@tanstack/react-query';

import { userApi } from '../../../services/api';

import { toast } from 'react-toastify';

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
  const { data: user } = useQuery([QueryKeys.user], getUserData, {
    onError: () => {
      toast.error('유저 정보를 불러오지 못 했습니다', {
        toastId: 'userError'
      });
    }
  });

  return { user };
};

export default useUser;
