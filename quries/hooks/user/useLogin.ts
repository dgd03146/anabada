import { userApi } from '../../../services/api';
import { TLogin, TUser } from '../../../lib/types/types';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import { QueryKeys } from '../../key';
import { ApiError } from 'next/dist/server/api-utils';

export type TPostLogin = (params: TLogin) => Promise<TUser | undefined>;

const postLogin: TPostLogin = async ({ email, password }) => {
  try {
    const response = await userApi.login({ email, password });
    return response.data;
  } catch (err) {
    if (err instanceof ApiError) toast.error(err.message);
  }
};

export function useLogin() {
  const router = useRouter();
  const queryClient = useQueryClient();
  const { mutate: onLogin } = useMutation(
    (params: TLogin) => postLogin(params),
    {
      onSuccess: async (data) => {
        toast.success('로그인에 성공했습니다');
        queryClient.setQueryData([QueryKeys.user], data);
        router.push('/home');
      },
      onError: (err) => {
        if (err instanceof ApiError) toast.error(err.message);
      }
    }
  );
  return { onLogin };
}
