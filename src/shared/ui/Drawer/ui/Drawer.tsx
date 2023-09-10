import clx from "./Drawer.module.scss"

import { PropsWithChildren, memo } from "react"
import { Flex } from "shared/ui/Flex/Flex"
import { createPortal } from "react-dom"

interface DrawerProps extends PropsWithChildren {
  isOpen: boolean;
  onClose: VoidFunction;
}

export const Drawer = memo((props: DrawerProps) => {
	const { isOpen, children, onClose } = props

	if (!isOpen) {
		return null
	}

	return createPortal(
		<div className={clx.drawer}>
			<div className={clx.Overlay} onClick={onClose} />
			<Flex justify="center" className={clx.body}>
				{children}
			</Flex>
		</div>,
		document.body
	)
})
