import { ArticleList } from "entity/Article/ui/ArticleList/ArticleList"
import { useTranslation } from "react-i18next"
import { Text, TextSize } from "shared/ui/Text/Text"

interface GetSameArticlesProps {
  id: string;
}

export const GetSameArticles = ({ id }: GetSameArticlesProps) => {
	const { t } = useTranslation()

	return (
		<>
			<Text size={TextSize.lg}>{t("same")}</Text>
			<ArticleList articles={[]} isLoading={false} mode="small" />
		</>
	)
}
