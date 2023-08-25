import { useEffect } from "react"

interface useIntersectionObserverProps {
  elementForObserv: Element | null;
  onIntersecting: VoidFunction;
}

export const useIntersectionObserver = (
	props: useIntersectionObserverProps
) => {
	const { elementForObserv, onIntersecting } = props

	useEffect(() => {
		const callback: IntersectionObserverCallback = ([entity]) => {
			if (entity.isIntersecting) {
				onIntersecting()
			}
		}

		const options: IntersectionObserverInit = {
			root: null,
			rootMargin: "5px",
			threshold: 0.5,
		}

		const observer = new IntersectionObserver(callback, options)

		if (elementForObserv) {
			observer.observe(elementForObserv)
		}

		return () => {
			if (elementForObserv) {
				observer.unobserve(elementForObserv)
			}
		}
	}, [elementForObserv, onIntersecting])
}
