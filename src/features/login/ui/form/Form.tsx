import { AppButton, AppButtonTheme } from "shared/ui/appButton"
import { useTranslation } from "react-i18next"
import { Text, ThemeEnum } from "shared/ui/Text/Text"
import { Input } from "shared/ui/Input/Input"
import { useSelector } from "react-redux"
import {
	loginSliceReducer,
	setLogin,
	setPassword,
} from "../../model/slice/loginSlice"
import { memo, useCallback } from "react"
import { login_action } from "features/login"
import { loginSelector } from "features/login"
import { AsyncComponent } from "shared/lib/AsyncComponent/AsyncComponent"
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch"
import { Flex } from "shared/ui/Flex/Flex"

interface FormProps {
  onSuccess: VoidFunction;
}

const Form = memo(({ onSuccess }: FormProps) => {
	const { t } = useTranslation()
	const dispatch = useAppDispatch()
	const password = useSelector(loginSelector.LoginFormPasswordSelector)
	const error = useSelector(loginSelector.LoginFormErrorSelector)
	const isLoading = useSelector(loginSelector.LoginFormIsLoadingSelector)
	const login = useSelector(loginSelector.LoginFormLoginSelector)

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

	const handlerSubmit = useCallback(async () => {
		const result = await dispatch(login_action({ login, password }))
		if (result.meta.requestStatus === "fulfilled") {
			onSuccess()
		}
	}, [login, onSuccess, password, dispatch])

	return (
		<AsyncComponent reducer={loginSliceReducer} reducerName="login">
			<Flex direction="column" gap={16}>
				{error ? <Text theme={ThemeEnum.Error}>{error}</Text> : null}
				<div>
					<Text>{t("login")}</Text>
					<Input data-testid="login" value={login} onChange={onChangeLogin} />
				</div>
				<div>
					<Text>{t("password")}</Text>
					<Input
						data-testid="password"
						value={password}
						onChange={onChangePassword}
					/>
				</div>
				<AppButton
					data-testid="signin"
					disabled={isLoading}
					theme={AppButtonTheme.primary}
					onClick={handlerSubmit}
				>
					{t("signin")}
				</AppButton>
			</Flex>
		</AsyncComponent>
	)
})

export default Form
