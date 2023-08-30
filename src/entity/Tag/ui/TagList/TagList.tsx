import { Tag } from "entity/Tag/model/type/Tag"
import { memo } from "react"
import { Flex } from "shared/ui/Flex/Flex"
import { Label } from "shared/ui/Label/Label"

interface TagListProps {
  list: Tag[];
  onClick?: (tagID: number) => () => void;
}

export const TagList = memo((props: TagListProps) => {
	const { list, onClick } = props

	return (
		<Flex gap={24}>
			{list.map((el: Tag) => (
				<Label onClick={onClick?.(el.id)} key={el.id}>
					{el.name}
				</Label>
			))}
		</Flex>
	)
})
