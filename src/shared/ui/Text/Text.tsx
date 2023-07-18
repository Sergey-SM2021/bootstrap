import { PropsWithChildren } from "react"
import styles from "./Text.module.scss"

type TextProps = PropsWithChildren

export const Text = ({children}: TextProps) => (
	<div className={styles.Text} data-testid="Text">
		{children}
	</div>
)