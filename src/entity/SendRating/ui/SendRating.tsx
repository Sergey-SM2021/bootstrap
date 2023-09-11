import { Rating } from "shared/ui/rating/Rating"
import clx from "./SendRating.module.scss"
import { useTranslation } from "react-i18next"
import { Text, TextSize } from "shared/ui/Text/Text"
import { AppButton, AppButtonTheme } from "shared/ui/appButton"
import { Modal } from "shared/ui/Modal/Modal"
import { memo, useCallback, useState } from "react"
import { Flex } from "shared/ui/Flex/Flex"
import { TextArea } from "shared/ui/textArea"

interface SendRatingProps {
  title: string;
  onSend: (message: string, rating: number) => void;
}

export const SendRating = memo((props: SendRatingProps) => {
	const { onSend, title } = props
	const { t } = useTranslation()
	const [isOpen, setIsOpen] = useState(false)
	const [text, setText] = useState("")
	const [rating, setRating] = useState(3)

	const handlerChangeRating = useCallback(
		(newRating: number) => {
			setRating(newRating)
		},
		[setRating]
	)

	const handlerClose = useCallback(() => {
		setIsOpen(false)
	}, [])

	const handlerClick = useCallback(() => {
		setIsOpen(true)
	}, [])

	const handlerChange = useCallback((value: string) => {
		setText(value)
	}, [])

	const handlerSend = useCallback(() => {
		onSend(text, rating)
		setText("")
		setIsOpen(false)
	}, [onSend, text, rating])

	return (
		<>
			<Modal isOpen={isOpen} onClose={handlerClose}>
				<Flex direction="column" gap={8}>
					<Text>{t("add comment")}</Text>
					<TextArea onChange={handlerChange} value={text} />
					<AppButton theme={AppButtonTheme.primary} onClick={handlerSend}>
						{t("send")}
					</AppButton>
				</Flex>
			</Modal>
			<div className={clx.SendRating}>
				<Text size={TextSize.lg}>{title}</Text>
				<Rating onChange={handlerChangeRating} rating={rating} />
				<AppButton theme={AppButtonTheme.primary} onClick={handlerClick}>
					{t("rate")}
				</AppButton>
			</div>
		</>
	)
})
