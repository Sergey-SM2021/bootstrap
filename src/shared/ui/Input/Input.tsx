import { ChangeEvent, InputHTMLAttributes, memo } from "react"

interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "onChange" | "value"> {
  onChange: (value: string) => void;
  value: string;
}

export const Input = memo((props: InputProps) => {
	const { value, onChange, ...rest } = props

	const handlerChange = (e: ChangeEvent) => {
		if (e.currentTarget instanceof HTMLInputElement) {
			onChange(e.currentTarget.value)
		}
	}

	return (
		<input
			value={value}
			onChange={handlerChange}
			data-testid="Input"
			{...rest}
		/>
	)
})

Input.displayName = "Input"