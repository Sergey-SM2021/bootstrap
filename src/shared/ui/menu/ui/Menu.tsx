import { Menu } from "@headlessui/react"
import clx from "./Menu.module.scss"
import { Flex } from "shared/ui/Flex/Flex"
import { ReactNode } from "react"

interface Item {
  text: string;
  onClick: VoidFunction;
}

interface MyDropdownProps {
  Trigger: ReactNode;
  items: Item[];
  right: number | string;
  top: number | string;
}

export const MyDropdown = (props: MyDropdownProps) => {
	const { items, right, top, Trigger } = props
	return (
		<Menu>
			<div className={clx.wrapper}>
				<Menu.Button className={clx.trigger}>
					{Trigger}
				</Menu.Button>
				<Menu.Items className={clx.list} style={{ right, top }}>
					<Flex direction="column" gap={8}>
						{items.map((item, index) => (
							<Menu.Item key={index}>
								<div onClick={item.onClick} className={clx.item}>
									{item.text}
								</div>
							</Menu.Item>
						))}
					</Flex>
				</Menu.Items>
			</div>
		</Menu>
	)
}
