import i18n from "i18next"
import { initReactI18next } from "react-i18next"

i18n.use(initReactI18next).init({
	debug: false,
	fallbackLng: "en",
	resources: {
		en: {
			rollup: "rollup",
		},
		ru: {
			rollup: "свернуть",
		},
	},
})

export default i18n
