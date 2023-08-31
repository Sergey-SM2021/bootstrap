import { Article } from "entity/Article"
import { CommentList } from "entity/Comment"
import { memo, useEffect } from "react"
import { useTranslation } from "react-i18next"
import { useNavigate, useParams } from "react-router-dom"
import clx from "./ArticleDetalisPage.module.scss"
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch"
import { AsyncComponent } from "shared/lib/AsyncComponent/AsyncComponent"
import { commentsSelectors } from "../../model/slice/ArticleDetalisComments"
import { useSelector } from "react-redux"
import { getComments } from "../../model/services/getComments"
import { CreateComment } from "features/createComment"
import { AppButton, AppButtonTheme } from "shared/ui/appButton"
import { Layout } from "shared/ui/Layout/Layout"
import { ArticleList } from "entity/Article/ui/ArticleList/ArticleList"
import { ArticleDetalisPage as ArticleDetalisPageReducer } from "../../model/slice/ArticleDetalisPage"
import { getTheSameArticles } from "pages/ArticleDetalisPage/model/services/getTheSameArticles"
import { theSameSelectors } from "../../model/slice/ArticleDetalisTheSame"
import { Text, TextSize } from "shared/ui/Text/Text"

const ArticleDetalisPage = memo(() => {
	const { id } = useParams()
	const { t } = useTranslation("articlePage")
	const dispatch = useAppDispatch()
	const comments = useSelector(commentsSelectors.selectAll)
	const theSame = useSelector(theSameSelectors.selectAll)
	const nav = useNavigate()

	const handlerBack = () => {
		nav(-1)
	}

	useEffect(() => {
		dispatch(getComments(Number(id)))
		dispatch(getTheSameArticles())
	}, [dispatch, id])

	if (!id) {
		return <div>{t("article not found")}</div>
	}

	return (
		<AsyncComponent
			reducerName={"comments"}
			reducer={ArticleDetalisPageReducer}
		>
			<Layout>
				<AppButton theme={AppButtonTheme.primary} onClick={handlerBack}>
					{t("back")}
				</AppButton>
				<Article id={Number(id)} />
				<Text size={TextSize.lg} className={clx.same_list_title}>{t("same")}</Text>
				<ArticleList
					className={clx.same_list}
					articles={theSame}
					isLoading={false}
					mode="small"
				/>
				<CreateComment className={clx.createComment} />
				<CommentList comments={comments} isLoading={false} />
			</Layout>
		</AsyncComponent>
	)
})

export default ArticleDetalisPage
