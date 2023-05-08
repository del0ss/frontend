import React from "react"
import { Metadata } from "next"
import Header from "@/components/Header/Header"
import { Providers } from "@/store/provider"
import { Pizza } from "@/types/pizza"
import "@/scss/app.scss"
import QueryProvider from "@/config/reactQuery.config"


export const metadata: Metadata = {
	title: "Pizza",
	description: "Pizza is good",
}


export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="ru">
		<body>
		<QueryProvider>
			<Providers>
				<div className="wrapper">
					<Header />
					{children}
				</div>
			</Providers>
		</QueryProvider>
		</body>
		</html>
	)
}
