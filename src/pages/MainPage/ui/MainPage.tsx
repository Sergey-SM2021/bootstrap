import {useTranslation} from "react-i18next"
import { Layout } from "shared/ui/Layout/Layout"

const MainPage = () => {
	const {t} = useTranslation("homePage")
	return <Layout>{t("home")}</Layout>
}

export default MainPage
