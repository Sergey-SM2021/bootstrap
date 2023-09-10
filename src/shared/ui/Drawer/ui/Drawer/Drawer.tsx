import styles from "./styles.module.scss"
import { PropsWithChildren, useCallback, useEffect } from "react"

const items = ["save item", "open item", "share item", "delete item", "cancel"]
const height = items.length * 60 + 80

interface openProps {
  canceled?: boolean;
}

export interface DrawerProps extends PropsWithChildren {
  isOpen: boolean;
  onClose: VoidFunction;
  Gesture: typeof import("@use-gesture/react");
  Spring: typeof import("@react-spring/web");
}

export const Drawer = (props: DrawerProps) => {
	const { isOpen, onClose, children, Gesture, Spring } = props

	const [{ y }, api] = Spring.useSpring(() => ({ y: height }))

	const open = useCallback(
		({ canceled }: openProps) => {
			api.start({
				y: 0,
				immediate: false,
				config: canceled ? Spring.config.wobbly : Spring.config.stiff,
			})
		},
		[api, Spring.config.stiff, Spring.config.wobbly]
	)

	const close = (velocity = 0) => {
		api.start({
			y: height,
			immediate: false,
			config: { ...Spring.config.stiff, velocity },
		})
		onClose()
	}

	const bind = Gesture.useDrag(
		({
			last,
			velocity: [, vy],
			direction: [, dy],
			offset: [, oy],
			cancel,
			canceled,
		}) => {
			if (oy < -70) cancel()
			if (last) {
				oy > height * 0.5 || (vy > 0.5 && dy > 0)
					? close(vy)
					: open({ canceled })
			} else api.start({ y: oy, immediate: true })
		},
		{
			from: () => [0, y.get()],
			filterTaps: true,
			bounds: { top: 0 },
			rubberband: true,
		}
	)

	const display = y.to((py) => (py < height ? "block" : "none"))

	useEffect(() => {
		if (isOpen) {
			open({})
		}
	}, [isOpen, open])

	return (
		<>
			{isOpen ? (
				<Spring.a.div onClick={() => close()} className={styles.overlay} />
			) : null}
			<Spring.a.div
				className={styles.sheet}
				{...bind()}
				style={{ display, bottom: `calc(-100vh + ${height - 100}px)`, y }}
			>
				{children}
			</Spring.a.div>
		</>
	)
}
