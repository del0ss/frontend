import { forwardRef } from "react"
import cn from "classnames"
import styles from "@/components/Search/Search.module.css"
import { IField } from "./form.props"

const Field = forwardRef<HTMLInputElement, IField>(({ placeholder, error, type = "text", style, ...props }, ref) => {
	return (
		<div className={cn(styles.field)} style={style}>
			<label>
				<span>{placeholder}</span>
				<input type={type} ref={ref} {...props} />
			</label>
			{error && <div className={styles.error}>{String(error.message)}</div>}
		</div>
	)
})

Field.displayName = "Field"
export default Field