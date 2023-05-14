"use client"
import { QueryClient, QueryClientProvider } from "react-query"
import { useState } from "react"

const queryClient = new QueryClient()

export default function QueryProvider({ children }: { children: React.ReactNode }) {
	const [queryClient] = useState(() => new QueryClient({
		defaultOptions: {
			queries: {
				refetchOnWindowFocus: false,
				keepPreviousData: true,
			},
		},
	}))

	return (
		<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
	)
}