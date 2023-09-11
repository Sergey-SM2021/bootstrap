import { memo } from "react"
import RatingIcon from "shared/assets/rating.svg"
import clx from "./Rating.module.scss"
import { classNames } from "shared/lib/helpers/classNames/classNames"

interface RatingProps {
  rating: number;
  onChange: (value: number) => void;
}

export const Rating = memo((props: RatingProps) => {
	const { onChange, rating } = props

	const handlerClick = (newRating: number) => () => {
		onChange(newRating)
	}

	return (
		<div>
			{new Array(5).fill("").map((el, i) => (
				<RatingIcon
					key={i}
					className={classNames(
						clx.star,
						{ [clx.active]: i + 1 <= rating },
						[]
					)}
					onClick={handlerClick(i + 1)}
				/>
			))}
		</div>
	)
})
