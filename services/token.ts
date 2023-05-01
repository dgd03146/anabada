import { QueryKeys } from '../quries/key';
import queryClient from '../quries/queryClient';

export const getAccessToken = () => {
  const accessToken = queryClient.getQueryData<string | null>([
    QueryKeys.accessToken
  ]);
  return accessToken;
};

export const setAccessToken = (authorization: string) => {
  queryClient.setQueryData([QueryKeys.accessToken], authorization);
};

export const removeAccessToken = () => {
  queryClient.setQueryData([QueryKeys.accessToken], null);
};
