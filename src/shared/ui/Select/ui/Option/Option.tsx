import { useContext } from "react"
import { SelectContext } from "../../lib/SelectContext"
import style from "./Option.module.scss"
import { classNames } from "shared/lib/helpers/classNames/classNames"

interface OptionProps {
  label: string;
  value: string;
}

export const Option = ({ label, value }: OptionProps) => {
	const { active, handlerChange } = useContext(SelectContext)
	const isActive = active.value === value

	const handlerClick = () => {
		handlerChange({ label, value })
	}

	return (
		<div
			className={classNames(style.option, {
				[style.active]: isActive,
			})}
			onClick={handlerClick}
		>
			{label}
		</div>
	)
}
