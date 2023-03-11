import { QueryKeys } from './../../key';
import { useQuery } from '@tanstack/react-query';

import { userApi } from '../../../services/api';

import { toast } from 'react-toastify';
import { ApiError } from 'next/dist/server/api-utils';

const getUserData = async () => {
  try {
    const response = await userApi.getUser();
    return response.data;
  } catch (err) {
    if (err instanceof ApiError) toast.error(err.message);
  }
};

const useUser = () => {
  const { data: user } = useQuery([QueryKeys.user], getUserData, {
    onError: (err) => {
      if (err instanceof ApiError) toast.error(err.message);
    }
  });

  return { user };
};

export default useUser;
