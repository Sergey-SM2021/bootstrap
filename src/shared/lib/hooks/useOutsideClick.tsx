import { RefObject, useCallback, useEffect } from "react"

export const useOutsideClick = (
	ref: RefObject<HTMLDivElement>,
	onClose: VoidFunction,
	trigger: RefObject<HTMLDivElement>
) => {
	const callback = useCallback(
		(e: MouseEvent) => {
			if (!(e.target instanceof HTMLElement)) return
			if (ref.current?.contains(e.target)) return
			if (trigger.current?.contains(e.target)) return
			onClose()
		},
		[ref, onClose, trigger]
	)

	useEffect(() => {
		window.addEventListener("mousedown", callback)
		return () => window.removeEventListener("mousedown", callback)
	}, [])
}
