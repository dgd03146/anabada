import React, { Component, ReactNode } from 'react';

export type ErrorBoundaryProps = {
  onError?: (error: Error, componentStack: string) => void;
  fallback?: ReactNode;
  children?: ReactNode;
};

type ErrorBoundaryState = {
  hasError: boolean;
};

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    const { onError } = this.props;
    const componentStack = errorInfo.componentStack;

    if (onError) {
      onError(error, componentStack);
    } else {
      console.error(error, componentStack);
    }
  }

  render() {
    const { hasError } = this.state;
    const { fallback, children } = this.props;

    if (hasError && fallback) {
      return fallback;
    }

    return children;
  }
}

export default ErrorBoundary;
