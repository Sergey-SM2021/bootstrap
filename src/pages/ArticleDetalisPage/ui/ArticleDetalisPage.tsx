import { Article } from "entity/Article"
import { CommentList } from "entity/Comment"
import { memo, useEffect } from "react"
import { useTranslation } from "react-i18next"
import { useNavigate, useParams } from "react-router-dom"
import clx from "./ArticleDetalisPage.module.scss"
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch"
import { AsyncComponent } from "shared/lib/AsyncComponent/AsyncComponent"
import {
	commentsSelectors,
	reducer,
} from "../model/slice/ArticleDetalisComments"
import { useSelector } from "react-redux"
import { getComments } from "../model/services/getComments"
import { CreateComment } from "features/createComment"
import { AppButton, AppButtonTheme } from "shared/ui/appButton"
import { Layout } from "shared/ui/Layout/Layout"

const ArticleDetalisPage = memo(() => {
	const { id } = useParams()
	const { t } = useTranslation("articlePage")
	const dispatch = useAppDispatch()
	const { selectAll } = commentsSelectors
	const comments = useSelector(selectAll)
	const nav = useNavigate()

	const handlerBack = () => {
		nav(-1)
	}

	useEffect(() => {
		dispatch(getComments(Number(id)))
	}, [dispatch, id])

	if (!id) {
		return <div>{t("article not found")}</div>
	}

	return (
		<AsyncComponent reducerName={"comments"} reducer={reducer}>
			<Layout>
				<div className={clx.article}>
					<AppButton theme={AppButtonTheme.primary} onClick={handlerBack}>
						{t("back")}
					</AppButton>
					<Article id={Number(id)} />
					<CreateComment className={clx.createComment}/>
					<CommentList comments={comments} isLoading={false} />
				</div>
			</Layout>
		</AsyncComponent>
	)
})

export default ArticleDetalisPage
