import { Text } from "shared/ui/Text/Text"
import { AppButton, AppButtonTheme } from "shared/ui/appButton"
import style from "./ProfileHeader.module.scss"
import { useTranslation } from "react-i18next"
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch"
import { useSelector } from "react-redux"
import { readOnlySelector } from "../../model/selectors/readOnlySelector/readOnlySelector"
import { memo } from "react"
import { cancleEdit, toggleReadOnly } from "pages/ProfilePage/model/slice/profileSlice/profileSlice"
import { updateProfile } from "pages/ProfilePage/model/services/updateProfile/updateProfile"

export const ProfileHeader = memo(() => {
	const { t } = useTranslation()
	const dispatch = useAppDispatch()
	const edit = useSelector(readOnlySelector)

	const handlerCancle = () => {
		dispatch(toggleReadOnly())
		dispatch(cancleEdit())
	}

	const handlerSave = () => {
		dispatch(updateProfile())
	}

	const handlerEditProfile = () => {
		dispatch(toggleReadOnly())
	}

	return (
		<div className={style.header}>
			<Text>{t("profile")}</Text>
			{edit ? (
				<AppButton theme={AppButtonTheme.primary} onClick={handlerEditProfile}>
					{t("edit")}
				</AppButton>
			) : (
				<div className={style.buttons}>
					<AppButton theme={AppButtonTheme.dangerous} onClick={handlerSave}>
						{t("save")}
					</AppButton>
					<AppButton theme={AppButtonTheme.primary} onClick={handlerCancle}>
						{t("cancle")}
					</AppButton>
				</div>
			)}
		</div>
	)
})
