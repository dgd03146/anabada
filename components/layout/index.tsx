import { ReactNode } from 'react';
import { Container } from './style';
import dynamic from 'next/dynamic';
import Header from './header';

// const DynamicHeader = dynamic(() => import('./header'), {
//   ssr: false
// });

type TProps = {
  children: ReactNode;
};

const Layout = ({ children }: TProps) => {
  return (
    <>
      <Header />
      <Container>{children}</Container>
    </>
  );
};

export default Layout;

export const WithoutLayout = ({ children }: TProps) => {
  return <>{children}</>;
};
