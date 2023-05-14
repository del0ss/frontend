"use client"
import React, { useState } from "react"
import styles from "./auth.module.scss"
import { useAuthRedirect } from "./useAuthRedirect"
import { useAuth } from "@/hooks/useAuth"
import { SubmitHandler, useForm } from "react-hook-form"
import AuthFields from "@/screens/auth/AuthFields"
import Button from "@/components/Button/Button"

const AuthPage = () => {
	useAuthRedirect()
	const { isLoading } = useAuth()
	const [type, setType] = useState("register")
	const { register: registerInput, handleSubmit, formState, reset } = useForm<IAuthProps>({
		mode: "onChange",
	})
	const register = (data: any) => {
		alert(data)
	}
	const onSubmit: SubmitHandler<IAuthProps> = (data) => {
		if (type === "register") register(data)
		reset()
	}
	return (
		<section className={styles.form}>
			<form onSubmit={handleSubmit(onSubmit)}>
				<AuthFields register={registerInput} formState={formState} />
				<Button type="submit" onClick={() => console.log("pivet")} disabled={isLoading}>Register</Button>
			</form>
		</section>
	)
}

export default AuthPage