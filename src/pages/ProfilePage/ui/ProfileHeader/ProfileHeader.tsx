import { Text } from "shared/ui/Text/Text"
import { AppButton, AppButtonTheme } from "shared/ui/appButton"
import { useTranslation } from "react-i18next"
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch"
import { useSelector } from "react-redux"
import { readOnlySelector } from "../../model/selectors/readOnlySelector/readOnlySelector"
import { memo, useCallback } from "react"
import {
	cancleEdit,
	toggleReadOnly,
} from "pages/ProfilePage/model/slice/profileSlice/profileSlice"
import { updateProfile } from "pages/ProfilePage/model/services/updateProfile/updateProfile"
import { validationErrorSelector } from "pages/ProfilePage/model/selectors/ValidationErrorSelector/ValidationErrorSelector"
import { errorSelector } from "pages/ProfilePage/model/selectors/ErrorSelector/ErrorSelector"
import { Flex } from "shared/ui/Flex/Flex"

export const ProfileHeader = memo(() => {
	const { t } = useTranslation()
	const dispatch = useAppDispatch()
	const edit = useSelector(readOnlySelector)
	const errors = useSelector(validationErrorSelector)
	const isProfileReceived = useSelector(errorSelector)

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
			{errors.map((el) => (
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
