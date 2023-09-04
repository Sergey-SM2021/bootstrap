import { ArticleList } from "entity/Article/ui/ArticleList/ArticleList"
import { useEffect } from "react"
import { useTranslation } from "react-i18next"
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch"
import { Text, TextSize } from "shared/ui/Text/Text"

interface GetSameArticlesProps {
  id: string;
}

export const GetSameArticles = ({ id }: GetSameArticlesProps) => {
	const { t } = useTranslation()
	const dispatch = useAppDispatch()

	useEffect(() => {
		// dispatch(getTheSameArticles())
	}, [dispatch, id])

	return (
		<>
			<Text size={TextSize.lg}>{t("same")}</Text>
			<ArticleList articles={[]} isLoading={false} mode="small" />
		</>
	)
}
