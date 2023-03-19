import '../styles/font.css';

import { ReactElement, ReactNode, useEffect, useState } from 'react';
import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../styles/GlobalStyle';
import { theme } from '../styles/theme';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  Hydrate,
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query';
import { defaultQueryClientOptions } from '../quries/queryClient';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import React from 'react';
import { Cookies } from 'react-cookie';
import useUser from '../quries/hooks/user/useUser';
import { useNotificationStomp } from '../lib/hooks/socket/useNotificationStomp';
import { notificationsApi } from '../services/api';
import withAuth from '../components/hoc/withAuth';

export type NextPageWithLayout<P = Record<string, never>, IP = P> = NextPage<
  P,
  IP
> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  const [queryClient] = useState(
    () => new QueryClient({ defaultOptions: defaultQueryClientOptions })
  );

  // url이 my로 시작하거나 chat으로 시작하거나 notifications거나 add로 끝나거나 edit으로 끝나면 withAuth 적용

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Hydrate state={pageProps.dehydratedState}>
            {getLayout(<Component {...pageProps} />)}
            <ToastContainer />
          </Hydrate>
        </ThemeProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
}
