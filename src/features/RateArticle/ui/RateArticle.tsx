import { memo, useCallback } from "react"
import { SendRating } from "entity/SendRating"
import { useRateArticleMutation } from "../model/api/RateArticle"

const RateArticle = memo(() => {
	const [rateArticle] = useRateArticleMutation()

	const handlerRate = useCallback(
		async (message: string, rating: number) => {
			await rateArticle({ message, rating })
		},
		[rateArticle]
	)

	return (
		<div>
			<SendRating onSend={handlerRate} title="Оценить статью" />
		</div>
	)
})

export default RateArticle