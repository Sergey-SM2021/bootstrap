import { memo, useContext } from "react"
import { SelectContext } from "../../lib/SelectContext"
import style from "./Option.module.scss"
import { classNames } from "shared/lib/helpers/classNames/classNames"

interface OptionProps {
  value: string;
  children: string;
}

export const Option = memo(({ value, children }: OptionProps) => {
	const { value: contextValue, handlerChange } = useContext(SelectContext)
	const isActive = contextValue === value

	const handlerClick = () => {
		handlerChange(value, children)
	}

	return (
		<div
			className={classNames(style.option, {
				[style.active]: isActive,
			})}
			onClick={handlerClick}
		>
			{children}
		</div>
	)
})
