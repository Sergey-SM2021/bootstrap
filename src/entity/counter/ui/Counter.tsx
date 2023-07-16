import { useDispatch, useSelector } from "react-redux"
import { AppButton, AppButtonTheme } from "shared/ui/appButton"
import { getCounterValue } from "../model/selector/getCounterValue/getCounterValue"
import { counterSliceActions } from "../model/slice/counterSlice"
import { useTranslation } from "react-i18next"

export const Counter = () => {
	const { decrement, increment } = counterSliceActions
	const dispatch = useDispatch()
	const { t } = useTranslation()

	const value = useSelector(getCounterValue)

	const onIncrement = () => {
		dispatch(increment())
	}

	const onDecrement = () => {
		dispatch(decrement())
	}

	return (
		<div data-testid="counter">
			<div data-testid="value">{value}</div>
			<AppButton
				onClick={onIncrement}
				data-testid="increment"
				theme={AppButtonTheme.background_inverted}
			>
				{t("increment")}
			</AppButton>
			<AppButton
				onClick={onDecrement}
				theme={AppButtonTheme.background_inverted}
			>
				{t("decrement")}
			</AppButton>
		</div>
	)
}
