import clx from "./Code.module.scss"
import { classNames } from "shared/lib/helpers/classNames/classNames"
import { AppButton, AppButtonTheme } from "../appButton"
import { Icon } from "../icon/Icon"
import Copy from "shared/assets/copy.svg"
import { useCallback } from "react"

interface CodeProps {
  className?: string;
  children: string;
}

export const Code = (props: CodeProps) => {
	const { className = "", children } = props

	const handlerCopy = useCallback(() => {
		navigator.clipboard.writeText(children)
	}, [children])

	return (
		<div className={classNames(clx.codeWrapper, {}, [className])}>
			<pre className={clx.code}>
				<code>
					{children}
					<AppButton
						onClick={handlerCopy}
						theme={AppButtonTheme.primary}
						className={clx.copy}
					>
						<Icon size="xs">
							<Copy className={clx.icon} />
						</Icon>
					</AppButton>
				</code>
			</pre>
		</div>
	)
}
