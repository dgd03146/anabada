import { Cookies } from 'react-cookie';

const cookies = new Cookies();

export const getToken = () => {
  const accessToken = localStorage.getItem('accessToken');
  return accessToken;
};

export const setToken = (authorization: string) => {
  localStorage.setItem('accessToken', authorization);
};

export const removeToken = () => {
  cookies.remove('refreshToken');
  localStorage.removeItem('accessToken');
};

export const getRefreshToken = () => {
  return cookies.get('refreshToken');
};

export const setRefreshToken = (refreshToken: string) => {
  cookies.set('refreshToken', refreshToken);
};
