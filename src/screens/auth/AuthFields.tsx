import React from "react"
import { FormState, UseFormRegister } from "react-hook-form"
import Field from "@/components/ui/Auth/Field"

interface IAuthFields {
	register: UseFormRegister<any>
	formState: FormState<any>
	isPasswordRequired?: boolean
}

const AuthFields = ({ isPasswordRequired = false, formState: { errors }, register }: IAuthFields) => {
	return (
		<>
			<Field {...register("email", {
				required: "Email is required",
				minLength: {
					value: 6,
					message: "Min length should more 6 symbols",
				},
			})} placeholder="E-mail" error={errors.email} />

			<Field {...register("password", !isPasswordRequired ? {
				required: "Password is required",
				minLength: {
					value: 6,
					message: "Min length should more 6 symbols",
				},
			} : {})} placeholder="password" type="password" error={errors.password} />
		</>
	)
}

export default AuthFields