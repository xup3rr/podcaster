"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

/**
 * Provides the React Query client to the app with default options (staleTime: 24 hours)
 */
export const ReactQueryClientProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 1000 * 60 * 60 * 24, // 24 hours in milliseconds
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
