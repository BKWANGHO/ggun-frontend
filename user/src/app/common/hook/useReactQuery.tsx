'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { GlobalStateProvider } from '../../GlobalStateProvider';
import GlobalStatusHandler from '../../GlobalStatusHandler';

export default function ReactQueryProviders({ children }: React.PropsWithChildren) {

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000,
      },
    },
  })

  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStateProvider>
        <GlobalStatusHandler>
          {children}
        </GlobalStatusHandler>
      </GlobalStateProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}