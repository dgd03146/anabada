import { Cookies } from 'react-cookie';

const cookies = new Cookies();

export const getToken = () => {
  // const accessToken = localStorage.getItem('accessToken');
  return cookies.get('accessToken');
};

export const setToken = (authorization: string) => {
  cookies.set('accessToken', authorization);
};

export const removeToken = () => {
  cookies.remove('refreshToken');
  cookies.remove('accessToken');
  // localStorage.removeItem('accessToken');
};

export const getRefreshToken = () => {
  return cookies.get('refreshToken');
};

export const setRefreshToken = (refreshToken: string) => {
  cookies.set('refreshToken', refreshToken);
};
