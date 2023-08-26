import { PropsWithChildren } from "react"
import clx from "./Label.module.scss"

type LabelProps = PropsWithChildren;

export const Label = ({ children }: LabelProps) => {
	return <div className={clx.Label}>{children}</div>
}
