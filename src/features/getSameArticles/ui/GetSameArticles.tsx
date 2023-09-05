import { ArticleList } from "entity/Article/ui/ArticleList/ArticleList"
import { useTranslation } from "react-i18next"
import { Text, TextSize } from "shared/ui/Text/Text"
import { useGetSameArticlesQuery } from "../model/services/sameArticlesApi"

interface GetSameArticlesProps {
  id: string;
}

export const GetSameArticles = ({ id }: GetSameArticlesProps) => {
	const { t } = useTranslation()
	const { data, isLoading } = useGetSameArticlesQuery(1)

	return (
		<>
			<Text size={TextSize.lg}>{t("same")}</Text>
			<ArticleList articles={data} isLoading={isLoading} mode="small" />
		</>
	)
}
