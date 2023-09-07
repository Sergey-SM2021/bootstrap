import { Listbox } from "@headlessui/react"
import { memo } from "react"
import clx from "./ListBox.module.scss"
import { Flex } from "shared/ui/Flex/Flex"
import Done from "shared/assets/done.svg"
import { Icon } from "shared/ui/icon/Icon"

interface ItemType {
  name: string;
  id: number;
}

interface MyListboxProps {
  items: ItemType[];
  onSelect: (value: ItemType) => void;
  value: ItemType;
}

export const MyListbox = memo((props: MyListboxProps) => {
	const { items, onSelect, value } = props
	return (
		<Listbox value={value} onChange={onSelect}>
			<div className={clx.Wrapper}>
				<Listbox.Button className={clx.DefaultButton}>
					<Flex align="center" justify="center" className={clx.Button}>
						<p>{value.name}</p>
					</Flex>
				</Listbox.Button>
				<Listbox.Options className={clx.List}>
					{items.map((person) => (
						<Listbox.Option key={person.id} className={clx.item} value={person}>
							<Flex align="center">
								{value.id === person.id ? (
									<Icon className={clx.Icon}>
										<Done />
									</Icon>
								) : null}
								<span className={clx.text}>{person.name}</span>
							</Flex>
						</Listbox.Option>
					))}
				</Listbox.Options>
			</div>
		</Listbox>
	)
})
