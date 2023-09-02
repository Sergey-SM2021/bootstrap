import { useTranslation } from "react-i18next"
import style from "./NotFoundPage.module.scss"
import { Layout } from "shared/ui/Layout/Layout"
import { Flex } from "shared/ui/Flex/Flex"

export const NotFoundPage = () => {
	const { t } = useTranslation()
	return (
		<Layout>
			<Flex align="center" justify="center" className={style.NotFoundPage}>
				{t("not found page")}
			</Flex>
		</Layout>
	)
}
