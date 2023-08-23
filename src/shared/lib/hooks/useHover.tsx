import { useState } from "react"

export const useHover = () => {
	const [isHover, setIsHover] = useState(false)

	const onMouseOver = () => {
		setIsHover(true)
	}

	const onMouseLeave = () => {
		setIsHover(false)
	}

	return { isHover, onMouseLeave, onMouseOver }
}
