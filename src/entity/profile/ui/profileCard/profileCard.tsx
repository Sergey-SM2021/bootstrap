import { Text } from "shared/ui/Text/Text"
import style from "./profileCard.module.scss"
import { Input } from "shared/ui/Input/Input"
import { AppButton, AppButtonTheme } from "shared/ui/appButton"
import { useTranslation } from "react-i18next"

export const ProfileCard = () => {
	const {t} = useTranslation()
	return (
		<div className={style.profileCard}>
			<div className={style.header}>
				<Text>{t("profile")}</Text>
				<AppButton theme={AppButtonTheme.primary} onClick={() => {}}>
					{t("edit")}
				</AppButton>
			</div>
			<div className={style.body}>
				<div className={style.item}>
					<Text>{t("name")}</Text>
					<Input value="" onChange={() => {}} />
				</div>
				<div className={style.item}>
					<Text>{t("lastname")}</Text>
					<Input value="" onChange={() => {}} />
				</div>
			</div>
		</div>
	)
}
