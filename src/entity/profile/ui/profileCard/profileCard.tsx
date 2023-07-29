import { Text } from "shared/ui/Text/Text"
import style from "./profileCard.module.scss"
import { Input } from "shared/ui/Input/Input"
import { AppButton, AppButtonTheme } from "shared/ui/appButton"
import { useTranslation } from "react-i18next"
import { useEffect } from "react"
import { getProfile } from "entity/profile/model/services/getProfile"
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch"
import { useSelector } from "react-redux"
import { nameSelector } from "entity/profile/model/selectors/NameSelector"
import { lastnameSelector } from "entity/profile/model/selectors/LastNameSelector"

export const ProfileCard = () => {
	const name = useSelector(nameSelector)
	const lastname = useSelector(lastnameSelector)
	const { t } = useTranslation()
	const dispatch = useAppDispatch()

	useEffect(() => {
		dispatch(getProfile(13))
	}, [dispatch])

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
					<Input value={name} onChange={() => {}} />
				</div>
				<div className={style.item}>
					<Text>{t("lastname")}</Text>
					<Input value={lastname} onChange={() => {}} />
				</div>
			</div>
		</div>
	)
}
