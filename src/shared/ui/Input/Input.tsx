import { ChangeEvent, InputHTMLAttributes, memo } from "react"
import style from "./Input.module.scss"
import { classNames } from "shared/lib/helpers/classNames/classNames"

interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "onChange" | "value"> {
  onChange: (value: string) => void;
  value: string;
}

export const Input = memo((props: InputProps) => {
	const { value, onChange, readOnly = false, ...rest } = props

	const handlerChange = (e: ChangeEvent) => {
		if (e.currentTarget instanceof HTMLInputElement) {
			onChange(e.currentTarget.value)
		}
	}

	return (
		<input
			className={classNames(style.input, { [style["readOnly"]]: readOnly })}
			readOnly={readOnly}
			value={value}
			onChange={handlerChange}
			data-testid="Input"
			{...rest}
		/>
	)
})

Input.displayName = "Input"
