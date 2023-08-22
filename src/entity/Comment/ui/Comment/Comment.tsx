import { Comment as CommentType } from "entity/Comment/model/types/Comment"
import { Flex } from "shared/ui/Flex/Flex"
import { Avatar } from "shared/ui/avatar/avatar"
import { Text, TextSize } from "shared/ui/Text/Text"
import { memo } from "react"
import { Skeleton } from "shared/ui/Skeleton/Skeleton"
import { classNames } from "shared/lib/helpers/classNames/classNames"
import clx from "./Comment.module.scss"
import { useNavigate } from "react-router-dom"

interface CommentProps {
  comment: CommentType;
  isLoading: boolean;
  className?: string;
}

export const Comment = memo((props: CommentProps) => {
	const { comment, isLoading, className = "" } = props
	const { id, text, user } = comment
	const navigate = useNavigate()

	const handlerNavigate = () => {
		navigate(`/profile/${user?.id}`)
	}

	if (isLoading) {
		return (
			<Flex
				direction={"column"}
				gap={8}
				className={classNames(clx.Comment, {}, [className])}
			>
				<Flex gap={8} align={"center"}>
					<Skeleton height={50} width={50} radius={"50%"}></Skeleton>
					<Skeleton height={25} width={200} radius={"5px"}></Skeleton>
				</Flex>
				<Skeleton height={100} width={"100%"} radius={"5px"}></Skeleton>
			</Flex>
		)
	}

	return (
		<Flex
			onClick={handlerNavigate}
			direction={"column"}
			gap={8}
			className={classNames(clx.Comment, {}, [className])}
		>
			<Flex gap={8} align={"center"}>
				<Avatar src={user.avatar} size={"xs"} />
				<Text size={TextSize.lg}>{user.nickname}</Text>
			</Flex>
			<Text>{text}</Text>
		</Flex>
	)
})
