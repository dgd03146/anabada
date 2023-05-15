import { QueryKeys } from '../../key';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { userApi } from '../../../services/api';
import { showToast } from '../../../components/layout/Toast/style';
import { getToken } from '../../../services/token';
import useGetToken from '../../../lib/hooks/user/useGetToken';

const getUserData = async () => {
  const response = await userApi.getUser();
  return response.data;
};

const useUser = () => {
  const accessToken = useGetToken();

  const { data: user } = useQuery([QueryKeys.user], getUserData, {
    onError: () => {
      showToast({
        type: 'error',
        message: '유저 정보를 불러오지 못 했습니다.'
      });
    },
    enabled: !!accessToken
  });

  return { user };
};

export default useUser;
