import {
	MouseEvent,
	PropsWithChildren,
	useCallback,
	useEffect,
	useRef,
	useState,
} from "react"
import styles from "./Modal.module.scss"
import { classNames } from "shared/lib/helpers/classNames/classNames"

interface ModalProps extends PropsWithChildren {
  className?: string;
  isOpen?: boolean;
  onClose?: VoidFunction;
}

const ANIMATION_DELAY = 300

export const Modal = ({ children, className, isOpen, onClose }: ModalProps) => {
	const [isClosing, setIsClosing] = useState(false)
	const timerRef = useRef<ReturnType<typeof setTimeout>>()

	const handlerClick = (e: MouseEvent) => {
		e.stopPropagation()
	}

	const CloseHandler = useCallback(() => {
		setIsClosing(true)
		timerRef.current = setTimeout(() => {
			onClose()
			setIsClosing(false)
		}, ANIMATION_DELAY)
	}, [onClose])

	const onKeyDown = useCallback(
		(e: KeyboardEvent) => {
			if (e.key === "Escape") {
				CloseHandler()
			}
		},
		[CloseHandler]
	)

	useEffect(() => {
		return () => {
			clearTimeout(timerRef.current)
		}
	}, [])

	useEffect(() => {
		if (isOpen) {
			window.addEventListener("keydown", onKeyDown)
		}
		return () => {
			window.removeEventListener("keydown", onKeyDown)
		}
	}, [onKeyDown, isOpen])

	return (
		<div
			className={classNames(
				styles.Modal,
				{ [styles.Opend]: isOpen, [styles.IsClosing]: isClosing },
				[className]
			)}
			data-testid="Modal"
		>
			<div className={styles.Overlay} onClick={CloseHandler}>
				<div className={styles.Content} onClick={handlerClick}>
					{children}
				</div>
			</div>
		</div>
	)
}
