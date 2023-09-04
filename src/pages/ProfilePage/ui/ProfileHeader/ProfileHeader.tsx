import { Text } from "shared/ui/Text/Text"
import { AppButton, AppButtonTheme } from "shared/ui/appButton"
import { useTranslation } from "react-i18next"
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch"
import { useSelector } from "react-redux"
import { selectReadOnly } from "../../model/selectors/ProfilePageSelectors"
import { selectProfileValidateErrors } from "../../model/selectors/ProfilePageSelectors"
import { selectError } from "../../model/selectors/ProfilePageSelectors"
import { memo, useCallback } from "react"
import {
	cancleEdit,
	toggleReadOnly,
} from "pages/ProfilePage/model/slice/profileSlice/profileSlice"
import { updateProfile } from "pages/ProfilePage/model/services/updateProfile/updateProfile"
import { Flex } from "shared/ui/Flex/Flex"

export const ProfileHeader = memo(() => {
	const { t } = useTranslation()
	const dispatch = useAppDispatch()
	const edit = useSelector(selectReadOnly)
	const errors = useSelector(selectProfileValidateErrors)
	const isProfileReceived = useSelector(selectError)

	const handlerCancle = useCallback(() => {
		dispatch(toggleReadOnly())
		dispatch(cancleEdit())
	}, [dispatch])

	const handlerSave = useCallback(async () => {
		dispatch(updateProfile())
	}, [dispatch])

	const handlerEditProfile = useCallback(() => {
		dispatch(toggleReadOnly())
	}, [dispatch])

	return (
		<Flex justify="space-between" align="center">
			<Text>{t("profile")}</Text>
			{errors?.map((el) => (
				<div key={el}>{t(el)}</div>
			))}
			{!isProfileReceived ? (
				edit ? (
					<AppButton
						theme={AppButtonTheme.primary}
						onClick={handlerEditProfile}
					>
						{t("edit")}
					</AppButton>
				) : (
					<Flex gap={8} justify="end">
						<AppButton theme={AppButtonTheme.dangerous} onClick={handlerSave}>
							{t("save")}
						</AppButton>
						<AppButton theme={AppButtonTheme.primary} onClick={handlerCancle}>
							{t("cancle")}
						</AppButton>
					</Flex>
				)
			) : null}
		</Flex>
	)
})
