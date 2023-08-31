import { useTranslation } from "react-i18next"
import { Layout } from "shared/ui/Layout/Layout"

const AboutPage = () => {
	const { t } = useTranslation("aboutPage")
	return <Layout>{t("about")}</Layout>
}

export default AboutPage
