"use client"
import { Provider } from "react-redux"
import { store } from "@/store/store"
import QueryProvider from "./reactQuery.config"

export function MainProvider({ children }: { children: React.ReactNode }) {
	return (
		<QueryProvider>
			<Provider store={store}>
				{children}
			</Provider>
		</QueryProvider>
	)

}