import { PropsWithChildren } from "react"
import { I18nextProvider } from "react-i18next"
import i18n from "shared/config/i18nConfig/i18n-test"

type renderWithTranslationProps = PropsWithChildren

export const RenderWithTranslation = ({
	children,
}: renderWithTranslationProps) => {
	return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
}
