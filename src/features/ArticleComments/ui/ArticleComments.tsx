import { CommentList } from "entity/Comment"
import { CreateComment } from "entity/createComment"
import { memo, useCallback, useEffect } from "react"
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch"
import { getComments } from "../model/services/getComment/getComments"
import { useSelector } from "react-redux"
import {
	commentsSelectors,
	setCommentText,
} from "../model/slice/ArticleComments"
import { AsyncComponent } from "shared/lib/AsyncComponent/AsyncComponent"
import { reducer } from "../model/slice/ArticleComments"
import { CreateCommentAsync } from "../model/services/createComment/createComment"
import { getNewCommentText } from "../model/selector/ArticleCommentsSelector"

interface ArticleCommentsProps {
  id: number;
}

export const ArticleComments = memo((props: ArticleCommentsProps) => {
	const { id } = props
	const dispatch = useAppDispatch()
	const comments = useSelector(commentsSelectors.selectAll)
	const newCommentText = useSelector(getNewCommentText)

	useEffect(() => {
		dispatch(getComments(id))
	}, [id, dispatch])

	const handlerSendComment = useCallback(() => {
		dispatch(CreateCommentAsync(newCommentText))
	}, [newCommentText, dispatch])

	const handlerChangeComment = useCallback(
		(value: string) => {
			dispatch(setCommentText(value))
		},
		[dispatch]
	)

	return (
		<AsyncComponent reducer={reducer} reducerName="articleComments">
			<CreateComment
				onChange={handlerChangeComment}
				onSubmit={handlerSendComment}
				value={newCommentText}
			/>
			<CommentList comments={comments} isLoading={false} />
		</AsyncComponent>
	)
})
