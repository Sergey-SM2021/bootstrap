import { useRef } from "react"

export const useDebounce = (cb: VoidFunction, delay:number) => {
	const timer = useRef<NodeJS.Timeout>(null)
	if (timer.current) {
		clearTimeout(timer.current)
	}
	setTimeout(() => {
		cb()
	}, delay)
}
