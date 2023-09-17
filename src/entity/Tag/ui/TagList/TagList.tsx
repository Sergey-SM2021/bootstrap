import { Tag } from "entity/Tag"
import { memo } from "react"
import { Flex } from "shared/ui/Flex/Flex"
import { Label } from "shared/ui/Label/Label"

interface TagListProps {
  list: Tag[];
  listOfActive: number[];
  onClick?: (tagID: number) => () => void;
}

export const TagList = memo((props: TagListProps) => {
	const { list, onClick, listOfActive } = props

	return (
		<Flex gap={16}>
			{list.map((el: Tag) => (
				<Label isActive={listOfActive.includes(el.id)} onClick={onClick?.(el.id)} key={el.id}>
					{el.name}
				</Label>
			))}
		</Flex>
	)
})
