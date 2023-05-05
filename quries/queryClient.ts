import { QueryClient } from '@tanstack/react-query';
import { useState } from 'react';

// const queryErrorHandler = (error: unknown): void => {
//   const title =
//     error instanceof Error ? error.message : 'error connecting to server';
//   console.log(title, 'error 핸들링여기서 해봄');
//   // TODO: 토스트 UI 만들기
// };

// const [queryClient] = useState(
//   () =>
//     new QueryClient({
//       defaultOptions: {
//         queries: {
//           // onError: queryErrorHandler,
//           staleTime: 600000, // 10minutes
//           cacheTime: 900000, // 15minutes
//           refetchOnMount: false,
//           refetchOnWindowFocus: false,
//           refetchOnReconnect: false
//         }
//         // mutations: {
//         //   //   onError: queryErrorHandler
//         //   // }
//       }
//     })
// );

// export default queryClient;
