import { userApi } from '../../../services/api';
import { TLogin } from '../../../lib/types/types';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import { ApiError } from 'next/dist/server/api-utils';
import { AxiosError, AxiosResponseHeaders } from 'axios';
import { showToast } from '../../../components/layout/Toast/style';
import { LOGIN_MESSAGE } from '../../../constants/contstant';

export type TPostLogin = (
  params: TLogin
) => Promise<AxiosResponseHeaders | undefined>;

const postLogin: TPostLogin = async ({ email, password }) => {
  try {
    const response = await userApi.login({ email, password });

    return response.headers;
  } catch (err) {
    if (err instanceof ApiError) toast.error(err.message);
  }
};

export function useLogin() {
  const router = useRouter();

  const { mutate: onLogin } = useMutation(
    (params: TLogin) => postLogin(params),
    {
      onSuccess: async () => {
        showToast({ type: 'success', message: LOGIN_MESSAGE.SUCCESS_LOGIN });

        router.push('/');
      },
      onError: (err) => {
        if (err instanceof AxiosError)
          showToast({
            type: 'error',
            message: LOGIN_MESSAGE.CHECK_EMAIL_PASSWORD
          });
      }
    }
  );
  return { onLogin };
}
