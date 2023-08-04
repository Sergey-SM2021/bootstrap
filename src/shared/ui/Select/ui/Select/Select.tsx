import { PropsWithChildren, memo, useRef, useState } from "react"
import { SelectContext, StateType } from "../../lib/SelectContext"
import style from "./Select.module.scss"
import { useOutsideClick } from "shared/lib/hooks/useOutsideClick"
import { classNames } from "shared/lib/helpers/classNames/classNames"

export interface SelectProviderProps extends PropsWithChildren {
  onChange: (value: string) => void;
  initialValue: StateType;
  disabled: boolean;
}

export const Select = memo((props: SelectProviderProps) => {
	const {
		children,
		initialValue = { label: "", value: "" },
		onChange,
		disabled = false,
	} = props
	const [active, setActive] = useState<StateType>(initialValue)
	const [isOpen, setIsOpen] = useState(false)

	const handlerOpen = () => {
		setIsOpen(true)
	}

	const handlerClose = () => {
		setIsOpen(false)
	}

	const handlerChange = (option: StateType) => {
		setActive(option)
		onChange(option.value)
		handlerClose()
	}

	const ref = useRef<HTMLDivElement>(null)
	const trigger = useRef<HTMLDivElement>(null)

	useOutsideClick(ref, handlerClose, trigger)

	return (
		<SelectContext.Provider value={{ active, handlerChange }}>
			<div
				ref={trigger}
				className={classNames(style.select, { [style.disabled]: disabled })}
				onClick={!disabled && !isOpen ? handlerOpen : handlerClose}
			>
				{active.value}
				{isOpen ? (
					<div ref={ref} className={style.list}>
						{children}
					</div>
				) : null}
			</div>
		</SelectContext.Provider>
	)
})
