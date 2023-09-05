import { Comment as CommentType } from "entity/Comment/model/types/Comment"
import { Text, TextSize } from "shared/ui/Text/Text"
import { useTranslation } from "react-i18next"
import clx from "./CommentList.module.scss"
import { classNames } from "shared/lib/helpers/classNames/classNames"
import { Comment } from "../Comment/Comment"

interface CommentListProps {
  comments: CommentType[];
  isLoading: boolean;
  error: string;
}

export const CommentList = (props: CommentListProps) => {
	const { comments, error, isLoading } = props
	const { t } = useTranslation("articlePage")

	if (error) {
		return <div>{error}</div>
	}

	return (
		<div className={classNames(clx.CommentList, {}, [])}>
			{comments.length ? (
				<Text size={TextSize.lg}>{t("comments")}</Text>
			) : (
				<Text size={TextSize.lg}>{t("comments not found")}</Text>
			)}
			{comments.map((el) => (
				<Comment
					key={el.id}
					isLoading={isLoading}
					className={clx.Comment}
					comment={el}
				/>
			))}
		</div>
	)
}
