import { useTranslation } from "react-i18next"
import { Layout } from "shared/ui/Layout/Layout"

const MainPage = () => {
	const { t } = useTranslation("homePage")
	return (
		<Layout>
			<h1 data-testid="title">{t("home")}</h1>
		</Layout>
	)
}

export default MainPage
