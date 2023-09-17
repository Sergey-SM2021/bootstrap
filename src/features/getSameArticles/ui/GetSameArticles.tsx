import { ArticleList } from "entity/Article"
import { useTranslation } from "react-i18next"
import { Text, TextSize } from "shared/ui/Text/Text"
import { useGetSameArticlesQuery } from "../model/services/sameArticlesApi"

interface GetSameArticlesProps {
  id: string;
}

const GetSameArticles = ({ id }: GetSameArticlesProps) => {
	const { t } = useTranslation()
	const { data, isLoading } = useGetSameArticlesQuery(9)

	return (
		<>
			<Text size={TextSize.lg}>{t("same")}</Text>
			<ArticleList articles={data} isLoading={isLoading} mode="small" />
		</>
	)
}

export default GetSameArticles
