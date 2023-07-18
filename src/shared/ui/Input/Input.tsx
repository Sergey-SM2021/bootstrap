import { ChangeEvent, InputHTMLAttributes, memo } from "react"
import styles from "./Input.module.scss"

interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "onChange" | "value"> {
  onChange: (value: string) => void;
  value: string;
}

export const Input = memo((props: InputProps) => {
	const { value, onChange, ...rest } = props

	const handlerChange = (e: ChangeEvent) => {
		if (e.currentTarget instanceof HTMLInputElement) {
			onChange(value)
		}
	}

	return (
		<input
			value={value}
			onChange={handlerChange}
			className={styles.Input}
			data-testid="Input"
			{...rest}
		/>
	)
})

Input.displayName = "Input"