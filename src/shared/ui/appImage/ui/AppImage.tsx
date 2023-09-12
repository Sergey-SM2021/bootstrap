import {
	ImgHTMLAttributes,
	ReactElement,
	memo,
	useLayoutEffect,
	useState,
} from "react"

interface AppImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  fallback: ReactElement;
  ErrorFallback: ReactElement;
}

export const AppImage = memo((props: AppImageProps) => {
	const { src, fallback, ErrorFallback, ...restProps } = props
	const [isLoading, setIsLoading] = useState(true)
	const [hasError, setHasError] = useState(false)

	useLayoutEffect(() => {
		const img = new Image()
		img.src = src
		img.onload = () => {
			setIsLoading(false)
		}
		img.onerror = () => {
			setHasError(true)
			setIsLoading(false)
		}
	}, [src])

	if (isLoading) {
		return fallback
	}

	if (hasError) {
		return ErrorFallback
	}

	return <img src={src} {...restProps} />
})
