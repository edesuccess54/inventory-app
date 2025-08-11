"use client"

import { ModalProvider } from '@/context/ModalContext'
import ReduxProvider from '@/redux/Provider'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const Providers = ({children}: {
    children: React.ReactNode
}) => {

    const queryClient = new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
            retry: false,
            staleTime: 1000 * 60 * 5,
          },
        },
      });

  return (
    <QueryClientProvider client={queryClient}>
      <ReduxProvider>
        <ModalProvider>
            {children}
        </ModalProvider>
      </ReduxProvider>
        <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default Providers