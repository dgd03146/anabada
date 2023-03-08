import React, { ComponentType, PropsWithChildren, useCallback } from 'react';
import ErrorBoundary, { ErrorBoundaryProps } from '../../errorBoundary';

type WithErrorBoundaryProps<P> = PropsWithChildren<P> & ErrorBoundaryProps;

type ErrorBoundaryComponentType = ComponentType<ErrorBoundaryProps>;

const isErrorBoundaryComponent = (
  component: ComponentType<ErrorBoundaryProps>
) => {
  return component instanceof ErrorBoundary ? true : false;
};

const withErrorBoundary = <P extends {}>(
  WrappedComponent: ComponentType<P>,
  ErrorBoundaryComponent: ErrorBoundaryComponentType,
  displayName?: string
) => {
  if (!isErrorBoundaryComponent(ErrorBoundaryComponent)) {
    console.warn(
      'ErrorBoundaryComponent passed to withErrorBoundary is not an error boundary.'
    );
  }

  const wrappedComponentName =
    WrappedComponent.displayName || WrappedComponent.name || 'Component';
  WithErrorBoundaryComponent.displayName =
    displayName || `withErrorBoundary(${wrappedComponentName})`;

  function WithErrorBoundaryComponent(props: WithErrorBoundaryProps<P>) {
    const { onError } = props;

    const handleError = useCallback(
      (error: Error, componentStack: string) => {
        if (onError) {
          onError(error, componentStack);
        } else {
          console.error(error, componentStack);
        }
      },
      [onError]
    );

    return (
      <ErrorBoundaryComponent
        onError={handleError}
        fallback={<div>에러가 발생했습니다</div>}
      >
        {/* FIXME: fallback만 여러개 만들어놓고 그 fallback을 활용한다?! */}
        <WrappedComponent {...props} />
      </ErrorBoundaryComponent>
    );
  }

  return WithErrorBoundaryComponent;
};

export default withErrorBoundary;
