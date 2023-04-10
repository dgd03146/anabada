import { ComponentType } from 'react';
import NoLayout from '../../layout/noLayout';
import { NextComponentType, NextPageContext } from 'next';

type WithLayout<P> = NextComponentType<NextPageContext, any, P> & {
  getLayout?: (page: JSX.Element) => JSX.Element;
};

function WithoutLayout<P extends {}>(WrappedComponent: ComponentType<P>) {
  const WithoutLayoutWrapper: WithLayout<P> = (props: P) => {
    return (
      <NoLayout>
        <WrappedComponent {...props} />
      </NoLayout>
    );
  };

  WithoutLayoutWrapper.getLayout = (page) => page;

  return WithoutLayoutWrapper;
}

export default WithoutLayout;
