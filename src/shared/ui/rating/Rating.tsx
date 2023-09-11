import { useState } from "react"
import RatingIcon from "shared/assets/rating.svg"
import clx from "./Rating.module.scss"
import { classNames } from "shared/lib/helpers/classNames/classNames"

export const Rating = () => {
	const [rating, setRating] = useState(2)
	
	const handlerClick = (newRating:number) => () => {
		setRating(newRating)
	}

	return (
		<div>
			{new Array(5).fill("").map((el, i) => (
				<RatingIcon
					key={i}
					className={classNames(clx.star, { [clx.active]: i + 1 <= rating }, [])}
					onClick={handlerClick(i + 1)}
				/>
			))}
		</div>
	)
}
