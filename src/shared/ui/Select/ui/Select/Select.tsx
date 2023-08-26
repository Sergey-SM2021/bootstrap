import { PropsWithChildren, memo, useRef, useState } from "react"
import { SelectContext, StateType } from "../../lib/SelectContext"
import style from "./Select.module.scss"
import { useOutsideClick } from "shared/lib/hooks/useOutsideClick"
import { classNames } from "shared/lib/helpers/classNames/classNames"

export interface SelectProviderProps extends PropsWithChildren {
  onChange: (value: string) => void;
  value: StateType;
  disabled?: boolean;
}

export const Select = memo((props: SelectProviderProps) => {
	const {
		children,
		value = { label: "", value: "" },
		onChange,
		disabled = false,
	} = props
	const [isOpen, setIsOpen] = useState(false)

	const handlerOpen = () => {
		setIsOpen(true)
	}

	const handlerClose = () => {
		setIsOpen(false)
	}

	const handlerChange = (option: StateType) => {
		onChange(option.value)
		handlerClose()
	}

	const ref = useRef<HTMLDivElement>(null)
	const trigger = useRef<HTMLDivElement>(null)

	useOutsideClick(ref, handlerClose, trigger)

	return (
		<SelectContext.Provider value={{ active: value, handlerChange }}>
			<div
				ref={trigger}
				className={classNames(style.select, { [style.disabled]: disabled })}
				onClick={!disabled && !isOpen ? handlerOpen : handlerClose}
			>
				{value.label}
				{isOpen ? (
					<div ref={ref} className={style.list}>
						{children}
					</div>
				) : null}
			</div>
		</SelectContext.Provider>
	)
})
