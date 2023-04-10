import React, { ReactNode } from 'react';

type TProps = {
  children: ReactNode;
};

export default function NoLayout({ children }: TProps) {
  return <>{children}</>;
}
