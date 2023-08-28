import { useAppDispatch } from "shared/lib/hooks/useAppDispatch"
import { Input } from "shared/ui/Input/Input"
import {
	createCommentReducer,
	handlerChange as onChange,
} from "../model/slice/createComment"
import { useSelector } from "react-redux"
import { getTextSelector } from "../model/selectors/getText"
import { AsyncComponent } from "shared/lib/AsyncComponent/AsyncComponent"
import { useTranslation } from "react-i18next"
import { AppButton, AppButtonTheme } from "shared/ui/appButton"
import style from "./CreateComment.module.scss"
import { Flex } from "shared/ui/Flex/Flex"
import { CreateCommentAsync } from "../model/services/createComment"

export const CreateComment = () => {
	const { t } = useTranslation()
	const text = useSelector(getTextSelector)
	const dispatch = useAppDispatch()

	const handlerChange = (value: string) => {
		dispatch(onChange(value))
	}

	const handlerAddComment = () => {
		if (text) {
			dispatch(CreateCommentAsync(text))
		}
		dispatch(onChange(""))
	}

	return (
		<AsyncComponent reducer={createCommentReducer} reducerName="createComment">
			<Flex gap={16}>
				<Input
					placeholder="Оставить комментарий"
					onChange={handlerChange}
					value={text ?? ""}
					className={style.CreateComment}
				/>
				<AppButton
					disabled={Boolean(!text?.length)}
					onClick={handlerAddComment}
					theme={AppButtonTheme.dangerous}
				>
					{t("create coment")}
				</AppButton>
			</Flex>
		</AsyncComponent>
	)
}
