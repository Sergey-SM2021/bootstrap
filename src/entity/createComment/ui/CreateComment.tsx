import { Input } from "shared/ui/Input/Input"
import { useTranslation } from "react-i18next"
import { AppButton, AppButtonTheme } from "shared/ui/appButton"
import style from "./CreateComment.module.scss"
import { Flex } from "shared/ui/Flex/Flex"
import { memo } from "react"

interface CreateCommentProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit: VoidFunction;
}

export const CreateComment = memo((props: CreateCommentProps) => {
	const { onChange, value, onSubmit } = props

	const { t } = useTranslation()

	return (
		<Flex gap={16}>
			<Input
				placeholder="Оставить комментарий"
				onChange={onChange}
				value={value}
				className={style.CreateComment}
			/>
			<AppButton
				disabled={!value.length}
				onClick={onSubmit}
				theme={AppButtonTheme.dangerous}
			>
				{t("create coment")}
			</AppButton>
		</Flex>
	)
})
