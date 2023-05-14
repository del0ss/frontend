"use client"
import React, { useEffect } from "react"
import { useAuth } from "@/hooks/useAuth"
import { useRouter, useSearchParams } from "next/navigation"

export const useAuthRedirect = () => {
	const { user } = useAuth()
	const { push } = useRouter()
	const query = useSearchParams().get("redirect")

	const redirect = query || "/"

	useEffect(() => {
		if (user) push(redirect)
	}, [user, redirect, push])
}
