import { Popover } from "@headlessui/react"
import { PropsWithChildren, ReactNode } from "react"
import clx from "./Popover.module.scss"

interface MyPopoverProps extends PropsWithChildren {
  trigger: ReactNode;
}

export const MyPopover = (props: MyPopoverProps) => {
	const { trigger, children } = props
	return (
		<Popover className={clx.wrapper}>
			<Popover.Button className={clx.trigger}>{trigger}</Popover.Button>
			<Popover.Panel className={clx.list}>{children}</Popover.Panel>
		</Popover>
	)
}
