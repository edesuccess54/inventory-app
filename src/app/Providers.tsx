"use client"

import { ModalProvider } from '@/context/ModalContext'
import ReduxProvider from '@/redux/Provider'
import { HeroUIProvider } from '@heroui/react'
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
        <HeroUIProvider>
            <ModalProvider>
                {children}
            </ModalProvider>
        </HeroUIProvider>
      </ReduxProvider>
        <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default Providers