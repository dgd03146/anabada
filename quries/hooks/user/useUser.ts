import { QueryKeys } from '../../key';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { userApi } from '../../../services/api';
import { showToast } from '../../../components/layout/Toast/style';

const getUserData = async () => {
  try {
    const response = await userApi.getUser();
    return response.data;
  } catch (err) {
    showToast({
      type: 'error',
      message: '유저 정보를 불러오지 못 했습니다.'
    });
  }
};

const useUser = () => {
  const queryClient = useQueryClient();

  const accessToken = queryClient.getQueryData([QueryKeys.accessToken]);

  const { data: user } = useQuery([QueryKeys.user], getUserData, {
    onSuccess() {
      showToast({
        type: 'success',
        message: '유저 정보를 성공적으로 불러왔습니다.'
      });
    },
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
