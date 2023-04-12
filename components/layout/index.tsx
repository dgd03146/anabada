import { ReactNode, useCallback, useRef, useState } from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
// import Toast from './Toast';
import Header from './header';
import { Container } from './style';

type TProps = {
  children: ReactNode;
};

const Layout = ({ children }: TProps) => {
  const refErrorTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const refErrorMessage = useRef('');
  const [stateErrTimer, setStateErrTiemr] = useState(false);

  const alertHandler = useCallback(
    (errorMessage = '') => {
      if (refErrorTimer.current === null) {
        setStateErrTiemr(true);
        refErrorMessage.current = errorMessage;
        refErrorTimer.current = setTimeout(() => {
          setStateErrTiemr(false);
          return (refErrorTimer.current = null);
        }, 3500);
      }
    },
    [refErrorTimer]
  );

  return (
    <>
      <Header />
      <Container>
        {/* {stateErrTimer && <Toast errorMsg={refErrorMessage.current} />} */}
        {children}
      </Container>
    </>
  );
};

export default Layout;

export const WithoutLayout = ({ children }: TProps) => {
  return <>{children}</>;
};
