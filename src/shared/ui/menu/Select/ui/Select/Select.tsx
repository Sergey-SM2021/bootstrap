import { PropsWithChildren, memo, useRef, useState } from "react"
import { SelectContext } from "../../lib/SelectContext"
import style from "./Select.module.scss"
import { useOutsideClick } from "shared/lib/hooks/useOutsideClick"
import { classNames } from "shared/lib/helpers/classNames/classNames"

export interface SelectProviderProps extends PropsWithChildren {
  onChange: (value: string) => void;
  value: string;
  disabled?: boolean;
  placeholder?: string;
}

export const Select = memo((props: SelectProviderProps) => {
	const { children, value, placeholder = "", onChange, disabled = false } = props
	const [isOpen, setIsOpen] = useState(false)
	const [label, setLabel] = useState(placeholder)

	const handlerOpen = () => {
		setIsOpen(true)
	}

	const handlerClose = () => {
		setIsOpen(false)
	}

	const handlerChange = (value: string, label: string) => {
		setLabel(label)
		onChange(value)
		handlerClose()
	}

	const ref = useRef<HTMLDivElement>(null)
	const trigger = useRef<HTMLDivElement>(null)

	useOutsideClick(ref, handlerClose, trigger)

	return (
		<SelectContext.Provider value={{ value, handlerChange, label }}>
			<div
				ref={trigger}
				className={classNames(style.select, { [style.disabled]: disabled })}
				onClick={!disabled && !isOpen ? handlerOpen : handlerClose}
			>
				{label}
				{isOpen ? (
					<div ref={ref} className={style.list}>
						{children}
					</div>
				) : null}
			</div>
		</SelectContext.Provider>
	)
})
