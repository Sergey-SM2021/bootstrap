import {Article} from "entity/Article"
import {CommentList} from "entity/Comment"
import {memo, useEffect} from "react"
import {useTranslation} from "react-i18next"
import {useParams} from "react-router-dom"
import clx from "./ArticleDetalisPage.module.scss"
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch"
import {AsyncComponent} from "shared/lib/AsyncComponent/AsyncComponent"
import {commentsSelectors, reducer} from "../model/slice/ArticleDetalisComments"
import {useSelector} from "react-redux"
import { getComments } from "../model/services/getComments"
import { CreateComment } from "features/createComment"

const ArticleDetalisPage = memo(() => {
	const {id} = useParams()
	const {t} = useTranslation("articlePage")
	const dispatch = useAppDispatch()

	const {selectAll} = commentsSelectors
	const comments = useSelector(selectAll)

	useEffect(()=>{
		dispatch(getComments())
	},[dispatch, id])

	if (!id) {
		return <div>
			{t("article not found")}
		</div>
	}

	return (
		<AsyncComponent reducerName={"comments"} reducer={reducer}>
			<div className={clx.article}>
				<Article id={Number(id)}/>
				<CommentList comments={comments} isLoading={false}/>
				<CreateComment />
			</div>
		</AsyncComponent>
	)
})

export default ArticleDetalisPage
