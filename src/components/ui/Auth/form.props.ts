import { FieldError, FieldErrorsImpl, Merge } from "react-hook-form"
import { InputHTMLAttributes } from "react"

interface IFieldProps {
	placeholder: string
	error?: FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined
}

type InputPropsField = InputHTMLAttributes<HTMLInputElement> & IFieldProps

export interface IField extends InputPropsField {
}