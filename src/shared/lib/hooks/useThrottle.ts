import { useRef } from "react"

export const useThrottle = (callback: (...args:any[]) => void, delay: number) => {
	const canInvoke = useRef<boolean>(false)

	return (...args:any[]) => {
		if (canInvoke.current) {
			callback(...args)
			canInvoke.current = false
			setTimeout(() => {
				canInvoke.current = true
			}, delay)
		}
	}
}
