import { memo } from "react"
import { Flex } from "shared/ui/Flex/Flex"
import { Skeleton } from "shared/ui/Skeleton/Skeleton"

interface ArticleItemProps {
  mode: "big" | "small";
}

export const ArticleItemSkeleton = memo((props: ArticleItemProps) => {
	const { mode } = props
	if (mode === "big") {
		return (
			<Flex direction="column" gap={8}>
				<Flex gap={8}>
					<Skeleton radius="50%" width={50} height={50} />
					<Skeleton width="100%" height={50} radius={5} />
				</Flex>
				<Skeleton width="100%" height={200} radius={5} />
				<Skeleton width="100%" height={100} radius={5} />
				<Skeleton width="100%" height={100} radius={5} />
				<Skeleton width="100%" height={100} radius={5} />
				<Skeleton width={100} height={50} radius={5} />
			</Flex>
		)
	}

	return (
		<Flex direction="column" gap={8} full={false}>
			<Skeleton radius={5} height={300} width={408} />
			<Flex gap={8}>
				<Skeleton radius={5} height={50} width={300} />
				<Skeleton radius={5} height={50} width={100} />
			</Flex>
			<Skeleton radius={5} height={50} width={408} />
			<Skeleton radius={5} height={50} width={300} />
		</Flex>
	)
})
