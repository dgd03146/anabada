import { useEffect, useState } from 'react';
import { getToken } from '../../../services/token';

const useGetToken = () => {
  const [Token, setToken] = useState<string | null>();

  useEffect(() => {
    // Get the value from local storage if it exists
    const accessToken = getToken();
    setToken(accessToken);
  }, []);

  return Token;
};

export default useGetToken;
