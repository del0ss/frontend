import React from "react"
import { Metadata } from "next"
import Header from "@/components/Header/Header"
import { Pizza } from "@/types/pizza"
import "@/scss/app.scss"
import { MainProvider } from "../src/providers/MainProvider"


export const metadata: Metadata = {
	title: "Pizza",
	description: "Pizza is good",
}


export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="ru">
		<body>
		<MainProvider>
			<div className="wrapper">
				<Header />
				{children}
			</div>
		</MainProvider>
		</body>
		</html>
	)
}
