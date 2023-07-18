import { AppButton, AppButtonTheme } from "shared/ui/appButton"
import s from "./form.module.scss"
import { useTranslation } from "react-i18next"
import { Text } from "shared/ui/Text/Text"
import { Input } from "shared/ui/Input/Input"
import { useSelector } from "react-redux"
import { StoreSchema } from "app/providers/ReduxProvider/config/StoreSchema"
import { setLogin, setPassword } from "../../model/slice/loginSlice"
import { memo, useCallback } from "react"
import { login_action } from "features/login/model/services/loginService"
import { useAppDispatch } from "app/providers/ReduxProvider/config/store"

export const Form = memo(() => {
	const { t } = useTranslation()
	const dispatch = useAppDispatch()

	const { login, password } = useSelector((state: StoreSchema) => state.login)

	const onChangeLogin = useCallback(
		(value: string) => {
			dispatch(setLogin(value))
		},
		[dispatch]
	)

	const onChangePassword = useCallback(
		(value: string) => {
			dispatch(setPassword(value))
		},
		[dispatch]
	)

	const handlerSubmit = async () => {
		await dispatch(login_action({ login, password }))
	}

	return (
		<div className={s.form}>
			<div>
				<Text>{t("login")}</Text>
				<Input value={login} onChange={onChangeLogin} />
			</div>
			<div>
				<Text>{t("password")}</Text>
				<Input value={password} onChange={onChangePassword} />
			</div>
			<AppButton theme={AppButtonTheme.primary} onClick={handlerSubmit}>
				{t("signin")}
			</AppButton>
		</div>
	)
})

Form.displayName = "Form"