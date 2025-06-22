"use client"

import { ModalProvider } from '@/context/ModalContext'
import { HeroUIProvider } from '@heroui/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import React from 'react'

const Providers = ({children}: {
    children: React.ReactNode
}) => {

    const queryClient = new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
            retry: false,
            staleTime: 1000 * 60 * 5, // 5 minutes
          },
        },
      });

  return (
    <QueryClientProvider client={queryClient}>
        {/* <HeroUIProvider> */}
            <ModalProvider>
                {children}
            </ModalProvider>
        {/* </HeroUIProvider> */}
        <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>

  )
}

export default Providers