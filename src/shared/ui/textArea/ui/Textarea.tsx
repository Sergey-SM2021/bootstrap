import {
	ChangeEvent,
	TextareaHTMLAttributes,
	memo,
	useCallback,
} from "react"

interface TextAreaProps
  extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "onChange"> {
  onChange: (value: string) => void;
}

export const TextArea = memo((props: TextAreaProps) => {
	const { onChange, ...restProps } = props

	const handlerChange = useCallback(
		(e: ChangeEvent) => {
			if (e.currentTarget instanceof HTMLTextAreaElement) {
				onChange(e.currentTarget.value)
			}
		},
		[onChange]
	)

	return <textarea onChange={handlerChange} {...restProps} />
})
